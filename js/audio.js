/* Sprachausgabe über die Web Speech API (russische Systemstimme).
   Name "Speech", weil window.Audio belegt ist. */
window.Speech = {
  voices: [],
  ready: false,

  init() {
    if (!("speechSynthesis" in window)) return;
    const load = () => {
      Speech.voices = speechSynthesis.getVoices().filter(v => v.lang && v.lang.toLowerCase().startsWith("ru"));
      Speech.ready = Speech.voices.length > 0;
    };
    load();
    speechSynthesis.onvoiceschanged = load;
  },

  available() { return "speechSynthesis" in window; },

  voice() {
    const wanted = Store.state.settings.voice;
    return Speech.voices.find(v => v.name === wanted) || Speech.voices[0] || null;
  },

  say(text, slow) {
    if (!Speech.available()) return;
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(String(text).replace(/[«»]/g, ""));
    u.lang = "ru-RU";
    const v = Speech.voice();
    if (v) u.voice = v;
    const base = Number(Store.state.settings.rate) || 1;
    u.rate = slow ? Math.min(base, 1) * 0.65 : base * 0.9;
    speechSynthesis.speak(u);
  },

  stop() { if (Speech.available()) speechSynthesis.cancel(); }
};
