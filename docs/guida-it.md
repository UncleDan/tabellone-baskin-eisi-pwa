# 📋 Guida all'uso — Tabellone Baskin EISI

*[English version](guide-en.md) · [Version française](guide-fr.md)*

Questa guida spiega come usare il tabellone segnapunti durante una partita di Baskin. Per l'installazione, la pubblicazione e i dettagli tecnici vedi il [README](../README.md).

---

## 🏟️ Schermata principale (modalità operativa)

È la schermata che si usa **durante la partita**.

- **▶️ / ⏸️** — avvia o ferma il cronometro (anche con la barra spaziatrice sulla tastiera).
- A **fine tempo** (dopo la sirena automatica) compare **⏭ Periodo successivo**: con conferma avanza di un periodo e riporta il cronometro al tempo pieno. A fine 4° quarto e di ogni supplementare (`1TS`, `2TS`…) viene proposto **solo in caso di parità**.
- **✏️** apre le impostazioni/correzioni. **⋯** apre il menu con versione, aggiornamenti e altre opzioni.
- **+1 / +2 / +3** a sinistra e a destra aumentano il punteggio della Squadra 1 e della Squadra 2.
- Tocca la **pillola dei timeout**: accende un pallino in più; quando sono tutti accesi, il tocco successivo li azzera.
- I tasti dei **falli** (**+** / **−**) compaiono solo se il *Conteggio falli* è attivo nelle impostazioni partita. Di default sono spenti: restano solo l'etichetta "Falli" e i pallini del bonus.
- In basso a destra: **📣 sirena** e **fischietto**, per riprodurre i rispettivi suoni manualmente.

## ⚙️ Schermata impostazioni / correzioni (✏️)

Si usa per **correggere** un errore o preparare la partita prima di iniziare.

- Il cronometro si **blocca automaticamente** entrando in questa schermata.
- **✔️** salva le modifiche e torna alla modalità operativa.
- Tocca il **tempo** (riquadro tratteggiato) per aprire i rotori minuti / secondi / decimi.
- Tocca il **periodo** (riquadro tratteggiato) per aprire il rotore di selezione: `1`…`4`, poi `1TS`…`9TS` (tempi supplementari).
- Tocca il **nome di una squadra** (riquadro tratteggiato): compare la tastiera per modificarlo. Sotto al nome, una riga di colori imposta il colore della scritta.
- **−1 / −2 / −3** ai lati abbassano il punteggio.
- In basso a sinistra, il pulsante **Reset** (rosso) azzera la partita previa conferma: punteggi, falli, timeout, tempo e periodo tornano a zero, mantenendo impostazioni e nomi.

## 🏀 Impostazioni partita (dal menu ⋯)

- **Modalità**: **Baskin** (valori standard) oppure **Personalizza** (ogni campo è modificabile).
- **Logica timeout**: *Baskin* (1 per quarto, riporto all'indietro) oppure *Basket* (monte per tempo, 2 nel 1° tempo e 3 nel 2°).
- **Modalità bonus**: *Ultimi 2′ (Baskin)*, *Dopo N falli (Basket)*, oppure *Nessuno*.
- Durata periodo e supplementari, numero di periodi, timeout, soglia falli per il bonus.
- **Fischio automatico se timeout non disponibile** e **sirena automatica a fine tempo**: sempre personalizzabili, anche in modalità Baskin.
- **Streaming BaskinCam**: invio automatico dello stato partita a un dispositivo companion sulla rete locale.
- **Reset applicazione**: azzera tutto e riporta le impostazioni ai valori Baskin.

## 🔄 Possesso e bonus

- Le **frecce di possesso** (sopra ai falli): un tap su una freccia accende quella e spegne l'altra.
- Il **bonus** è indicato da un pallino per squadra accanto all'etichetta "Falli".

## 🌐 Lingua

L'app è disponibile in **italiano**, **inglese** e **francese**. Alla prima apertura la lingua viene rilevata automaticamente da quella del dispositivo (se non è tra le tre supportate, parte in inglese); le **bandierine** 🌐🇮🇹🇬🇧🇫🇷 nel menu ⋯ permettono di sceglierne una specifica in qualsiasi momento.

Il **nome delle squadre**, se non personalizzato, segue automaticamente la lingua scelta (es. "Squadra 1" diventa "Team 1" in inglese); un nome scritto a mano resta invece invariato cambiando lingua.

## 💾 Salvataggio automatico

Lo stato della partita viene salvato **ad ogni comando**, anche se l'app va in background o si chiude inaspettatamente: alla riapertura si riprende esattamente da dove eri (a cronometro fermo, per sicurezza).

---

📄 Torna al [README](../README.md) · 🐞 [Segnala un problema](https://github.com/UncleDan/tabellone-baskin-eisi/issues)
