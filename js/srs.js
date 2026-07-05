/* Spaced Repetition nach dem Babbel-Prinzip: 6 Stufen.
   Richtig -> eine Stufe hoch, Wiedervorlage nach 1/4/7/14/60/180 Tagen.
   Falsch  -> zwei Stufen runter (mindestens Stufe 1, morgen wieder dran). */
window.SRS = {
  INTERVALS: [0, 1, 4, 7, 14, 60, 180], // Tage; Index = Stufe
  MAX: 6,

  rec(id) { return Store.state.srs[id]; },

  /* Nach einer Lektion: Wort neu in den Karteikasten (Stufe 1, morgen fällig) */
  learn(id) {
    if (!Store.state.srs[id]) {
      Store.state.srs[id] = { s: 1, due: Date.now() + SRS.INTERVALS[1] * U.DAY, r: 0, w: 0 };
    }
  },

  grade(id, ok) {
    const r = Store.state.srs[id] || { s: 0, due: 0, r: 0, w: 0 };
    if (ok) { r.s = Math.min(SRS.MAX, r.s + 1); r.r++; }
    else    { r.s = Math.max(1, r.s - 2); r.w++; }
    r.due = Date.now() + SRS.INTERVALS[r.s] * U.DAY;
    Store.state.srs[id] = r;
    Store.state.reviews++;
    Store.save();
  },

  dueIds() {
    const now = Date.now();
    return Object.keys(Store.state.srs).filter(id => Store.state.srs[id].due <= now && C.item(id));
  },

  learnedCount() { return Object.keys(Store.state.srs).filter(id => C.item(id)).length; },

  /* Wörter pro Stufe, für die Statistik */
  stageCounts() {
    const counts = [0, 0, 0, 0, 0, 0, 0];
    Object.keys(Store.state.srs).forEach(id => {
      if (C.item(id)) counts[Store.state.srs[id].s]++;
    });
    return counts;
  },

  /* Nächster Fälligkeits-Zeitpunkt (für "alles gelernt"-Anzeige) */
  nextDue() {
    let min = null;
    Object.values(Store.state.srs).forEach(r => { if (min === null || r.due < min) min = r.due; });
    return min;
  }
};
