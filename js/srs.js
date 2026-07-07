/* Spaced Repetition nach dem SM-2-Prinzip (Wozniak 1990, Cepeda et al. 2006):
   Jedes Wort bekommt einen eigenen Ease-Faktor, der sich an das individuelle
   Erinnerungsvermoegen anpasst, statt einer festen Stufen-Leiter fuer alle. */
window.SRS = {
  MIN_EASE: 1.3,
  MAX_EASE: 2.8,
  MAX_INTERVAL: 365,
  Q: { FORGOT: 1, HARD: 3, GOOD: 4, EASY: 5 },

  rec(id) { return Store.state.srs[id]; },

  /* Nach einer Lektion: Wort neu in den Karteikasten, morgen faellig */
  learn(id) {
    if (!Store.state.srs[id]) {
      Store.state.srs[id] = {
        interval: 1, ease: 2.5, due: Date.now() + 1 * U.DAY,
        reviews: 0, correct: 0, incorrect: 0, status: "learning"
      };
    }
  },

  /* quality: 1 = vergessen, 3 = schwer, 4 = gut, 5 = leicht (angelehnt an SM-2) */
  grade(id, quality) {
    const r = Store.state.srs[id] || {
      interval: 1, ease: 2.5, due: 0, reviews: 0, correct: 0, incorrect: 0, status: "learning"
    };
    r.reviews++;

    if (quality >= 3) {
      r.correct++;
      if (quality === SRS.Q.EASY) r.ease += 0.15;
      else if (quality === SRS.Q.HARD) r.ease -= 0.05;
      // GOOD (4): Ease bleibt unveraendert
    } else {
      r.incorrect++;
      r.ease -= 0.2;
      r.status = "relearning";
    }
    r.ease = Math.min(SRS.MAX_EASE, Math.max(SRS.MIN_EASE, r.ease));

    // Bei Vergessen immer sofort zurueck auf 1 Tag, unabhaengig von der Review-Nummer.
    // Die ersten beiden erfolgreichen Reviews nutzen feste Basis-Intervalle (1/3 Tage),
    // danach waechst das Intervall mit dem persoenlichen Ease-Faktor.
    if (quality < 3) r.interval = 1;
    else if (r.reviews === 1) r.interval = 1;
    else if (r.reviews === 2) r.interval = 3;
    else r.interval = Math.round(r.interval * r.ease);
    r.interval = Math.max(1, Math.min(SRS.MAX_INTERVAL, r.interval));

    if (r.interval > 120 && r.correct > 3) r.status = "mastered";
    else if (r.interval >= 30) r.status = "learning";
    else if (r.status !== "relearning") r.status = "learning";
    // sonst: bleibt "relearning", bis das Intervall wieder auf 30+ Tage waechst

    r.due = Date.now() + r.interval * U.DAY;
    Store.state.srs[id] = r;
    Store.state.reviews++;
    Store.save();
  },

  /* Uebungen mit nur richtig/falsch (Multiple Choice, Hoeren, Schreiben)
     bilden das auf Gut/Vergessen ab. */
  gradeBool(id, ok) { SRS.grade(id, ok ? SRS.Q.GOOD : SRS.Q.FORGOT); },

  dueIds() {
    const now = Date.now();
    return Object.keys(Store.state.srs).filter(id => Store.state.srs[id].due <= now && C.item(id));
  },

  learnedCount() { return Object.keys(Store.state.srs).filter(id => C.item(id)).length; },

  masteredCount() {
    return Object.keys(Store.state.srs).filter(id => C.item(id) && Store.state.srs[id].status === "mastered").length;
  },

  /* Woerter nach Intervall-Laenge gruppiert, fuer die Statistik-Seite */
  BANDS: [
    { label: "Neu (1-2 Tage)", max: 2 },
    { label: "Kurz (3-6 Tage)", max: 6 },
    { label: "Mittel (7-13 Tage)", max: 13 },
    { label: "Länger (14-29 Tage)", max: 29 },
    { label: "Fest (30-119 Tage)", max: 119 },
    { label: "Gemeistert (120+ Tage)", max: Infinity }
  ],
  bandCounts() {
    const counts = SRS.BANDS.map(() => 0);
    Object.keys(Store.state.srs).forEach(id => {
      if (!C.item(id)) return;
      const iv = Store.state.srs[id].interval;
      let i = SRS.BANDS.findIndex(b => iv <= b.max);
      if (i === -1) i = SRS.BANDS.length - 1;
      counts[i]++;
    });
    return counts;
  },

  nextDue() {
    let min = null;
    Object.values(Store.state.srs).forEach(r => { if (min === null || r.due < min) min = r.due; });
    return min;
  },

  /* Migration von der alten Stufen-Leiter (Version 1, Feld "s") auf das SM-2-Modell */
  migrate() {
    const OLD_LADDER = [0, 1, 4, 7, 14, 60, 180];
    Object.keys(Store.state.srs).forEach(id => {
      const r = Store.state.srs[id];
      if (r && typeof r.s === "number" && typeof r.interval !== "number") {
        Store.state.srs[id] = {
          interval: OLD_LADDER[r.s] || 1,
          ease: 2.5,
          due: r.due,
          reviews: (r.r || 0) + (r.w || 0),
          correct: r.r || 0,
          incorrect: r.w || 0,
          status: r.s >= 6 ? "mastered" : ((r.w || 0) > 0 ? "relearning" : "learning")
        };
      }
    });
    Store.save();
  }
};
