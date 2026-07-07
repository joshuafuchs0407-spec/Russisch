/* Lesetexte: Satz-fuer-Satz-Anzeige mit Audio, danach ein kurzes Verstaendnisquiz.
   Nutzt bewusst nur bereits gelernten Wortschatz, um echtes Leseverstaendnis
   aufzubauen statt nur Einzelwoerter oder kurze Dialogzeilen. */
window.Reading = {

  get(id) { return (window.READINGS || []).find(r => r.id === id); },

  isUnlocked(r) { return C.doneThroughUnit(r.unlockAfterUnit); },

  start(id) {
    const r = Reading.get(id);
    if (!r || !Reading.isUnlocked(r)) { location.hash = "#course"; return; }

    const view = document.getElementById("view");
    view.innerHTML = "";
    view.className = "in-session";
    document.body.classList.add("session-open");

    const head = U.el("div", "session-head");
    const close = U.el("button", "btn-icon", "✕");
    close.type = "button";
    close.onclick = () => { Speech.stop(); location.hash = "#course"; };
    const barWrap = U.el("div", "progress");
    const bar = U.el("div", "progress-fill");
    barWrap.append(bar);
    head.append(close, barWrap);
    const body = U.el("div", "session-body");
    view.append(head, body);

    const totalSteps = r.lines.length + 1; // + Quiz-Schritt
    let shown = 0;
    let quizCorrect = 0;

    function renderText() {
      shown = r.lines.length;
      bar.style.width = Math.round(shown / totalSteps * 100) + "%";
      body.innerHTML = "";
      const card = U.el("div", "card dialog-card");
      card.append(U.el("div", "badge", r.level + " · Lesetext"));
      card.append(U.el("h3", "", U.esc(r.title)));
      if (r.desc) card.append(U.el("p", "dialog-context", U.esc(r.desc)));
      const chat = U.el("div", "chat reading-text");
      r.lines.forEach(line => {
        const p = U.el("div", "read-line");
        const ruRow = U.el("div", "read-ru");
        const btn = U.el("button", "btn-audio tiny", "🔊");
        btn.type = "button";
        btn.onclick = () => Speech.say(line.ru);
        ruRow.append(U.el("span", "", U.esc(line.ru)), btn);
        p.append(ruRow);
        const de = U.el("div", "read-de hidden", U.esc(line.de));
        p.onclick = e => { if (e.target !== btn) de.classList.toggle("hidden"); };
        p.append(de);
        chat.append(p);
      });
      card.append(chat);
      card.append(U.el("p", "subtle", "Tippe auf eine Zeile, um die Übersetzung zu sehen. 🔊 spielt den Satz vor."));
      const next = U.el("button", "btn primary wide", r.questions && r.questions.length ? "Zu den Fragen" : "Fertig");
      next.type = "button";
      next.onclick = r.questions && r.questions.length ? renderQuiz : finish;
      card.append(next);
      body.append(card);
      window.scrollTo(0, 0);
    }

    function renderQuiz() {
      let qi = 0;
      function step() {
        bar.style.width = Math.round((r.lines.length + qi) / totalSteps * 100) + "%";
        body.innerHTML = "";
        window.scrollTo(0, 0);
        if (qi >= r.questions.length) return finish();
        const q = r.questions[qi];
        Ex.mc(body, {
          title: "Verständnisfrage " + (qi + 1) + "/" + r.questions.length,
          prompt: U.esc(q.q),
          options: q.options.map((o, i) => ({ label: o, ok: i === q.correct })),
          correctHtml: "Richtig wäre: <b>" + U.esc(q.options[q.correct]) + "</b>"
        }, ok => { if (ok) quizCorrect++; qi++; step(); });
      }
      step();
    }

    function finish() {
      const firstTime = !Store.isReadingDone(r.id);
      Store.markReadingDone(r.id);
      const xp = 15 + (firstTime ? 10 : 0);
      Store.addXp(xp);
      body.innerHTML = "";
      const card = U.el("div", "card center");
      card.append(U.el("div", "finish-emoji", "📖"));
      card.append(U.el("h2", "", "Lesetext geschafft!"));
      if (r.questions && r.questions.length) {
        card.append(U.el("p", "finish-line", quizCorrect + " von " + r.questions.length + " Fragen richtig"));
      }
      card.append(U.el("p", "finish-line", "+" + xp + " XP"));
      const btn = U.el("button", "btn primary wide", "Fertig");
      btn.type = "button";
      btn.onclick = () => { location.hash = "#course"; };
      card.append(btn);
      body.append(card);
      bar.style.width = "100%";
    }

    renderText();
  }
};
