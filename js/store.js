/* Persistenz in localStorage, global unter Store */
window.Store = {
  KEY: "russisch.v1",
  state: null,

  defaults() {
    return {
      srs: {},          // itemId -> { s: Stufe 1-6, due: Timestamp, r: richtig, w: falsch }
      xp: {},           // "YYYY-MM-DD" -> Punkte
      done: {},         // lessonId -> Timestamp der ersten Fertigstellung
      readingsDone: {},  // readingId -> Timestamp der ersten Fertigstellung
      reviews: 0,       // Anzahl abgeschlossener Wiederholungs-Antworten
      settings: { goal: 30, rate: 1, voice: "", showTr: true }
    };
  },

  load() {
    try {
      const raw = localStorage.getItem(Store.KEY);
      Store.state = raw ? Object.assign(Store.defaults(), JSON.parse(raw)) : Store.defaults();
    } catch (e) {
      Store.state = Store.defaults();
    }
    Store.state.settings = Object.assign(Store.defaults().settings, Store.state.settings);
    return Store.state;
  },

  save() {
    try { localStorage.setItem(Store.KEY, JSON.stringify(Store.state)); } catch (e) { /* voll/privat */ }
  },

  addXp(n) {
    const k = U.todayKey();
    Store.state.xp[k] = (Store.state.xp[k] || 0) + n;
    Store.save();
  },

  xpOn(dayKey) { return Store.state.xp[dayKey] || 0; },
  xpToday() { return Store.xpOn(U.todayKey()); },
  xpTotal() { return Object.values(Store.state.xp).reduce((a, b) => a + b, 0); },

  /* Streak: aufeinanderfolgende Tage mit Aktivität (XP > 0).
     Der heutige Tag zählt mit, sobald XP da sind; ohne heutige XP
     bleibt der Streak von gestern bestehen (bis Mitternacht). */
  streak() {
    let n = 0;
    let offset = Store.xpToday() > 0 ? 0 : -1;
    while (Store.xpOn(U.todayKey(offset)) > 0) { n++; offset--; }
    return n;
  },

  markDone(lessonId) {
    if (!Store.state.done[lessonId]) {
      Store.state.done[lessonId] = Date.now();
      Store.save();
    }
  },
  isDone(lessonId) { return !!Store.state.done[lessonId]; },

  markReadingDone(id) {
    if (!Store.state.readingsDone[id]) {
      Store.state.readingsDone[id] = Date.now();
      Store.save();
    }
  },
  isReadingDone(id) { return !!Store.state.readingsDone[id]; },

  exportJson() { return JSON.stringify(Store.state, null, 2); },
  importJson(text) {
    const data = JSON.parse(text); // wirft bei Unsinn
    if (typeof data !== "object" || !data.srs) throw new Error("Kein gültiger Export.");
    Store.state = Object.assign(Store.defaults(), data);
    Store.save();
  },
  reset() {
    Store.state = Store.defaults();
    Store.save();
  }
};
