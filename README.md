# Tabellone Baskin EISI (PWA)

## Cos'è il Baskin

Il Baskin è uno sport fondato sul basket, inclusivo per progettazione, che prevede per regolamento la partecipazione simultanea degli atleti senza divisione in categorie grazie ad un sistema basato sui ruoli in campo: atleti di entrambi i sessi, con e senza disabilità, con disabilità fisiche e/o cognitive giocano insieme sullo stesso campo la stessa partita. Il regolamento del Baskin è una proprieta intellettuale di *Associazione Baskin* ed i campionati in Italia sono organizzati da *EISI - Ente Italiano Sport Inclusivi*, Ente di Promozione Paralimpica riconosciuto dal *Comitato Italiano Paralimpico*.

Per approfondire: [baskin.it](https://baskin.it) · [eisi.it](https://eisi.it)

I loghi EISI e Baskin compaiono, non interattivi, accanto al bonus falli nella
schermata di gioco. Sono **fissi e sempre visibili** in ogni modalità e dimensione
di schermo: non esiste alcun meccanismo (interruttore, modalità o classe CSS) per
nasconderli.

> I loghi «EISI» e «Baskin» sono marchi registrati rispettivamente da Ente
> Italiano Sport Inclusivi e Associazione Baskin.

---

## La PWA

PWA segnapunti per il **Baskin**, installabile e **utilizzabile completamente offline**, pensata per essere ospitata su **GitHub Pages**.

Due schermate:

- **Principale** — pulsanti per tempo, punti (+1/+2/+3), timeout e falli/bonus.
- **Impostazioni** (matita ✏️) — correzioni e nomi delle squadre con i campi a bordo tratteggiato; si conferma con il segno di spunta ✔️.

Tutto il display a 7 segmenti è disegnato in SVG: nessun font o file esterno, quindi funziona davvero offline.

<p align="center">
  <a href="https://uncledan.github.io/tabellone-baskin-eisi-pwa/pwa/"><img src="https://img.shields.io/badge/%E2%96%B6%20Apri%20la%20PWA-2962FF?style=for-the-badge&logoColor=white" alt="Apri la PWA"></a>
</p>

---

## Progetti collegati

Il Tabellone Baskin EISI esiste in **due repository**, che lavorano insieme:

- **PWA (web)** — repo **[`tabellone-baskin-eisi-pwa`](https://github.com/UncleDan/tabellone-baskin-eisi-pwa)** *(questo)*:
  il segnapunti web di questa pagina, installabile e offline.
- **App Android (Cast)** — **Tabellone Baskin EISI (Cast)**, repo **[`tabellone-baskin-eisi-cast`](https://github.com/UncleDan/tabellone-baskin-eisi-cast)** *(work in progress)*:
  incorpora questa stessa PWA e aggiunge la presentazione su TV (display
  secondario HDMI/Miracast o LAN). Questa PWA, in modalità `?display=1`, fa anche
  da **schermo via browser** per quell'app.

---

## Funzioni

Le istruzioni d'uso complete (schermata principale, impostazioni/correzioni, impostazioni partita, possesso e bonus, lingua, salvataggio automatico) sono nella **guida**, disponibile in cinque lingue:

- 🇮🇹 [Guida in italiano](docs/guida-it.md)
- 🇬🇧 [User guide in English](docs/guide-en.md)
- 🇫🇷 [Guide en français](docs/guide-fr.md)
- 🇪🇸 [Guía en español](docs/guia-es.md)
- 🇩🇪 [Anleitung auf Deutsch](docs/guide-de.md)

La stessa guida è integrata **anche nell'app** (pulsante **Guida all'uso** nel menu `…`), disponibile offline e nella lingua attiva. Le due copie (repository e app) devono restare allineate: aggiornare entrambe quando cambia una funzione.

---

## Uso in locale

Aprendo `pwa/index.html` con doppio clic (`file://`) l'app funziona, ma **il service worker e l'installazione PWA richiedono `http(s)`**. Per provarli in locale:

```bash
# dalla cartella pwa/
cd pwa
python3 -m http.server 8080
# poi apri http://localhost:8080
```

---

## Struttura

```
tabellone-baskin-eisi-pwa/
├── README.md
├── .gitignore
├── docs/
│   ├── guida-it.md
│   ├── guide-en.md
│   ├── guide-fr.md
│   ├── guia-es.md
│   └── guide-de.md
└── pwa/
    ├── index.html
    ├── manifest.webmanifest
    ├── service-worker.js
    ├── css/styles.css
    ├── js/i18n.js
    ├── js/app.js
    ├── sounds/
    │   ├── horn.wav        (sirena - audio originale, CC0)
    │   ├── whistle.wav     (fischietto - audio originale, CC0)
    │   └── CREDITS.txt
    └── icons/
        ├── icon-192.png
        ├── icon-512.png
        └── icon-maskable-512.png
```

---

## Personalizzazione rapida

- **Colori**: variabili `--green`, `--red`, `--yellow` in `pwa/css/styles.css`.
- **Valori predefiniti** (minuti, periodi, timeout, bonus): oggetto `DEFAULT_CONFIG` in `pwa/js/app.js`.
- **Aggiornamenti**: a ogni rilascio incrementa `CACHE_NAME` in `pwa/service-worker.js` e `APP_VERSION` in `pwa/js/app.js` (versionamento per anno: `2026`, poi `2026a`, `2026b`, `2026c`… per i rilasci successivi nello stesso anno). Se aperta nel browser normale (non installata) si aggiorna da sola al ricaricamento; se installata come PWA non si aggiorna automaticamente (per non interrompere una partita in corso) e l'utente verifica da "Verifica aggiornamenti" nelle impostazioni, disinstallando e reinstallando l'app se ne trova una nuova.
- **Compatibilità browser datati**: il layout usa `clamp()` per le dimensioni. Ogni dichiarazione ha un fallback fisso che la precede, così su motori privi di `clamp()` (Chrome < 79, WebView di sistema su Android 8/9) l'app resta usabile invece di mostrare loghi/icone a dimensione intrinseca. Mantenere questo schema (valore fisso prima, `clamp()` dopo) quando si aggiunge nuovo CSS dimensionale. Nota: su Chrome < 84 la spaziatura `gap` nei flexbox non è supportata, quindi alcuni elementi possono risultare più ravvicinati (degradazione solo estetica).
- **Traduzioni**: dizionari in `pwa/js/i18n.js` (oggetto `I18N_DICT`, una chiave per lingua: `it`/`en`/`fr`/`es`/`de`). Per aggiungere una lingua: creare un nuovo blocco con le stesse chiavi di `it`, aggiungere il codice a `I18N_SUPPORTED` e la relativa bandiera in `index.html` (`.lang-flag` con `data-lang`), poi creare la guida corrispondente in `docs/`. Il testo statico in `index.html` usa attributi `data-i18n`/`data-i18n-aria`/`data-i18n-placeholder`; il testo generato dinamicamente in `app.js` usa la funzione `t('chiave', {variabili})`.

---

## Lingua da URL (`?lang=xx`)

Aprendo la PWA con il parametro `?lang=` si forza la lingua per quella apertura,
scavalcando sia la lingua di sistema sia la preferenza salvata nel menu:

```
…/pwa/?lang=de          → tabellone in tedesco
…/pwa/?display=1&lang=es → schermo in sola visualizzazione, in spagnolo
```

Valori ammessi: `it`, `en`, `fr`, `es`, `de` (un valore non supportato viene
semplicemente ignorato e vale il comportamento normale). L'override **non
modifica la preferenza salvata**: è utile per link diretti, QR code o per lo
schermo Cast in un contesto linguistico diverso da quello del dispositivo che
gestisce la partita. Se l'utente sceglie una lingua dal menu mentre il parametro
è attivo, il parametro viene rimosso dall'URL, così la scelta manuale ha effetto.

---

## Modalità sola visualizzazione (`?display=1`)

Aprendo la PWA con il parametro `?display=1` (es. `…/tabellone-baskin/?display=1`) si
attiva la **modalità display**: il tabellone viene mostrato **senza alcun comando**
(niente play, modifica, menu, pulsanti punti/falli, sirena/fischietto), in sola
lettura, adatta a un secondo schermo o a un TV.

- In questa modalità l'app **non modifica né salva** la partita: è un puro
  visualizzatore.
- Lo stato arriva dall'esterno: se la pagina è servita da un web server con
  endpoint `GET /state` (come nell'app *Tabellone Baskin EISI (Cast)*), il display fa
  **polling** ogni ~0,75 s; il cronometro scorre comunque fluido perché il tempo
  viene fatto avanzare in locale tra un aggiornamento e l'altro.
- È disponibile anche `window.applyDisplayState(json)` per aggiornare il display
  con un push diretto (usato dal wrapper Android tramite un display secondario).

Questa modalità è la base dell'app **[Tabellone Baskin EISI (Cast)](https://github.com/UncleDan/tabellone-baskin-eisi-cast)**
(progetto Android separato, **work in progress**) che presenta il tabellone su un
TV via **display secondario (HDMI/Miracast)** o via **LAN** (browser del TV).

---

## Streaming BaskinCam (opzionale)

La PWA può inviare automaticamente lo stato partita a un dispositivo companion
**BaskinCam** sulla stessa rete locale, per generare un overlay tabellone in
streaming. Si attiva da **Impostazioni → Streaming BaskinCam** (default OFF) con
l'indirizzo del dispositivo nel formato `IP:porta` (es. `192.168.1.50:8080`).

- **Invio "fire and forget"**: ad ogni interazione che cambia lo stato (punteggio,
  falli, timeout, cambio periodo, nome/colore squadra, start/stop del cronometro)
  la PWA fa una `POST` a `http://IP:porta/score`. Timeout breve (1,5 s via
  `AbortController`), errori di rete **ignorati silenziosamente**, nessun retry: se
  il BaskinCam è spento o fuori rete, il tabellone non rallenta né si blocca.
- **Nessun invio** se la checkbox è OFF o il campo indirizzo è vuoto.
- Il cronometro che scorre **non** genera traffico continuo: il ricevente ricava il
  tempo da `running` + `remainingMs` dell'ultimo messaggio.

Corpo JSON inviato (esempio in **Baskin**, 4° quarto a **1'47"** dalla fine,
cronometro in corsa, bonus attivo per entrambe le squadre):

```json
{
  "period": 4,
  "remainingMs": 107000,
  "running": true,
  "scores": [37, 33],
  "fouls": [0, 0],
  "timeoutsUsed": [1, 2],
  "bonusActive": [true, true],
  "possession": [false, false],
  "names": ["Leoni Rossi", "Aquile Blu"],
  "colors": ["#ff2b2b", "#1e6ee6"],
  "config": {
    "periodsRegular": 4,
    "timeoutMode": "baskin",
    "timeoutsPerHalf": 2,
    "timeoutsOvertime": 1,
    "bonusMode": "last2",
    "bonus": 5,
    "manualFouls": false,
    "possession": false,
    "scoreTeamColor": false
  }
}
```

Come leggerlo lato BaskinCam:

- Array `[squadra1, squadra2]` (sinistra, destra) per `scores`, `fouls`,
  `timeoutsUsed`, `bonusActive`, `possession`.
- `period` 1..`config.periodsRegular` = quarti; oltre = supplementari (es. con
  `periodsRegular:4`, `period:5` = 1° supplementare).
- `remainingMs` + `running`: con `running:true` il ricevente fa scorrere il tempo
  da solo partendo da `remainingMs` (la PWA **non** invia ad ogni decimo).
- `bonusActive` è già calcolato dalla PWA: in **Baskin** (`bonusMode:"last2"`)
  scatta per entrambe le squadre negli ultimi 2' di 4° quarto/supplementari,
  senza dipendere dai falli (qui infatti `fouls` è `[0,0]` con `manualFouls:false`);
  in **Basket** (`bonusMode:"teamFouls"`) è invece per-squadra in base ai
  falli. Il ricevente può usare `bonusActive` così com'è.
- `config.timeoutMode` (`baskin`/`basket`) e `bonusMode` (`last2`/`teamFouls`/`off`)
  indicano come rendere timeout e bonus; `manualFouls`, `possession`,
  `scoreTeamColor` riflettono le opzioni attive.

Stesso momento di partita — **4° quarto a 1'47" dalla fine**, cronometro in
corsa — ma in **Basket** (squadra 1 in bonus per aver raggiunto i falli di
squadra, non per il tempo residuo):

```json
{
  "period": 4,
  "remainingMs": 107000,
  "running": true,
  "scores": [42, 38],
  "fouls": [4, 2],
  "timeoutsUsed": [1, 0],
  "bonusActive": [true, false],
  "possession": [false, true],
  "names": ["Leoni Rossi", "Aquile Blu"],
  "colors": ["#ff2b2b", "#1e6ee6"],
  "config": {
    "periodsRegular": 4,
    "timeoutMode": "basket",
    "timeoutsPerHalf": 2,
    "timeoutsOvertime": 1,
    "bonusMode": "teamFouls",
    "bonus": 4,
    "manualFouls": true,
    "possession": true,
    "scoreTeamColor": false
  }
}
```

Gli **switch che cambiano** tra i due esempi (a parità di struttura del
payload) sono tutti dentro `config`. Il secondo esempio corrisponde a una
configurazione personalizzata in stile basket (logica timeout *Basket*, bonus
per falli di squadra, possesso attivo):

| Campo             | Baskin       | Basket    |
|-------------------|--------------|----------------|
| `timeoutMode`     | `"baskin"`   | `"basket"`       |
| `bonusMode`        | `"last2"`    | `"teamFouls"`  |
| `bonus`            | `5`          | `4`            |
| `manualFouls`      | `false`      | `true`         |
| `possession`       | `false`      | `true`         |

Di conseguenza cambia anche il **significato** dei campi fuori da `config`:
- `fouls` è `[0,0]` nell'esempio Baskin perché lì il conteggio falli è
  disattivato (`manualFouls:false`); in Basket invece è attivo e alimenta
  `bonusActive` tramite `bonusMode:"teamFouls"`.
- `possession` è sempre presente nell'array, ma ha senso operativo solo se
  `config.possession` è `true` (Basket); in Baskin resta `[false,false]`.

---

## Regole implementate

- **Tempi** → quarti da **8 minuti**, **4 periodi**, tempi supplementari da **4 minuti** (siglati da `1TS` a `9TS`).
- **Decimi di secondo** → negli ultimi **60 secondi** di ogni periodo o supplementare il cronometro passa al formato `SS:d` (regolamento FIBA), con gli stessi due punti dei minuti.
- **Bonus Baskin (ultimi 2′)** → si accende per **entrambe** le squadre quando il cronometro del **4° quarto** o di un **supplementare** smette di mostrare **2:00** (cioè appare **1:59**): a 2:00 niente bonus. Indicato dai **pallini** che si accendono e lampeggiano. Disattivabile da Impostazioni.
- **Timeout** → in operativa si assegnano **solo a cronometro fermo** (a crono in movimento un tap mostra *"Cronometro in movimento"*, senza fischio). **Baskin**: 1 per quarto (Q1/Q3), monte condiviso di 2 nei quarti 2 e 4; **Basket**: 2 nel 1° tempo, 3 nel 2° (max 2 negli ultimi 2′), 1 per supplementare. Un tap quando non ci sono timeout disponibili viene segnalato con **fischio** e avviso *"Timeout non disponibile"*. La correzione/azzeramento si fa nelle impostazioni.
- **Periodo** → mostrato con cifra a **LED bianca** (alta il 75% del cronometro) e due spie: **°** (quarti ordinari) o **TS** (supplementari); se ne accende una sola.
- **Suoni** → sirena e fischietto sono file audio originali (sintetizzati, rilasciati come **CC0**) inclusi in `sounds/`; la sirena suona **automaticamente a fine quarto** oltre che con il pulsante. Se i file non fossero disponibili, un sintetizzatore WebAudio fa da riserva.

---

## Licenza

Codice rilasciato sotto licenza **MIT** (vedi [`LICENSE`](LICENSE)) — open source.
I suoni in `pwa/sounds/` sono CC0.

> I loghi «EISI» e «Baskin» sono marchi registrati rispettivamente da Ente
> Italiano Sport Inclusivi e Associazione Baskin. La licenza MIT copre il
> codice sorgente di questo repository e non si estende ai loghi, che
> restano di proprietà dei rispettivi titolari.

Dal menu **…** dell'app è disponibile il link diretto al **repository GitHub** del codice.


---

**Autore:** Daniele Lolli (UncleDan)  
**Versione:** 2026g

