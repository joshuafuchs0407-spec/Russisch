/* Lektions-Player: Wörter vorstellen -> Übungen -> Grammatik -> Dialog -> Zusammenfassung */
window.Lesson = {

  start(lessonId) {
    const lesson = C.lesson(lessonId);
    if (!lesson) { location.hash = "#course"; return; }
    const pool = lesson.items.map(it => ({ ...it, id: C.itemId(lesson.id, it.ru) }));
    const queue = Lesson.buildQueue(lesson, pool);
    let pos = 0, correct = 0, scored = 0, xp = 0;

    const view = document.getElementById("view");
    view.innerHTML = "";
    view.className = "in-session";
    document.body.classList.add("session-open");

    const head = U.el("div", "session-head");
    const close = U.el("button", "btn-icon", "✕");
    close.type = "button";
    close.onclick = () => {
      if (confirm("Lektion wirklich beenden? Der Fortschritt dieser Lektion geht verloren.")) {
        Speech.stop();
        location.hash = "#course";
      }
    };
    const barWrap = U.el("div", "progress");
    const bar = U.el("div", "progress-fill");
    barWrap.append(bar);
    head.append(close, barWrap);
    const body = U.el("div", "session-body");
    view.append(head, body);

    function step() {
      bar.style.width = Math.round(pos / queue.length * 100) + "%";
      body.innerHTML = "";
      window.scrollTo(0, 0);
      if (pos >= queue.length) return finish();
      const task = queue[pos++];
      const grade = ok => {
        if (task.scored) {
          scored++;
          if (ok) { correct++; xp += 2; Store.addXp(2); }
        }
        step();
      };
      switch (task.t) {
        case "present": Ex.present(body, task.it, grade); break;
        case "tip":     Ex.tip(body, task.tip, grade); break;
        case "mcRuDe":  Ex.mcRuDe(body, task.it, pool, grade); break;
        case "mcDeRu":  Ex.mcDeRu(body, task.it, pool, grade); break;
        case "listen":  Ex.listen(body, task.it, pool, grade); break;
        case "match":   Ex.match(body, task.items, grade); break;
        case "spell":   Ex.spell(body, task.it, grade); break;
        case "order":   Ex.order(body, task.it, grade); break;
        case "dialogue": Lesson.dialogue(body, lesson, res => {
          scored += res.scored; correct += res.correct;
          const gained = res.correct * 2;
          if (gained) { xp += gained; Store.addXp(gained); }
          step();
        }); break;
        default: step();
      }
    }

    function finish() {
      const firstTime = !Store.isDone(lesson.id);
      Store.markDone(lesson.id);
      pool.forEach(it => SRS.learn(it.id));
      Store.save();
      const bonus = 10;
      xp += bonus;
      Store.addXp(bonus);

      body.innerHTML = "";
      const card = U.el("div", "card center");
      card.append(U.el("div", "finish-emoji", "🎉"));
      card.append(U.el("h2", "", "Lektion geschafft!"));
      card.append(U.el("p", "finish-line", scored
        ? correct + " von " + scored + " Aufgaben richtig"
        : "Gut gemacht!"));
      card.append(U.el("p", "finish-line", "+" + xp + " XP" + (firstTime ? " · " + pool.length + " Wörter im Karteikasten" : "")));
      card.append(U.el("p", "finish-line subtle", "Die neuen Wörter sind ab morgen zur Wiederholung fällig – der Wiederholungs-Manager erinnert dich."));
      const btn = U.el("button", "btn primary wide", "Fertig");
      btn.type = "button";
      btn.onclick = () => { location.hash = "#course"; };
      card.append(btn);
      body.append(card);
      bar.style.width = "100%";
    }

    step();
  },

  buildQueue(lesson, pool) {
    const q = [];
    const chunkSize = 3;
    const chunks = [];
    for (let i = 0; i < pool.length; i += chunkSize) chunks.push(pool.slice(i, i + chunkSize));
    const tips = (lesson.tips || []).slice();

    chunks.forEach(chunk => {
      chunk.forEach(it => q.push({ t: "present", it }));
      const types = ["mcRuDe", "mcDeRu", "listen"];
      U.shuffle(chunk).forEach((it, i) => q.push({ t: types[i % 3], it, scored: true }));
      if (tips.length) q.push({ t: "tip", tip: tips.shift() });
    });

    if (pool.length >= 4) q.push({ t: "match", items: U.sample(pool, 4), scored: true });

    const phrases = pool.filter(it => it.ru.split(" ").length >= 3);
    U.sample(phrases, 2).forEach(it => q.push({ t: "order", it, scored: true }));

    const words = pool.filter(it => it.ru.split(" ").length === 1 && [...it.ru].length <= 10);
    U.sample(words, 2).forEach(it => q.push({ t: "spell", it, scored: true }));

    if (lesson.dialogue) q.push({ t: "dialogue" });
    return q;
  },

  /* Dialog: Zeilen erscheinen als Chat, Lücken werden per Auswahl gefüllt */
  dialogue(root, lesson, done) {
    const d = lesson.dialogue;
    const card = U.el("div", "card dialog-card");
    card.append(U.el("div", "badge", "Dialog"));
    card.append(U.el("h3", "", U.esc(d.title)));
    if (d.context) card.append(U.el("p", "dialog-context", U.esc(d.context)));
    const chat = U.el("div", "chat");
    card.append(chat);
    root.append(card);

    const speakers = [...new Set(d.lines.map(l => l.who))];
    let i = 0, scored = 0, correct = 0;

    function bubble(line, ruHtml) {
      const side = speakers.indexOf(line.who) % 2 === 0 ? "left" : "right";
      const b = U.el("div", "bubble " + side);
      b.append(U.el("div", "bubble-who", U.esc(line.who)));
      const ru = U.el("div", "bubble-ru", ruHtml);
      b.append(ru);
      b.append(U.el("div", "bubble-de", U.esc(line.de)));
      b.onclick = () => Speech.say(line.ru);
      chat.append(b);
      b.scrollIntoView({ behavior: "smooth", block: "end" });
      return b;
    }

    function next() {
      if (i >= d.lines.length) {
        const doneBtn = U.el("button", "btn primary wide", "Dialog abschließen");
        doneBtn.type = "button";
        doneBtn.onclick = () => done({ scored, correct });
        card.append(doneBtn);
        doneBtn.scrollIntoView({ behavior: "smooth", block: "end" });
        return;
      }
      const line = d.lines[i++];
      if (!line.gap) {
        bubble(line, U.esc(line.ru));
        Speech.say(line.ru);
        setTimeout(next, Math.max(1200, line.ru.length * 70));
        return;
      }
      // Zeile mit Lücke
      scored++;
      const gapHtml = U.esc(line.ru).replace(U.esc(line.gap), '<span class="gap">___</span>');
      const b = bubble(line, gapHtml);
      const opts = U.el("div", "gap-options");
      let first = true;
      U.shuffle([line.gap].concat(line.opts || [])).forEach(o => {
        const btn = U.el("button", "btn option small", U.esc(o));
        btn.type = "button";
        btn.onclick = () => {
          if (o === line.gap) {
            if (first) correct++;
            opts.remove();
            b.querySelector(".bubble-ru").innerHTML = U.esc(line.ru).replace(U.esc(line.gap), "<b>" + U.esc(line.gap) + "</b>");
            Speech.say(line.ru);
            setTimeout(next, Math.max(1200, line.ru.length * 70));
          } else {
            first = false;
            btn.classList.add("wrong", "shake");
            setTimeout(() => btn.classList.remove("shake"), 400);
            btn.disabled = true;
          }
        };
        opts.append(btn);
      });
      card.append(opts);
      opts.scrollIntoView({ behavior: "smooth", block: "end" });
    }
    next();
  }
};
