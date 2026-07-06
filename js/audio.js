/* Sprachausgabe über die Web Speech API (russische Systemstimme).
   Name "Speech", weil window.Audio belegt ist.

   Robust gegen bekannte Browser-Macken:
   - Chrome verschluckt speak(), wenn es direkt nach cancel() kommt -> kurze Pause dazwischen
   - Chrome bleibt manchmal im "paused"-Zustand haengen -> vor speak() immer resume()
   - Chrome bricht ab, wenn die Utterance vom Garbage Collector geholt wird -> Referenz halten
   - Stimmen laden in manchen Browsern erst verzoegert -> mehrfach nachladen */
window.Speech = {
  voices: [],
  _u: null,      // Referenz auf aktuelle Utterance (GC-Schutz)
  _t: null,      // Timer des verzoegerten speak()

  init() {
    if (!Speech.available()) return;
    const load = () => {
      const all = speechSynthesis.getVoices();
      Speech.voices = all.filter(v => v.lang && v.lang.toLowerCase().replace("_", "-").startsWith("ru"));
    };
    load();
    if ("onvoiceschanged" in speechSynthesis) {
      speechSynthesis.onvoiceschanged = () => { load(); document.dispatchEvent(new Event("ruvoices")); };
    }
    // Fallback: manche Browser fuellen die Liste erst nach einiger Zeit
    let tries = 0;
    const poll = setInterval(() => {
      load();
      if (Speech.voices.length > 0 || ++tries > 20) {
        clearInterval(poll);
        document.dispatchEvent(new Event("ruvoices"));
      }
    }, 400);
  },

  available() { return "speechSynthesis" in window; },
  hasRuVoice() { return Speech.voices.length > 0; },

  /* Beste Stimme: Nutzerwahl > bekannte gute Stimmen > lokale Stimme > erste russische */
  voice() {
    const wanted = Store.state.settings.voice;
    if (wanted) {
      const w = Speech.voices.find(v => v.name === wanted);
      if (w) return w;
    }
    const prefer = ["Milena", "Google русский", "Yuri", "Katya"];
    for (const name of prefer) {
      const v = Speech.voices.find(x => x.name.includes(name));
      if (v) return v;
    }
    return Speech.voices.find(v => v.localService) || Speech.voices[0] || null;
  },

  say(text, slow) {
    if (!Speech.available()) return;
    Speech.stop();
    const u = new SpeechSynthesisUtterance(String(text).replace(/[«»]/g, ""));
    u.lang = "ru-RU";
    const v = Speech.voice();
    if (v) u.voice = v;
    const base = Number(Store.state.settings.rate) || 1;
    u.rate = slow ? Math.min(base, 1) * 0.65 : base * 0.9;
    Speech._u = u;
    // Kurze Pause nach cancel(), sonst verschluckt Chrome die Ausgabe
    Speech._t = setTimeout(() => {
      Speech._t = null;
      try {
        speechSynthesis.resume(); // loest haengenden paused-Zustand
        speechSynthesis.speak(u);
      } catch (e) { /* still bleiben */ }
    }, 60);
  },

  stop() {
    if (!Speech.available()) return;
    if (Speech._t) { clearTimeout(Speech._t); Speech._t = null; }
    try { speechSynthesis.cancel(); } catch (e) { /* egal */ }
  }
};
