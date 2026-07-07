/* Übungs-Bausteine. Jede Übung rendert sich in root und ruft done(okErsterVersuch) auf. */
window.Ex = {

  audioRow(text) {
    const row = U.el("div", "audio-row");
    const b1 = U.el("button", "btn-audio", "🔊");
    b1.type = "button";
    b1.title = "Anhören";
    b1.onclick = () => Speech.say(text);
    const b2 = U.el("button", "btn-audio slow", "🐢");
    b2.type = "button";
    b2.title = "Langsam anhören";
    b2.onclick = () => Speech.say(text, true);
    row.append(b1, b2);
    if (!Speech.available()) row.style.display = "none";
    return row;
  },

  /* Feedback-Banner unten + Weiter-Knopf */
  feedback(root, ok, correctHtml, onNext) {
    const bar = U.el("div", "feedback " + (ok ? "ok" : "bad"));
    const inner = U.el("div", "feedback-inner");
    inner.append(U.el("div", "feedback-title", ok ? U.pick(["Richtig!", "Отлично! Super!", "Genau!", "Молодец!"]) : "Nicht ganz …"));
    if (correctHtml) inner.append(U.el("div", "feedback-answer", correctHtml));
    const next = U.el("button", "btn primary", "Weiter");
    next.type = "button";
    next.onclick = () => { bar.remove(); onNext(); };
    inner.append(next);
    bar.append(inner);
    root.append(bar);
    requestAnimationFrame(() => bar.classList.add("show"));
    next.focus();
  },

  /* Neues Wort vorstellen */
  present(root, item, done) {
    const card = U.el("div", "card center");
    card.append(U.el("div", "badge", "Neues Wort"));
    card.append(U.el("div", "word-ru", U.esc(item.ru)));
    if (Store.state.settings.showTr) card.append(U.el("div", "word-tr", U.esc(item.tr)));
    card.append(U.el("div", "word-de", U.esc(item.de)));
    if (item.note) card.append(U.el("div", "word-note", "💡 " + U.esc(item.note)));
    card.append(Ex.audioRow(item.ru));
    const next = U.el("button", "btn primary wide", "Weiter");
    next.type = "button";
    next.onclick = () => done(true);
    card.append(next);
    root.append(card);
    Speech.say(item.ru);
  },

  /* Grammatik-Tipp */
  tip(root, tip, done) {
    const card = U.el("div", "card tipcard");
    card.append(U.el("div", "badge tip", "Gut zu wissen"));
    card.append(U.el("h3", "", U.esc(tip.title)));
    card.append(U.el("div", "tip-body", U.md(tip.body)));
    const next = U.el("button", "btn primary wide", "Alles klar");
    next.type = "button";
    next.onclick = () => done(true);
    card.append(next);
    root.append(card);
  },

  /* Multiple Choice.
     cfg: { title, prompt (HTML), speakText?, autoSpeak?, options: [{label, ok, speak?}], correctHtml } */
  mc(root, cfg, done) {
    const card = U.el("div", "card");
    card.append(U.el("div", "task-title", U.esc(cfg.title)));
    if (cfg.prompt) card.append(U.el("div", "prompt", cfg.prompt));
    if (cfg.speakText) card.append(Ex.audioRow(cfg.speakText));
    const wrap = U.el("div", "options");
    let answered = false;
    U.shuffle(cfg.options).forEach(opt => {
      const b = U.el("button", "btn option", U.esc(opt.label));
      b.type = "button";
      b.onclick = () => {
        if (answered) return;
        answered = true;
        wrap.querySelectorAll("button").forEach(x => { x.disabled = true; });
        if (opt.ok) b.classList.add("right");
        else {
          b.classList.add("wrong");
          [...wrap.children].find(x => x.dataset.ok === "1").classList.add("right");
        }
        if (opt.speak) Speech.say(opt.speak);
        Ex.feedback(card, opt.ok, opt.ok ? "" : (cfg.correctHtml || ""), () => done(opt.ok));
      };
      b.dataset.ok = opt.ok ? "1" : "0";
      wrap.append(b);
    });
    card.append(wrap);
    root.append(card);
    if (cfg.autoSpeak && cfg.speakText) Speech.say(cfg.speakText);
  },

  /* Paare zuordnen (russisch <-> deutsch) */
  match(root, items, done) {
    const card = U.el("div", "card");
    card.append(U.el("div", "task-title", "Ordne die Paare zu"));
    const grid = U.el("div", "match-grid");
    const left = U.shuffle(items).map(it => ({ id: it.id, label: it.ru, side: "l" }));
    const right = U.shuffle(items).map(it => ({ id: it.id, label: it.de, side: "r" }));
    let sel = null, solved = 0, errors = 0;
    const colL = U.el("div", "match-col");
    const colR = U.el("div", "match-col");

    function make(entry) {
      const b = U.el("button", "btn match", U.esc(entry.label));
      b.type = "button";
      b.onclick = () => {
        if (b.classList.contains("done")) return;
        if (entry.side === "l") Speech.say(entry.label);
        if (sel && sel.entry.side === entry.side) {
          sel.btn.classList.remove("sel");
          sel = { btn: b, entry };
          b.classList.add("sel");
          return;
        }
        if (!sel) { sel = { btn: b, entry }; b.classList.add("sel"); return; }
        // Zwei verschiedene Seiten gewählt -> prüfen
        if (sel.entry.id === entry.id) {
          [sel.btn, b].forEach(x => { x.classList.remove("sel"); x.classList.add("done"); });
          solved++;
          if (solved === items.length) {
            Ex.feedback(card, errors === 0, errors ? "Alle Paare gefunden – mit " + errors + " Fehlversuch(en)." : "", () => done(errors === 0));
          }
        } else {
          errors++;
          [sel.btn, b].forEach(x => { x.classList.add("shake"); setTimeout(() => x.classList.remove("shake", "sel"), 500); });
        }
        sel = null;
      };
      return b;
    }
    left.forEach(e => colL.append(make(e)));
    right.forEach(e => colR.append(make(e)));
    grid.append(colL, colR);
    card.append(grid);
    root.append(card);
  },

  /* Wort aus Buchstaben-Kacheln zusammensetzen */
  spell(root, item, done) {
    const card = U.el("div", "card");
    card.append(U.el("div", "task-title", "Schreibe auf Russisch"));
    card.append(U.el("div", "prompt", U.esc(item.de)));
    card.append(Ex.audioRow(item.ru));

    const chars = [...item.ru];
    const isLetter = ch => /[а-яё]/i.test(ch);
    const slotsRow = U.el("div", "slots");
    const slots = chars.map(ch => {
      const s = U.el("span", "slot" + (isLetter(ch) ? "" : " fixed"), isLetter(ch) ? "" : U.esc(ch));
      if (!isLetter(ch)) s.dataset.fixed = "1";
      slotsRow.append(s);
      return { ch, el: s, filled: !isLetter(ch) };
    });
    card.append(slotsRow);

    const letters = chars.filter(isLetter);
    const distractorPool = "абвгдежзиклмнопрстуфхцчшщыэюя";
    const distractors = U.sample([...distractorPool].filter(c => !letters.includes(c)), 2);
    const bank = U.el("div", "bank");
    let errors = 0;

    function nextSlot() { return slots.find(s => !s.filled); }
    function finish() {
      Speech.say(item.ru);
      const tr = Store.state.settings.showTr ? ' <span class="tr">' + U.esc(item.tr) + "</span>" : "";
      Ex.feedback(card, errors === 0, "<b>" + U.esc(item.ru) + "</b>" + tr, () => done(errors === 0));
    }
    U.shuffle(letters.concat(distractors)).forEach(ch => {
      const b = U.el("button", "btn tile", U.esc(ch));
      b.type = "button";
      b.onclick = () => {
        const slot = nextSlot();
        if (!slot) return;
        if (ch.toLowerCase() === slot.ch.toLowerCase()) {
          slot.el.textContent = slot.ch;
          slot.el.classList.add("filled");
          slot.filled = true;
          b.disabled = true;
          b.classList.add("used");
          if (!nextSlot()) finish();
        } else {
          errors++;
          b.classList.add("shake");
          setTimeout(() => b.classList.remove("shake"), 400);
        }
      };
      bank.append(b);
    });
    card.append(bank);
    root.append(card);
  },

  /* Satz aus Wort-Kacheln bauen */
  order(root, item, done) {
    const card = U.el("div", "card");
    card.append(U.el("div", "task-title", "Baue den Satz"));
    card.append(U.el("div", "prompt", U.esc(item.de)));

    const words = item.ru.split(" ");
    const answer = U.el("div", "answer-row");
    const bank = U.el("div", "bank");
    const check = U.el("button", "btn primary wide", "Prüfen");
    check.type = "button";
    check.disabled = true;
    let placed = [];

    function refresh() { check.disabled = placed.length !== words.length; }

    U.shuffle(words.map((w, i) => ({ w, i }))).forEach(({ w }) => {
      const b = U.el("button", "btn tile word", U.esc(w));
      b.type = "button";
      b.onclick = () => {
        if (b.parentElement === bank) {
          answer.append(b);
          placed.push(b);
        } else {
          bank.append(b);
          placed = placed.filter(x => x !== b);
        }
        refresh();
      };
      bank.append(b);
    });

    check.onclick = () => {
      const got = placed.map(b => b.textContent).join(" ");
      const ok = U.norm(got) === U.norm(item.ru);
      Speech.say(item.ru);
      const tr = Store.state.settings.showTr ? ' <span class="tr">' + U.esc(item.tr) + "</span>" : "";
      answer.querySelectorAll(".tile").forEach(t => t.classList.add(ok ? "right" : "wrong"));
      Ex.feedback(card, ok, "<b>" + U.esc(item.ru) + "</b>" + tr, () => done(ok));
    };

    card.append(answer, bank, check);
    root.append(card);
  },

  /* Karteikarte mit 4-stufiger Selbsteinschätzung (SM-2-Qualitätsskala).
     done(quality) meldet 1=vergessen, 3=schwer, 4=gut, 5=leicht an SRS.grade(). */
  flash(root, item, done) {
    const card = U.el("div", "card center");
    card.append(U.el("div", "task-title", "Erinnerst du dich?"));
    card.append(U.el("div", "word-de big", U.esc(item.de)));
    const reveal = U.el("button", "btn primary wide", "Antwort zeigen");
    reveal.type = "button";
    reveal.onclick = () => {
      reveal.remove();
      card.append(U.el("div", "word-ru", U.esc(item.ru)));
      if (Store.state.settings.showTr) card.append(U.el("div", "word-tr", U.esc(item.tr)));
      card.append(Ex.audioRow(item.ru));
      Speech.say(item.ru);
      const row = U.el("div", "grade-row four");
      [
        ["Vergessen", "bad-btn", SRS.Q.FORGOT],
        ["Schwer", "hard-btn", SRS.Q.HARD],
        ["Gut", "mid-btn", SRS.Q.GOOD],
        ["Leicht", "good-btn", SRS.Q.EASY]
      ].forEach(([label, cls, q]) => {
        const b = U.el("button", "btn " + cls, label);
        b.type = "button";
        b.onclick = () => done(q);
        row.append(b);
      });
      card.append(row);
    };
    card.append(reveal);
    root.append(card);
  },

  /* Hilfen für Multiple-Choice-Varianten */
  mcRuDe(root, item, pool, done) {
    const wrong = U.sample(pool.filter(p => p.id !== item.id && p.de !== item.de), 2);
    Ex.mc(root, {
      title: "Was bedeutet das?",
      prompt: '<span class="prompt-ru">' + U.esc(item.ru) + "</span>" +
        (Store.state.settings.showTr ? '<span class="prompt-tr">' + U.esc(item.tr) + "</span>" : ""),
      speakText: item.ru,
      autoSpeak: true,
      options: [{ label: item.de, ok: true }].concat(wrong.map(w => ({ label: w.de, ok: false }))),
      correctHtml: "<b>" + U.esc(item.ru) + "</b> = " + U.esc(item.de)
    }, done);
  },

  mcDeRu(root, item, pool, done) {
    const wrong = U.sample(pool.filter(p => p.id !== item.id && p.ru !== item.ru), 2);
    Ex.mc(root, {
      title: "Wie heißt das auf Russisch?",
      prompt: U.esc(item.de),
      options: [{ label: item.ru, ok: true, speak: item.ru }].concat(wrong.map(w => ({ label: w.ru, ok: false }))),
      correctHtml: "<b>" + U.esc(item.ru) + "</b>" + (Store.state.settings.showTr ? ' <span class="tr">' + U.esc(item.tr) + "</span>" : "")
    }, done);
  },

  listen(root, item, pool, done) {
    if (!Speech.available()) return Ex.mcRuDe(root, item, pool, done);
    const wrong = U.sample(pool.filter(p => p.id !== item.id && p.ru !== item.ru), 2);
    Ex.mc(root, {
      title: "Was hörst du?",
      prompt: "",
      speakText: item.ru,
      autoSpeak: true,
      options: [{ label: item.ru, ok: true }].concat(wrong.map(w => ({ label: w.ru, ok: false }))),
      correctHtml: "<b>" + U.esc(item.ru) + "</b> = " + U.esc(item.de)
    }, done);
  },

  listenDe(root, item, pool, done) {
    if (!Speech.available()) return Ex.mcRuDe(root, item, pool, done);
    const wrong = U.sample(pool.filter(p => p.id !== item.id && p.de !== item.de), 2);
    Ex.mc(root, {
      title: "Hör zu – was bedeutet es?",
      prompt: "",
      speakText: item.ru,
      autoSpeak: true,
      options: [{ label: item.de, ok: true }].concat(wrong.map(w => ({ label: w.de, ok: false }))),
      correctHtml: "<b>" + U.esc(item.ru) + "</b> = " + U.esc(item.de)
    }, done);
  }
};
