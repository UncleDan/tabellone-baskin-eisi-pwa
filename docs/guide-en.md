# 📋 User guide — Tabellone Baskin EISI (PWA)

*[Versione italiana](guida-it.md) · [Version française](guide-fr.md) · [Versión española](guia-es.md)*

This guide explains how to use the scoreboard during a Baskin match. For installation, publishing and technical details, see the [README](../README.md).

---

## 🏟️ Main screen (game mode)

This is the screen you use **during the match**.

- **▶️ / ⏸️** — start or stop the clock (also works with the spacebar).
- When **time runs out** (after the automatic horn), an **⏭ Next period** button appears: with confirmation, it advances one period and resets the clock to full time. At the end of the 4th quarter and of every overtime (`OT1`, `OT2`…), it's only offered **if the score is tied**.
- **✏️** opens settings/corrections. **⋯** opens the menu with version info, updates and other options.
- **+1 / +2 / +3** on the left and right increase Team 1's and Team 2's score.
- Tap the **timeout pill**: it lights up one more dot; once all are lit, the next tap resets them.
- The **foul** buttons (**+** / **−**) only appear if *Foul count* is enabled in match settings. They're off by default: only the "Fouls" label and the bonus dots remain.
- Bottom right: **📣 horn** and **whistle**, to play the respective sounds manually.

## ⚙️ Settings / corrections screen (✏️)

Use this to **fix a mistake** or set up the match before it starts.

- The clock is **automatically paused** when you enter this screen.
- **✔️** saves your changes and returns to game mode.
- Tap the **time** (dashed box) to open the minutes / seconds / tenths pickers.
- Tap the **period** (dashed box) to open the period picker: `1`…`4`, then `OT1`…`OT9` (overtimes).
- Tap a **team name** (dashed box): a keyboard appears to edit it. Below the name, a row of colors sets the text color.
- **−1 / −2 / −3** on the sides lower the score.
- Bottom left, the **Reset** button (red) resets the match after confirmation: scores, fouls, timeouts, time and period go back to zero, while settings and team names are kept.

## 🏀 Match settings (from the ⋯ menu)

- **Mode**: **Baskin** (standard values) or **Custom** (every field is editable).
- **Timeout logic**: *Baskin* (1 per quarter, carries over) or *Basket* (pool per half, 2 in the 1st half and 3 in the 2nd).
- **Bonus mode**: *Last 2′ (Baskin)*, *After N fouls (Basket)*, or *None*.
- Period and overtime length, number of periods, timeouts, foul threshold for the bonus.
- **Automatic whistle if timeout unavailable** and **automatic horn at time expiry**: always customizable, even in Baskin mode.
- **BaskinCam streaming**: automatically sends match state to a companion device on the local network.
- **Reset app**: clears everything and restores Baskin default settings.

## 🔄 Possession and bonus

- The **possession arrows** (above the fouls): tapping one lights it up and turns off the other.
- The **bonus** is shown by one dot per team next to the "Fouls" label.

## 🌐 Language

The app is available in **Italian**, **English**, **French** and **Spanish**. On first launch, the language is detected automatically from your device (if none of the four is supported, it starts in English); the **flags** 🌐🇮🇹🇬🇧🇫🇷🇪🇸 in the ⋯ menu let you choose a specific one at any time.

**Team names**, if not customized, automatically follow the chosen language (e.g. "Team 1" becomes "Équipe 1" in French); a name you've typed yourself stays unchanged when switching language.

## 💾 Automatic saving

Match state is saved **after every action**, even if the app goes to the background or closes unexpectedly: reopening it picks up exactly where you left off (with the clock paused, for safety).

---

📄 Back to the [README](../README.md) · 🐞 [Report an issue](https://github.com/UncleDan/tabellone-baskin-eisi-pwa/issues)
