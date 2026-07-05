# По-русски 🇷🇺 – Deine private Russisch-Lern-App

Eine persönliche, werbefreie Alternative zu Babbel – als **Progressive Web App (PWA)**:
läuft im Browser auf Handy, Tablet und Laptop, lässt sich wie eine echte App auf den
Homescreen installieren und funktioniert **komplett offline**. Keine Kosten, kein Konto,
keine Datenweitergabe – dein Fortschritt bleibt auf deinem Gerät.

## Was die App kann

- **24 Lektionen im Babbel-Stil** (8 Einheiten, Niveau A1 → A2): neue Wörter mit
  Aussprache-Audio und Lautschrift, gemischte Übungen und zum Abschluss ein
  Alltagsdialog mit Lückentexten.
- **~290 Wörter & Sätze** mit deutscher Übersetzung und betonter Lautschrift.
- **Wiederholungs-Manager mit Spaced Repetition** (wie Babbels Review-Manager):
  6 Stufen mit Intervallen von 1 → 4 → 7 → 14 → 60 → 180 Tagen. Richtig beantwortete
  Wörter steigen auf, Fehler werfen sie zurück.
- **5 Übungsarten**: Wortwahl (Multiple Choice), Hören, Schreiben (Buchstaben- und
  Satzbau-Kacheln), Zuordnen und Karteikarten mit Selbsteinschätzung.
- **Audio für alles** über die russische Systemstimme deines Geräts (Text-to-Speech),
  auf Wunsch in Zeitlupe 🐢.
- **Grammatik in Häppchen**: 30+ kurze Tipps genau dort, wo sie gebraucht werden.
- **Motivation**: Tagesziel, XP, Streak-Zähler, Statistik und Karteikasten-Übersicht.
- **Fortschritt exportieren/importieren**, um Geräte zu wechseln oder Backups zu machen.

## Auf deinen Geräten installieren

### Variante 1 (empfohlen): über GitHub Pages hosten

1. Diesen Branch nach `main` mergen (oder direkt auf `main` kopieren).
2. Auf GitHub: **Settings → Pages → Source: „Deploy from a branch“**, Branch `main`,
   Ordner `/ (root)` wählen und speichern.
3. Nach ~1 Minute ist die App unter `https://<dein-name>.github.io/Russisch/` erreichbar.
4. Diese Adresse einmal auf jedem Gerät öffnen – fertig. Ab dann funktioniert sie offline.

### Variante 2: lokal starten (zum Testen)

```bash
cd Russisch
python3 -m http.server 8000
# dann im Browser: http://localhost:8000
```

> Wichtig: Die App braucht einen Webserver (oder GitHub Pages). Direktes Öffnen der
> `index.html` per Doppelklick funktioniert eingeschränkt (kein Offline-Modus).

### Als App auf den Homescreen

- **iPhone/iPad (Safari):** Seite öffnen → Teilen-Symbol → **„Zum Home-Bildschirm“**.
- **Android (Chrome):** Seite öffnen → Menü ⋮ → **„App installieren“** /
  „Zum Startbildschirm hinzufügen“.
- **Laptop (Chrome/Edge):** Installations-Symbol rechts in der Adressleiste anklicken.

### Russische Stimme fürs Audio

Die Sprachausgabe nutzt die Systemstimmen deines Geräts:

- **iOS:** Einstellungen → Bedienungshilfen → Gesprochene Inhalte → Stimmen → Russisch
  (z. B. „Milena“) laden – klingt deutlich besser als die Standardstimme.
- **Android:** Einstellungen → System → Sprachen → Text-in-Sprache → Sprachdaten
  Russisch installieren.
- In der App unter ⚙️ **Einstellungen** kannst du Stimme und Sprechtempo wählen.

## So lernst du am besten (über Monate)

1. **Jeden Tag zuerst „Üben“** – die fälligen Wiederholungen sind das Wichtigste
   für dein Langzeitgedächtnis. Meist sind das nur 5–10 Minuten.
2. Danach, wenn du Lust hast, **eine neue Lektion**.
3. Streak halten: lieber täglich 10 Minuten als einmal pro Woche 2 Stunden.
4. Sobald du Kyrillisch flüssig liest: **Lautschrift in den Einstellungen ausblenden**.

## Fortschritt auf ein anderes Gerät übertragen

⚙️ Einstellungen → **Exportieren** (lädt eine JSON-Datei herunter) → Datei aufs andere
Gerät schicken (AirDrop, Mail, …) → dort ⚙️ Einstellungen → **Importieren**.

## Inhalte erweitern

Der komplette Kurs liegt in `js/data-a.js` (Einheiten 1–4) und `js/data-b.js`
(Einheiten 5–8) – reine Datenstrukturen, gut kommentiert. Neue Wörter, Lektionen oder
Einheiten einfach nach demselben Muster ergänzen; Übungen und Wiederholungen entstehen
daraus automatisch. Nach Änderungen die `VERSION` in `sw.js` hochzählen, damit
installierte Geräte das Update bekommen.

## Technik

- Reines HTML/CSS/JavaScript – **kein Build-Schritt, keine Abhängigkeiten**.
- Offline über Service Worker (`sw.js`), installierbar über `manifest.webmanifest`.
- Fortschritt in `localStorage` (Schlüssel `russisch.v1`).
- Audio über die Web Speech API (`speechSynthesis`, `ru-RU`).
- Helles & dunkles Design automatisch nach Systemeinstellung.
