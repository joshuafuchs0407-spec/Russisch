/* App-Gerüst: Router, Ansichten, Navigation */
window.App = {

  boot() {
    Store.load();
    Speech.init();
    if ("serviceWorker" in navigator && location.protocol !== "file:") {
      navigator.serviceWorker.register("sw.js").catch(() => {});
    }
    window.addEventListener("hashchange", App.route);
    App.route();
  },

  route() {
    Speech.stop();
    document.body.classList.remove("session-open");
    const view = document.getElementById("view");
    view.className = "";
    const hash = (location.hash || "#home").slice(1);
    const [name, arg, arg2] = hash.split("/");

    if (name === "lesson" && arg) return Lesson.start(arg);
    if (name === "review") return Review.start(arg || "mix", arg2 === "extra");

    const views = { home: App.home, course: App.course, ueben: App.ueben, stats: App.stats, settings: App.settings };
    (views[name] || App.home)(view);
    App.nav(name in views ? name : "home");
    window.scrollTo(0, 0);
  },

  nav(active) {
    const nav = document.getElementById("nav");
    const due = SRS.dueIds().length;
    const tabs = [
      ["home", "🏠", "Start"],
      ["course", "📚", "Kurs"],
      ["ueben", "🔁", "Üben"],
      ["stats", "📊", "Statistik"]
    ];
    nav.innerHTML = tabs.map(([id, icon, label]) =>
      '<a href="#' + id + '" class="tab' + (active === id ? " active" : "") + '">' +
      '<span class="tab-icon">' + icon +
      (id === "ueben" && due > 0 ? '<span class="dot">' + due + "</span>" : "") +
      "</span><span>" + label + "</span></a>"
    ).join("");
  },

  nextLesson() {
    return C.lessons().find(l => !Store.isDone(l.id)) || null;
  },

  /* ---------- Startseite ---------- */
  home(view) {
    view.innerHTML = "";
    const goal = Store.state.settings.goal;
    const xp = Store.xpToday();
    const pct = Math.min(1, xp / goal);
    const streak = Store.streak();
    const due = SRS.dueIds().length;
    const next = App.nextLesson();
    const hour = new Date().getHours();
    const greet = hour < 11 ? "Доброе утро!" : hour < 18 ? "Добрый день!" : "Добрый вечер!";

    const hero = U.el("div", "card hero");
    const R = 42, CIRC = 2 * Math.PI * R;
    hero.innerHTML =
      '<div class="hero-left">' +
        '<div class="greet">' + greet + "</div>" +
        '<div class="streak">🔥 <b>' + streak + "</b> Tage-Streak</div>" +
        '<div class="subtle">' + (xp >= goal ? "Tagesziel erreicht – молодец!" : "Noch " + (goal - xp) + " XP bis zum Tagesziel") + "</div>" +
      "</div>" +
      '<div class="ring-wrap">' +
        '<svg viewBox="0 0 100 100" class="ring">' +
          '<circle cx="50" cy="50" r="' + R + '" class="ring-bg"/>' +
          '<circle cx="50" cy="50" r="' + R + '" class="ring-fg" stroke-dasharray="' + CIRC + '" stroke-dashoffset="' + (CIRC * (1 - pct)) + '"/>' +
        "</svg>" +
        '<div class="ring-label"><b>' + xp + "</b><span>/" + goal + " XP</span></div>" +
      "</div>";
    view.append(hero);

    if (due > 0) {
      const c = U.el("div", "card action");
      c.innerHTML = '<div><div class="action-title">Wiederholen</div>' +
        '<div class="subtle">' + due + (due === 1 ? " Wort ist" : " Wörter sind") + " fällig</div></div>";
      const b = U.el("button", "btn primary", "Los");
      b.type = "button";
      b.onclick = () => { location.hash = "#review/mix"; };
      c.append(b);
      view.append(c);
    }

    if (next) {
      const c = U.el("div", "card action");
      c.innerHTML = '<div><div class="action-title">Weiter lernen</div>' +
        '<div class="subtle">' + U.esc(next.unitTitle) + " · " + U.esc(next.title) + "</div></div>";
      const b = U.el("button", "btn primary", "Start");
      b.type = "button";
      b.onclick = () => { location.hash = "#lesson/" + next.id; };
      c.append(b);
      view.append(c);
    } else {
      const c = U.el("div", "card");
      c.innerHTML = "<b>Alle Lektionen geschafft! 🏆</b><div class='subtle'>Halte deine Wörter mit täglichen Wiederholungen frisch.</div>";
      view.append(c);
    }

    const doneCount = C.lessons().filter(l => Store.isDone(l.id)).length;
    const mini = U.el("div", "mini-grid");
    mini.innerHTML =
      '<div class="mini"><b>' + SRS.learnedCount() + "</b><span>Wörter gelernt</span></div>" +
      '<div class="mini"><b>' + doneCount + "/" + C.lessons().length + "</b><span>Lektionen</span></div>" +
      '<div class="mini"><b>' + Store.xpTotal() + "</b><span>XP gesamt</span></div>";
    view.append(mini);
  },

  /* ---------- Kursübersicht ---------- */
  LEVELS: [
    ["A1", "Grundlagen"], ["A2", "Aufbauwortschatz"], ["B1", "Mittelstufe"],
    ["B2", "Gehobene Mittelstufe"], ["C1", "Fortgeschritten"]
  ],

  course(view, q) {
    view.innerHTML = "";
    view.append(U.el("h2", "page-title", "Dein Kurs"));

    const total = C.lessons().length;
    const doneAll = C.lessons().filter(l => Store.isDone(l.id)).length;
    const summary = U.el("div", "card course-summary");
    summary.innerHTML = "<b>" + C.allItems().length + "</b> Wörter im Kurs · <b>" + doneAll + "/" + total + "</b> Lektionen geschafft";
    view.append(summary);

    const searchWrap = U.el("div", "search-wrap");
    const input = U.el("input", "search-input");
    input.type = "search";
    input.placeholder = "Lektion oder Wort suchen …";
    input.value = q || "";
    input.oninput = () => App.course(view, input.value);
    searchWrap.append(input);
    view.append(searchWrap);

    const needle = U.norm(q || "");
    const unitsByLevel = {};
    const unitNo = {};
    C.units().forEach((u, i) => {
      unitNo[u.id] = i + 1;
      const lvl = u.level || "A1";
      (unitsByLevel[lvl] = unitsByLevel[lvl] || []).push(u);
    });

    let shown = 0;
    App.LEVELS.forEach(([lvl, lvlLabel]) => {
      const unitsHere = unitsByLevel[lvl] || [];
      if (!unitsHere.length) return;

      const matchedUnits = !needle ? unitsHere : unitsHere
        .map(u => ({
          ...u,
          lessons: u.lessons.filter(l =>
            U.norm(l.title).includes(needle) ||
            U.norm(l.desc || "").includes(needle) ||
            l.items.some(it => U.norm(it.ru).includes(needle) || U.norm(it.de).includes(needle))
          )
        }))
        .filter(u => u.lessons.length);
      if (needle && !matchedUnits.length) return;

      const doneCnt = unitsHere.reduce((n, u) => n + u.lessons.filter(l => Store.isDone(l.id)).length, 0);
      const totalCnt = unitsHere.reduce((n, u) => n + u.lessons.length, 0);
      const section = U.el("div", "level-section");
      section.append(U.el("div", "level-head",
        "<h3>" + lvl + " · " + U.esc(lvlLabel) + "</h3><span class='subtle'>" + doneCnt + "/" + totalCnt + "</span>"));
      view.append(section);

      matchedUnits.forEach((u, ui) => {
        const doneCntU = u.lessons.filter(l => Store.isDone(l.id)).length;
        const card = U.el("div", "card unit");
        card.append(U.el("div", "unit-head",
          '<div><div class="unit-no">Einheit ' + unitNo[u.id] + "</div><h3>" + U.esc(u.title) + "</h3>" +
          '<div class="subtle">' + U.esc(u.desc) + "</div></div>" +
          '<div class="unit-progress">' + doneCntU + "/" + u.lessons.length + "</div>"));
        u.lessons.forEach(l => {
          shown++;
          const row = U.el("div", "lesson-row" + (Store.isDone(l.id) ? " done" : ""));
          row.innerHTML = '<div class="lesson-check">' + (Store.isDone(l.id) ? "✓" : "") + "</div>" +
            '<div class="lesson-info"><b>' + U.esc(l.title) + "</b><span>" + U.esc(l.desc || "") + " · " + l.items.length + " Wörter</span></div>";
          const b = U.el("button", "btn small-btn", Store.isDone(l.id) ? "Nochmal" : "Start");
          b.type = "button";
          b.onclick = () => { location.hash = "#lesson/" + l.id; };
          row.append(b);
          card.append(row);
        });
        view.append(card);
      });
    });

    if (needle && shown === 0) {
      view.append(U.el("div", "card subtle center", "Keine Treffer für „" + U.esc(q) + "“."));
    }
  },

  /* ---------- Üben / Review-Center ---------- */
  ueben(view) {
    view.innerHTML = "";
    view.append(U.el("h2", "page-title", "Wiederholen"));
    const due = SRS.dueIds().length;
    const learned = SRS.learnedCount();

    const info = U.el("div", "card");
    if (learned === 0) {
      info.innerHTML = "<b>Noch keine Wörter im Karteikasten.</b><div class='subtle'>Schließe zuerst eine Lektion ab – danach landen die Wörter hier zur Wiederholung.</div>";
      view.append(info);
      return;
    }
    if (due > 0) {
      info.innerHTML = "<b>" + due + (due === 1 ? " Wort ist" : " Wörter sind") + " fällig.</b>" +
        "<div class='subtle'>Der Wiederholungs-Manager zeigt dir jedes Wort genau dann, wenn du es zu vergessen drohst (nach 1, 4, 7, 14, 60 und 180 Tagen).</div>";
    } else {
      const nd = SRS.nextDue();
      info.innerHTML = "<b>Alles wiederholt! 🎉</b><div class='subtle'>Nächste Fälligkeit: " +
        (nd ? new Date(nd).toLocaleDateString("de-DE", { weekday: "long", day: "numeric", month: "long" }) : "–") +
        ". Du kannst trotzdem extra trainieren.</div>";
    }
    view.append(info);

    const modes = [
      ["mix", "🎲", "Gemischt", "Alle Übungsarten durcheinander – empfohlen"],
      ["mc", "🃏", "Wortwahl", "Die richtige Übersetzung antippen"],
      ["listen", "🎧", "Hören", "Nur nach Gehör verstehen"],
      ["write", "⌨️", "Schreiben", "Wörter und Sätze selbst zusammensetzen"],
      ["flash", "🗂️", "Karteikarten", "Klassisch mit Selbsteinschätzung"]
    ];
    const grid = U.el("div", "mode-grid");
    modes.forEach(([id, icon, title, desc]) => {
      if (id === "listen" && !Speech.available()) return;
      const b = U.el("button", "card mode");
      b.type = "button";
      b.innerHTML = '<span class="mode-icon">' + icon + "</span><b>" + title + "</b><span class='subtle'>" + desc + "</span>";
      b.onclick = () => { location.hash = due > 0 ? "#review/" + id : "#review/" + id + "/extra"; };
      grid.append(b);
    });
    view.append(grid);
  },

  /* ---------- Statistik ---------- */
  stats(view) {
    view.innerHTML = "";
    view.append(U.el("h2", "page-title", "Statistik"));

    const grid = U.el("div", "mini-grid four");
    grid.innerHTML =
      '<div class="mini"><b>🔥 ' + Store.streak() + "</b><span>Tage-Streak</span></div>" +
      '<div class="mini"><b>' + SRS.learnedCount() + "</b><span>Wörter gelernt</span></div>" +
      '<div class="mini"><b>' + Store.state.reviews + "</b><span>Wiederholungen</span></div>" +
      '<div class="mini"><b>' + Store.xpTotal() + "</b><span>XP gesamt</span></div>";
    view.append(grid);

    /* Wörter je SRS-Stufe */
    const counts = SRS.stageCounts();
    const max = Math.max(1, ...counts.slice(1));
    const labels = ["", "Stufe 1 (1 Tag)", "Stufe 2 (4 Tage)", "Stufe 3 (7 Tage)", "Stufe 4 (14 Tage)", "Stufe 5 (60 Tage)", "Stufe 6 (Langzeit)"];
    const srsCard = U.el("div", "card");
    srsCard.append(U.el("h3", "", "Dein Karteikasten"));
    for (let s = 1; s <= 6; s++) {
      const row = U.el("div", "bar-row");
      row.innerHTML = "<span class='bar-label'>" + labels[s] + "</span>" +
        "<span class='bar-track'><span class='bar-fill' style='width:" + Math.round(counts[s] / max * 100) + "%'></span></span>" +
        "<span class='bar-num'>" + counts[s] + "</span>";
      srsCard.append(row);
    }
    view.append(srsCard);

    /* Aktivität der letzten 7 Tage */
    const actCard = U.el("div", "card");
    actCard.append(U.el("h3", "", "Letzte 7 Tage"));
    const days = [];
    for (let i = 6; i >= 0; i--) days.push(U.todayKey(-i));
    const maxXp = Math.max(Store.state.settings.goal, ...days.map(d => Store.xpOn(d)));
    const chart = U.el("div", "chart");
    days.forEach(d => {
      const v = Store.xpOn(d);
      const col = U.el("div", "chart-col");
      col.innerHTML = "<div class='chart-bar" + (v >= Store.state.settings.goal ? " goal" : "") + "' style='height:" +
        Math.max(4, Math.round(v / maxXp * 100)) + "%'></div>" +
        "<span>" + new Date(d + "T12:00:00").toLocaleDateString("de-DE", { weekday: "short" }) + "</span>";
      chart.append(col);
    });
    actCard.append(chart);
    view.append(actCard);
  },

  /* ---------- Einstellungen ---------- */
  settings(view) {
    view.innerHTML = "";
    view.append(U.el("h2", "page-title", "Einstellungen"));
    const s = Store.state.settings;

    const card = U.el("div", "card");

    /* Lautschrift */
    const trRow = U.el("label", "set-row");
    trRow.innerHTML = "<span>Lautschrift anzeigen<br><small class='subtle'>Blende sie aus, sobald du Kyrillisch flüssig liest</small></span>";
    const trToggle = U.el("input");
    trToggle.type = "checkbox";
    trToggle.checked = s.showTr;
    trToggle.onchange = () => { s.showTr = trToggle.checked; Store.save(); };
    trRow.append(trToggle);
    card.append(trRow);

    /* Tagesziel */
    const goalRow = U.el("label", "set-row");
    goalRow.innerHTML = "<span>Tagesziel</span>";
    const goalSel = U.el("select");
    [["20", "Locker – 20 XP"], ["30", "Normal – 30 XP"], ["50", "Ernsthaft – 50 XP"], ["80", "Intensiv – 80 XP"]].forEach(([v, t]) => {
      const o = U.el("option", "", t); o.value = v; goalSel.append(o);
    });
    goalSel.value = String(s.goal);
    goalSel.onchange = () => { s.goal = Number(goalSel.value); Store.save(); };
    goalRow.append(goalSel);
    card.append(goalRow);

    /* Sprechtempo */
    const rateRow = U.el("label", "set-row");
    rateRow.innerHTML = "<span>Sprechtempo</span>";
    const rate = U.el("input");
    rate.type = "range"; rate.min = "0.6"; rate.max = "1.2"; rate.step = "0.1"; rate.value = s.rate;
    rate.onchange = () => { s.rate = Number(rate.value); Store.save(); Speech.say("Я изучаю русский язык."); };
    rateRow.append(rate);
    card.append(rateRow);

    /* Stimme */
    if (Speech.available()) {
      const vRow = U.el("label", "set-row");
      vRow.innerHTML = "<span>Russische Stimme</span>";
      const vSel = U.el("select");
      const auto = U.el("option", "", "Automatisch"); auto.value = ""; vSel.append(auto);
      Speech.voices.forEach(v => { const o = U.el("option", "", v.name); o.value = v.name; vSel.append(o); });
      vSel.value = s.voice || "";
      vSel.onchange = () => { s.voice = vSel.value; Store.save(); Speech.say("Привет! Как дела?"); };
      vRow.append(vSel);
      card.append(vRow);
      if (Speech.voices.length === 0) {
        card.append(U.el("p", "subtle", "Hinweis: Es ist noch keine russische Stimme geladen. Auf iOS/Android ggf. unter Einstellungen → Bedienungshilfen eine russische Stimme installieren."));
      }
    } else {
      card.append(U.el("p", "subtle", "⚠️ Dein Browser unterstützt keine Sprachausgabe – Hör-Übungen sind deaktiviert."));
    }
    view.append(card);

    /* Datensicherung */
    const dataCard = U.el("div", "card");
    dataCard.append(U.el("h3", "", "Fortschritt sichern & übertragen"));
    dataCard.append(U.el("p", "subtle", "Dein Fortschritt liegt nur auf diesem Gerät. Exportiere ihn als Datei und importiere ihn auf einem anderen Gerät."));
    const row = U.el("div", "grade-row");
    const exp = U.el("button", "btn", "Exportieren");
    exp.type = "button";
    exp.onclick = () => {
      const blob = new Blob([Store.exportJson()], { type: "application/json" });
      const a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.download = "russisch-fortschritt-" + U.todayKey() + ".json";
      a.click();
      URL.revokeObjectURL(a.href);
    };
    const impLabel = U.el("label", "btn", "Importieren");
    const impInput = U.el("input");
    impInput.type = "file"; impInput.accept = ".json,application/json"; impInput.style.display = "none";
    impInput.onchange = () => {
      const f = impInput.files[0];
      if (!f) return;
      f.text().then(t => {
        try { Store.importJson(t); alert("Fortschritt importiert! 🎉"); App.route(); }
        catch (e) { alert("Import fehlgeschlagen: " + e.message); }
      });
    };
    impLabel.append(impInput);
    row.append(exp, impLabel);
    dataCard.append(row);
    view.append(dataCard);

    /* Zurücksetzen */
    const danger = U.el("div", "card");
    const rst = U.el("button", "btn bad-btn", "Allen Fortschritt löschen");
    rst.type = "button";
    rst.onclick = () => {
      if (confirm("Wirklich ALLES löschen? Streak, XP und Karteikasten gehen verloren.") && confirm("Ganz sicher?")) {
        Store.reset(); App.route();
      }
    };
    danger.append(rst);
    view.append(danger);

    view.append(U.el("p", "subtle center-text", "Приложение для Джошуа · Offline-fähige PWA · Version 1.0"));
  }
};

document.addEventListener("DOMContentLoaded", App.boot);
