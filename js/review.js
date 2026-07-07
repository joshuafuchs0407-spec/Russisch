/* Wiederholung: fällige Wörter aus dem Karteikasten üben (Babbel-Review) */
window.Review = {
  SESSION_MAX: 15,

  /* mode: mix | mc | listen | write | flash ; extra=true übt auch ohne Fälligkeit */
  start(mode, extra) {
    const view = document.getElementById("view");
    let ids = SRS.dueIds();
    if (extra && ids.length === 0) {
      ids = Object.keys(Store.state.srs).filter(id => C.item(id));
    }
    ids = U.shuffle(ids).slice(0, Review.SESSION_MAX);
    if (ids.length === 0) { location.hash = "#ueben"; return; }

    const pool = C.allItems();
    let pos = 0, correct = 0;

    view.innerHTML = "";
    view.className = "in-session";
    document.body.classList.add("session-open");

    const head = U.el("div", "session-head");
    const close = U.el("button", "btn-icon", "✕");
    close.type = "button";
    close.onclick = () => { Speech.stop(); location.hash = "#ueben"; };
    const barWrap = U.el("div", "progress");
    const bar = U.el("div", "progress-fill");
    barWrap.append(bar);
    head.append(close, barWrap);
    const body = U.el("div", "session-body");
    view.append(head, body);

    function taskFor(item) {
      const canSpeak = Speech.available();
      let t = mode;
      if (mode === "mix") {
        const opts = ["mc", "write", "flash"].concat(canSpeak ? ["listen", "listen"] : []);
        t = U.pick(opts);
      }
      return t;
    }

    function step() {
      bar.style.width = Math.round(pos / ids.length * 100) + "%";
      body.innerHTML = "";
      window.scrollTo(0, 0);
      if (pos >= ids.length) return finish();
      const id = ids[pos++];
      const item = C.item(id);
      /* Übungen mit nur richtig/falsch */
      const gradeBool = ok => {
        SRS.gradeBool(id, ok);
        if (ok) { correct++; Store.addXp(2); }
        step();
      };
      /* Karteikarte meldet die volle 4-stufige Qualität */
      const gradeQuality = quality => {
        SRS.grade(id, quality);
        if (quality >= SRS.Q.GOOD) { correct++; Store.addXp(quality === SRS.Q.EASY ? 3 : 2); }
        step();
      };
      const t = taskFor(item);
      if (t === "mc") Ex.mcDeRu(body, item, pool, gradeBool);
      else if (t === "listen") Ex.listenDe(body, item, pool, gradeBool);
      else if (t === "flash") Ex.flash(body, item, gradeQuality);
      else if (t === "write") {
        if (item.ru.split(" ").length >= 3) Ex.order(body, item, gradeBool);
        else if ([...item.ru].length <= 12) Ex.spell(body, item, gradeBool);
        else Ex.mcDeRu(body, item, pool, gradeBool);
      } else Ex.mcDeRu(body, item, pool, gradeBool);
    }

    function finish() {
      Store.addXp(3); // kleiner Abschluss-Bonus
      body.innerHTML = "";
      const due = SRS.dueIds().length;
      const card = U.el("div", "card center");
      card.append(U.el("div", "finish-emoji", correct === ids.length ? "🏆" : "💪"));
      card.append(U.el("h2", "", "Wiederholung fertig!"));
      card.append(U.el("p", "finish-line", correct + " von " + ids.length + " gewusst"));
      card.append(U.el("p", "finish-line subtle", due > 0
        ? "Noch " + due + " Wörter fällig – gleich weitermachen?"
        : "Alle fälligen Wörter sind wiederholt. Отлично!"));
      const row = U.el("div", "grade-row");
      if (due > 0) {
        const again = U.el("button", "btn good-btn", "Weiter üben");
        again.type = "button";
        again.onclick = () => Review.start(mode);
        row.append(again);
      }
      const home = U.el("button", "btn primary", "Fertig");
      home.type = "button";
      home.onclick = () => { location.hash = "#home"; };
      row.append(home);
      card.append(row);
      body.append(card);
      bar.style.width = "100%";
    }

    step();
  }
};
