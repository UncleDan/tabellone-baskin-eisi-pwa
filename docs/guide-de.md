# 📋 Bedienungsanleitung — Tabellone Baskin EISI (PWA)

*[Versione italiana](guida-it.md) · [English version](guide-en.md) · [Version française](guide-fr.md) · [Versión española](guia-es.md)*

Diese Anleitung erklärt die Bedienung der Anzeigetafel während eines Baskin-Spiels. Installation und technische Details stehen in der [README](../README.md).

---

## 🏟️ Hauptbildschirm (Spielmodus)

Dieser Bildschirm wird **während des Spiels** verwendet.

- **▶️ / ⏸️** — startet oder stoppt die Uhr (auch mit der Leertaste).
- Nach **Ablauf der Zeit** (nach der automatischen Hupe) erscheint **⏭ Nächstes Viertel**: nach Bestätigung geht es ein Viertel weiter und die Uhr wird auf die volle Zeit zurückgesetzt. Am Ende des 4. Viertels und jeder Verlängerung (`V1`, `V2`…) wird dies nur **bei Gleichstand** angeboten.
- **✏️** öffnet die Einstellungen/Korrekturen. **⋯** öffnet das Menü mit Version, Updates und weiteren Optionen.
- **+1 / +2 / +3** links und rechts erhöhen die Punkte von Team 1 bzw. Team 2.
- Tippe auf die **Auszeit-Anzeige**: sie aktiviert einen weiteren Punkt; sind alle aktiv, setzt der nächste Tipp sie zurück.
- Die **Foul**-Tasten (**+** / **−**) erscheinen nur, wenn die *Foulzählung* in den Spieleinstellungen aktiv ist. Standardmäßig sind sie aus: es bleiben nur die Beschriftung „Fouls“ und die Bonuspunkte.
- Unten rechts: **📣 Hupe** und **Pfiff**, um die jeweiligen Töne manuell abzuspielen.

## ⚙️ Einstellungen / Korrekturen (✏️)

Hier korrigierst du **einen Fehler** oder bereitest das Spiel vor dem Anpfiff vor.

- Die Uhr wird beim Öffnen dieses Bildschirms **automatisch angehalten**.
- **✔️** speichert die Änderungen und kehrt zum Spielmodus zurück.
- Tippe auf die **Zeit** (gestricheltes Feld), um die Auswahlräder für Minuten / Sekunden / Zehntel zu öffnen.
- Tippe auf das **Viertel** (gestricheltes Feld), um das Auswahlrad zu öffnen: `1`…`4`, danach `V1`…`V9` (Verlängerungen).
- Tippe auf einen **Teamnamen** (gestricheltes Feld): die Tastatur erscheint zum Ändern. Unter dem Namen legt eine Farbreihe die Schriftfarbe fest.
- **−1 / −2 / −3** an den Seiten verringern die Punkte.
- Unten links setzt die Taste **Zurücksetzen** (rot) das Spiel nach Bestätigung zurück: Punkte, Fouls, Auszeiten, Zeit und Viertel gehen auf null, Einstellungen und Namen bleiben erhalten.

## 🏀 Spieleinstellungen (über das Menü ⋯)

- **Modus**: **Baskin** (Standardwerte) oder **Anpassen** (alle Felder änderbar).
- **Auszeit-Logik**: *Baskin* (1 pro Viertel, mit Übertrag) oder *Basket* (Kontingent pro Halbzeit, 2 in der 1. und 3 in der 2.).
- **Bonus-Modus**: *Letzte 2′ (Baskin)*, *Nach N Fouls (Basket)* oder *Keiner*.
- Länge von Viertel und Verlängerung, Anzahl der Viertel, Auszeiten, Foulgrenze für den Bonus.
- **Automatischer Pfiff bei nicht verfügbarer Auszeit** und **automatische Hupe bei Zeitablauf**: immer anpassbar, auch im Baskin-Modus.
- **BaskinCam-Streaming**: automatische Übertragung des Spielstands an ein Begleitgerät im lokalen Netzwerk.
- **App zurücksetzen**: löscht alles und stellt die Baskin-Standardeinstellungen wieder her.

## 🔄 Ballbesitz und Bonus

- Die **Ballbesitzpfeile** (über den Fouls): Tippen auf einen aktiviert diesen und deaktiviert den anderen.
- Der **Bonus** wird durch einen Punkt pro Team neben der Beschriftung „Fouls“ angezeigt.

## 🌐 Sprache

Die App ist auf **Italienisch**, **Englisch**, **Französisch**, **Spanisch** und **Deutsch** verfügbar. Beim ersten Start wird die Sprache automatisch vom Gerät erkannt (wird keine der fünf unterstützt, startet sie auf Englisch); über die **Flaggen** 🌐🇮🇹🇬🇧🇫🇷🇪🇸🇩🇪 im Menü ⋯ lässt sich jederzeit eine bestimmte Sprache wählen.

Die **Teamnamen** folgen automatisch der gewählten Sprache, solange sie nicht angepasst wurden (z. B. wird aus „Squadra 1“ auf Deutsch „Team 1“); ein selbst eingegebener Name bleibt beim Sprachwechsel unverändert.

## 💾 Automatisches Speichern

Der Spielstand wird **nach jeder Aktion** gespeichert, auch wenn die App in den Hintergrund wechselt oder unerwartet geschlossen wird: Beim erneuten Öffnen geht es genau dort weiter, wo du aufgehört hast (die Uhr steht dabei sicherheitshalber still).

---

📄 Zurück zur [README](../README.md) · 🐞 [Problem melden](https://github.com/UncleDan/tabellone-baskin-eisi-pwa/issues)
