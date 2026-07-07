# По-русски 🇷🇺 – Deine private Russisch-Lern-App

Eine persönliche, werbefreie Alternative zu Babbel – als **Progressive Web App (PWA)**:
läuft im Browser auf Handy, Tablet und Laptop, lässt sich wie eine echte App auf den
Homescreen installieren und funktioniert **komplett offline**. Keine Kosten, kein Konto,
keine Datenweitergabe – dein Fortschritt bleibt auf deinem Gerät.

## Was die App kann

- **84 Lektionen im Babbel-Stil** (28 Einheiten, Niveau A1 → B2): neue Wörter mit
  Aussprache-Audio und Lautschrift, gemischte Übungen und zum Abschluss ein
  Alltagsdialog mit Lückentexten.
- **1008 Wörter & Sätze** mit deutscher Übersetzung und betonter Lautschrift, jedes
  Wort kommt genau einmal vor – siehe **Fahrplan zu 5000 Wörtern** unten.
- **Kursübersicht nach Niveau gruppiert** (A1/A2/B1/B2) mit Suchfeld, um gezielt
  eine Lektion oder ein Wort zu finden.
- **Adaptiver Wiederholungs-Manager (SM-2-Prinzip)**: Jedes Wort bekommt einen eigenen
  Ease-Faktor, der sich an dein persönliches Erinnerungsvermögen anpasst – leichte
  Wörter wandern schnell auf Monate, schwierige bleiben länger nah dran. Bewertung über
  4 Qualitätsstufen (Vergessen/Schwer/Gut/Leicht) statt nur richtig/falsch.
- **5 Übungsarten**: Wortwahl (Multiple Choice), Hören, Schreiben (Buchstaben- und
  Satzbau-Kacheln), Zuordnen und Karteikarten mit 4-stufiger Selbsteinschätzung.
- **Lesetexte**: 4 kurze Geschichten (A1 → B2), die bewusst nur bereits gelernten
  Wortschatz nutzen, mit Verständnisfragen – schalten sich automatisch frei, sobald du
  die passenden Einheiten abgeschlossen hast. Baut echtes Leseverständnis auf, das über
  Einzelwörter und Dialogzeilen hinausgeht.
- **Audio für alles** über die russische Systemstimme deines Geräts (Text-to-Speech),
  auf Wunsch in Zeitlupe 🐢.
- **Grammatik in Häppchen**: 80+ kurze Tipps genau dort, wo sie gebraucht werden –
  von den ersten Sätzen bis zu Verbaspekt, Fällen, Futur, Komparativ und Konjunktiv (бы).
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

## Fahrplan zu 5000 Wörtern

Das Ziel ist echte Flüssigkeit, nicht nur ein Grundwortschatz – dafür sind grob
**5000+ Wörter als vollwertige Lektionen mit Dialog und Grammatik-Tipp** nötig
(bei ~12 Wörtern/Lektion sind das rund 400+ Lektionen). Das ist vom Umfang her
vergleichbar mit einem kompletten Lehrbuch und wird bewusst **in Wellen** gebaut,
damit jede Lektion die gleiche Qualität hat wie die ersten:

| Stand | Wörter | Lektionen | Niveau |
|---|---|---|---|
| Aktuell | 1008 | 84 | A1 → B2 |
| Nächste Welle | ~1300 | ~110 | B2 |
| Ziel Zwischenstopp | ~2500 | ~210 | B2 |
| Endziel | 5000+ | ~400+ | B2 → C1 |

Sag einfach **„weiter“ / „nächste Einheiten“**, wenn du mehr Lektionen willst –
dann kommt die nächste Charge in derselben Qualität (neue, nach Häufigkeit
sortierte Wörter, echte Dialoge, passende Grammatik-Tipps, keine Wort-Dubletten).

## Inhalte erweitern

Der komplette Kurs liegt in `js/data-a.js` (Einheiten 1–4, A1), `js/data-b.js`
(Einheiten 5–8, A1/A2), `js/data-c.js` (Einheiten 9–12, A2/B1), `js/data-d.js`
(Einheiten 13–16, B1), `js/data-e.js` (Einheiten 17–20, B1), `js/data-f.js`
(Einheiten 21–24, B1/B2) und `js/data-g.js` (Einheiten 25–28, B2) – reine
Datenstrukturen, gut kommentiert. Ein `validate.js`-Prüfskript stellt sicher,
dass jedes Wort im Kurs nur einmal vorkommt und alle Dialoge stimmig sind. Neue Wörter, Lektionen oder Einheiten einfach
nach demselben Muster ergänzen (neue Datei `data-d.js` usw. anlegen und in
`index.html` sowie `sw.js` eintragen); Übungen und Wiederholungen entstehen daraus
automatisch. Ein Wort darf im ganzen Kurs nur einmal vorkommen – vor dem Ergänzen
lohnt sich ein Blick in die bestehenden Dateien, um Dubletten zu vermeiden.
Nach Änderungen die `VERSION` in `sw.js` hochzählen, damit installierte Geräte
das Update bekommen.

## Technik

- Reines HTML/CSS/JavaScript – **kein Build-Schritt, keine Abhängigkeiten**.
- Offline über Service Worker (`sw.js`), installierbar über `manifest.webmanifest`.
- Fortschritt in `localStorage` (Schlüssel `russisch.v1`).
- Audio über die Web Speech API (`speechSynthesis`, `ru-RU`).
- Helles & dunkles Design automatisch nach Systemeinstellung.
