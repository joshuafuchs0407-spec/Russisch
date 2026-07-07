/* Kleine Helfer, global unter U */
window.U = {
  shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  },
  sample(arr, n) { return U.shuffle(arr).slice(0, n); },
  pick(arr) { return arr[Math.floor(Math.random() * arr.length)]; },
  esc(s) {
    return String(s).replace(/[&<>"']/g, c => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
    }[c]));
  },
  /* Mini-Markdown: **fett** und Zeilenumbrüche */
  md(s) {
    return U.esc(s)
      .replace(/\*\*(.+?)\*\*/g, "<b>$1</b>")
      .replace(/\n/g, "<br>");
  },
  el(tag, cls, html) {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html !== undefined) e.innerHTML = html;
    return e;
  },
  /* Vergleich von Eingaben: Groß/Klein, ё/е und Satzzeichen tolerant */
  norm(s) {
    return String(s).toLowerCase()
      .replace(/ё/g, "е")
      .replace(/[.,!?;:«»"'()\-–—]/g, "")
      .replace(/\s+/g, " ")
      .trim();
  },
  todayKey(offsetDays) {
    const d = new Date();
    if (offsetDays) d.setDate(d.getDate() + offsetDays);
    const p = n => String(n).padStart(2, "0");
    return d.getFullYear() + "-" + p(d.getMonth() + 1) + "-" + p(d.getDate());
  },
  DAY: 24 * 60 * 60 * 1000
};

/* Kurszugriff, global unter C */
window.C = {
  units() { return window.COURSE_UNITS || []; },
  lessons() {
    const out = [];
    C.units().forEach(u => u.lessons.forEach(l => out.push({ ...l, unitId: u.id, unitTitle: u.title })));
    return out;
  },
  lesson(id) { return C.lessons().find(l => l.id === id); },
  itemId(lessonId, ru) { return lessonId + "|" + ru; },
  /* Alle Vokabeln als Map id -> Item (inkl. lessonId) */
  itemMap() {
    if (C._map) return C._map;
    const m = {};
    C.lessons().forEach(l => l.items.forEach(it => {
      m[C.itemId(l.id, it.ru)] = { ...it, lessonId: l.id, id: C.itemId(l.id, it.ru) };
    }));
    C._map = m;
    return m;
  },
  item(id) { return C.itemMap()[id]; },
  allItems() { return Object.values(C.itemMap()); },
  /* true, sobald alle Lektionen bis einschliesslich der genannten Einheit erledigt sind */
  doneThroughUnit(unitId) {
    const units = C.units();
    const idx = units.findIndex(u => u.id === unitId);
    if (idx === -1) return false;
    for (let i = 0; i <= idx; i++) {
      if (units[i].lessons.some(l => !Store.isDone(l.id))) return false;
    }
    return true;
  }
};
