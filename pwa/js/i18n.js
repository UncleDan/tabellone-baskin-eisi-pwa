/* =====================================================================
   Tabellone Baskin EISI (PWA) - internazionalizzazione (it / en / fr)
   Deve essere caricato PRIMA di app.js: espone window.I18N (funzioni
   t/getLang/setLang/applyI18n) usate sia dall'HTML (data-i18n-*) sia
   dal codice applicativo (toast, etichette dinamiche).
   ===================================================================== */
'use strict';

const I18N_LANG_KEY = 'tabellone-baskin-eisi:lang'; // 'system' | 'it' | 'en' | 'fr'
const I18N_SUPPORTED = ['it', 'en', 'fr', 'es', 'de'];

const I18N_DICT = {
  it: {
    lang_name: 'Italiano',
    lang_system: 'Sistema',

    // topbar / controlli principali
    aria_play_pause: 'Avvia o ferma il tempo',
    aria_next_period: 'Periodo successivo',
    aria_timer: 'Tempo di gioco',
    aria_period: 'Periodo',
    aria_open_settings: 'Apri impostazioni e correzioni',
    aria_more_options: 'Altre opzioni',
    aria_confirm_exit_edit: 'Conferma ed esci dalle impostazioni',

    // squadre / punteggio
    default_team_name: 'Squadra {n}',
    aria_timeout_team: 'Timeout {team}',
    aria_possession_team: 'Possesso {team}',
    poss_label: 'Possesso',
    aria_bonus_team: 'Bonus {team}',
    fouls_label: 'Falli',
    aria_add_foul: 'Aggiungi fallo {team}',
    aria_remove_foul: 'Togli fallo {team}',
    color_label: 'Colore {color}',
    color_custom: 'Colore personalizzato',

    // pulsanti angolo
    aria_horn: 'Suona la sirena',
    aria_whistle: 'Suona il fischietto',
    aria_reset_match: 'Azzera la partita',

    // conferma reset
    aria_confirm_reset: 'Conferma reset',
    reset_title: 'Azzerare la partita?',
    reset_text: 'Punteggi, falli, timeout, tempo, periodo, nomi e colori delle squadre torneranno ai valori iniziali. Le impostazioni di gara restano invariate.',
    yes_reset: 'Sì, azzera',
    cancel: 'Annulla',

    // conferma periodo successivo
    aria_confirm_next: 'Conferma periodo successivo',
    next_title: 'Passare al periodo successivo?',
    next_text: 'Si passa al {label} e il cronometro viene riportato al tempo pieno.',
    period_label: '{n}° periodo',
    overtime_label: '{n}° tempo supplementare ({n}TS)',
    yes_next: 'Sì, avanti',

    // toast
    toast_end_of_time: 'Fine tempo',
    toast_clock_running: 'Cronometro in movimento',
    toast_timeout_unavailable: 'Timeout non disponibile',
    toast_time_reset: 'Tempo azzerato',
    toast_new_match: 'Nuova partita',
    toast_match_reset: 'Partita azzerata',
    toast_changes_saved: 'Modifiche salvate',
    toast_baskincam_format: 'BaskinCam: formato consigliato IP:porta (es. 192.168.1.50:8080)',
    toast_settings_saved: 'Impostazioni salvate',
    toast_app_reset: 'Applicazione azzerata',
    toast_use_browser_menu: 'Usa il menu del browser: "Installa app" / "Aggiungi a schermata Home"',
    toast_app_installed: 'App installata',
    toast_updates_unavailable: 'Aggiornamenti non disponibili',
    toast_sw_inactive: 'Service worker non attivo',
    toast_checking_updates: 'Controllo aggiornamenti…',
    toast_check_network: 'Impossibile controllare: verifica la connessione',
    toast_check_failed: 'Impossibile controllare gli aggiornamenti',
    toast_new_version: 'Nuova versione disponibile ({version}): disinstalla e reinstalla l\'app per aggiornare',
    toast_up_to_date: 'Sei aggiornato (v{version})',
    toast_quit_hint: 'Per uscire chiudi la finestra o la scheda',
    toast_period_period: '{n}° periodo',
    toast_period_overtime: 'Supplementare {n}TS',

    // menu Informazioni
    aria_info_dialog: 'Informazioni',
    info_title: 'Informazioni',
    version_label: 'Versione',
    btn_install: 'Installa app',
    btn_about_baskin: 'Cosa è il Baskin',
    btn_guide: 'Guida all\'uso',
    btn_repo: 'Codice sorgente su GitHub ↗',
    btn_issues: 'Segnalazioni ↗',
    btn_check_update: 'Verifica aggiornamenti',
    btn_cast_connect: 'Indirizzo / QR per la TV',
    btn_cast_role: 'Ruolo dispositivo…',
    btn_wake: 'Schermo sempre acceso:',
    btn_score_color: 'Punti colore squadra:',
    btn_mute: 'Audio:',
    btn_language: 'Lingua:',
    state_on: 'on',
    state_off: 'off',
    btn_match_settings: 'Impostazioni partita',
    btn_reset_app: 'Reset applicazione',
    btn_quit: 'Chiudi applicazione',
    btn_close_menu: 'Chiudi menu',

    // Cosa è il Baskin
    aria_about_baskin_dialog: 'Cosa è il Baskin',
    about_baskin_title: 'Cosa è il Baskin',
    about_baskin_text: 'Il Baskin è uno sport fondato sul basket, inclusivo per progettazione, che prevede per regolamento la partecipazione simultanea degli atleti senza divisione in categorie grazie ad un sistema basato sui ruoli in campo: atleti di entrambi i sessi, con e senza disabilità, con disabilità fisiche e/o cognitive giocano insieme sullo stesso campo la stessa partita. Il regolamento del Baskin è una proprietà intellettuale di <em>Associazione Baskin</em> ed i campionati in Italia sono organizzati da <em>EISI - Ente Italiano Sport Inclusivi</em>, Ente di Promozione Paralimpica riconosciuto dal <em>Comitato Italiano Paralimpico</em>.',
    logos_disclaimer: 'I loghi «EISI» e «Baskin» sono marchi registrati rispettivamente da Ente Italiano Sport Inclusivi e Associazione Baskin.',

    aria_guide_dialog: 'Guida all\'uso',
    guide_main_title: '🏟️ Schermata principale',
    guide_main_body: '<ul>' +
      '<li><strong>▶️ / ⏸️</strong> avvia o ferma il cronometro (anche con la barra spaziatrice).</li>' +
      '<li>A fine tempo compare <strong>⏭ Periodo successivo</strong>: con conferma avanza di un periodo e riporta il cronometro al tempo pieno.</li>' +
      '<li><strong>✏️</strong> apre le impostazioni/correzioni. <strong>⋯</strong> apre questo menu.</li>' +
      '<li><strong>+1 / +2 / +3</strong> aumentano il punteggio della squadra a sinistra o a destra.</li>' +
      '<li>Tocca la <strong>pillola dei timeout</strong> per accenderne uno; a tutti accesi, il tocco successivo li azzera.</li>' +
      '<li>I tasti dei <strong>falli</strong> compaiono solo se il <em>Conteggio falli</em> è attivo nelle impostazioni.</li>' +
      '<li>In basso a destra: <strong>📣 sirena</strong> e <strong>fischietto</strong>, per riprodurre i suoni manualmente.</li>' +
      '</ul>',
    guide_edit_title: '⚙️ Impostazioni / correzioni (✏️)',
    guide_edit_body: '<ul>' +
      '<li>Il cronometro si <strong>blocca automaticamente</strong> entrando in questa schermata.</li>' +
      '<li><strong>✔️</strong> salva le modifiche e torna alla modalità operativa.</li>' +
      '<li>Tocca il <strong>tempo</strong> o il <strong>periodo</strong> (riquadri tratteggiati) per aprire i rispettivi rotori.</li>' +
      '<li>Tocca il <strong>nome di una squadra</strong> per modificarlo; sotto, una riga di colori imposta il colore della scritta.</li>' +
      '<li><strong>−1 / −2 / −3</strong> abbassano il punteggio.</li>' +
      '<li>In basso a sinistra, <strong>Reset</strong> (rosso) azzera la partita previa conferma.</li>' +
      '</ul>',
    guide_settings_title: '🏀 Impostazioni partita (dal menu ⋯)',
    guide_settings_body: '<ul>' +
      '<li><strong>Modalità</strong>: Baskin (valori standard) oppure Personalizza (ogni campo modificabile).</li>' +
      '<li><strong>Logica timeout</strong>: Baskin (riporto all\'indietro) oppure Basket (monte per tempo).</li>' +
      '<li><strong>Modalità bonus</strong>: ultimi 2′ (Baskin), dopo N falli (Basket), oppure nessuno.</li>' +
      '<li>Durata periodo/supplementari, numero di periodi, timeout, soglia falli, sirena e fischio automatici.</li>' +
      '<li><strong>Streaming BaskinCam</strong>: invio dello stato ad un dispositivo companion sulla rete locale.</li>' +
      '<li><strong>Reset applicazione</strong>: azzera tutto e riporta le impostazioni ai valori Baskin.</li>' +
      '</ul>',
    guide_possession_title: '🔄 Possesso e bonus',
    guide_possession_body: '<ul>' +
      '<li>Le <strong>frecce di possesso</strong>: un tap su una freccia accende quella e spegne l\'altra.</li>' +
      '<li>Il <strong>bonus</strong> è indicato da un pallino per squadra accanto all\'etichetta "Falli".</li>' +
      '</ul>',
    guide_language_title: '🌐 Lingua',
    guide_language_body: 'L\'app è disponibile in italiano, inglese, francese, spagnolo e tedesco. Alla prima apertura la lingua viene rilevata automaticamente da quella del dispositivo; le bandierine nel menu ⋯ permettono di sceglierne una specifica in qualsiasi momento. Aprendo l\'app con il parametro <code>?lang=</code> nell\'indirizzo (es. <code>?lang=de</code>) si forza una lingua solo per quella apertura.',
    guide_autosave_title: '💾 Salvataggio automatico',
    guide_autosave_body: 'Lo stato della partita viene salvato ad ogni comando, anche se l\'app va in background o si chiude inaspettatamente: alla riapertura si riprende esattamente da dove eri (a cronometro fermo, per sicurezza).',
    close: 'Chiudi',

    // Impostazioni partita
    aria_match_settings_dialog: 'Impostazioni partita',
    match_settings_title: 'Impostazioni partita',
    preset_baskin: 'Baskin',
    preset_custom: 'Personalizza',
    match_params_title: 'Parametri di gara',
    field_minutes: 'Durata periodo (minuti)',
    field_periods: 'Numero di periodi',
    field_overtime: 'Durata supplementari (minuti)',
    field_timeouts_half: 'Timeout per tempo (1°/2°)',
    field_timeouts_ot: 'Timeout per supplementare',
    field_timeout_mode: 'Logica timeout',
    timeout_mode_baskin: 'Baskin (riporto all\'indietro)',
    timeout_mode_basket: 'Basket (monte per tempo)',
    field_bonus_mode: 'Modalità bonus',
    bonus_mode_last2: 'Ultimi 2′ (Baskin)',
    bonus_mode_teamfouls: 'Dopo N falli (Basket)',
    bonus_mode_off: 'Nessuno',
    field_bonus: 'Falli per il bonus (Basket)',
    field_manual_fouls: 'Conteggio falli',
    field_reset_fouls: 'Azzera i falli ad ogni periodo',
    field_possession: 'Frecce possesso alternato',
    field_auto_whistle_timeout: 'Fischio automatico se timeout non disponibile',
    field_auto_horn: 'Sirena automatica a fine tempo',
    baskincam_title: 'Streaming BaskinCam',
    field_baskincam_enable: 'Attiva invio verso BaskinCam',
    field_baskincam_host: 'Indirizzo BaskinCam (IP:porta)',
    save: 'Salva',

    // editor tempo / periodo
    aria_time_editor_dialog: 'Imposta il tempo',
    time_editor_title: 'Imposta il tempo',
    rotor_min: 'min',
    rotor_sec: 'sec',
    rotor_dec: 'dec',
    apply: 'Applica',
    full_time: 'Tempo pieno',
    aria_period_editor_dialog: 'Imposta il periodo',
    period_editor_title: 'Imposta il periodo',
    rotor_period: 'periodo',

    // ruota il dispositivo
    aria_rotate_dialog: 'Ruota il dispositivo in orizzontale',
    rotate_title: 'Ruota il dispositivo',
    rotate_sub: 'Il tabellone funziona in orizzontale (landscape)',

    toast_sound_on: 'Suono attivato',
    toast_sound_off: 'Suono disattivato',
    toast_manual_fouls_on: 'Conteggio falli attivato',
    toast_manual_fouls_off: 'Conteggio falli disattivato',
    toast_score_color_on: 'Punti nel colore squadra',
    toast_score_color_off: 'Punti verdi',
    confirm_reset_app: 'Reset applicazione: azzera punteggi, falli, timeout, possesso, nomi e riporta le impostazioni ai valori Baskin. Procedere?',
    confirm_quit: 'Chiudere l\'applicazione?',
    lang_confirm_title: 'Cambiare lingua?',
    lang_confirm_text: 'L\'app si chiuderà; alla riapertura sarà in {lang}.',
    lang_confirm_text_browser: 'Chiudi e riapri l\'app per completare il cambio: alla riapertura sarà in {lang}.',
    lang_confirm_yes: 'Conferma',
    meta_description: 'Tabellone segnapunti per il Baskin: tempo, punti, timeout e bonus. Funziona offline.'
  },

  en: {
    lang_name: 'English',
    lang_system: 'System',

    aria_play_pause: 'Start or stop the clock',
    aria_next_period: 'Next period',
    aria_timer: 'Game clock',
    aria_period: 'Period',
    aria_open_settings: 'Open settings and corrections',
    aria_more_options: 'More options',
    aria_confirm_exit_edit: 'Confirm and exit settings',

    default_team_name: 'Team {n}',
    aria_timeout_team: 'Timeout {team}',
    aria_possession_team: 'Possession {team}',
    poss_label: 'Possession',
    aria_bonus_team: 'Bonus {team}',
    fouls_label: 'Fouls',
    aria_add_foul: 'Add foul {team}',
    aria_remove_foul: 'Remove foul {team}',
    color_label: 'Color {color}',
    color_custom: 'Custom color',

    aria_horn: 'Sound the horn',
    aria_whistle: 'Sound the whistle',
    aria_reset_match: 'Reset the match',

    aria_confirm_reset: 'Confirm reset',
    reset_title: 'Reset the match?',
    reset_text: 'Scores, fouls, timeouts, time, period, team names and colors will return to their initial values. Match settings are not affected.',
    yes_reset: 'Yes, reset',
    cancel: 'Cancel',

    aria_confirm_next: 'Confirm next period',
    next_title: 'Move to the next period?',
    next_text: 'The clock will move to {label} and reset to full time.',
    period_label: 'period {n}',
    overtime_label: 'overtime {n} (OT{n})',
    yes_next: 'Yes, continue',

    toast_end_of_time: 'Time is up',
    toast_clock_running: 'Clock is running',
    toast_timeout_unavailable: 'No timeout available',
    toast_time_reset: 'Time reset',
    toast_new_match: 'New match',
    toast_match_reset: 'Match reset',
    toast_changes_saved: 'Changes saved',
    toast_baskincam_format: 'BaskinCam: recommended format IP:port (e.g. 192.168.1.50:8080)',
    toast_settings_saved: 'Settings saved',
    toast_app_reset: 'App reset',
    toast_use_browser_menu: 'Use the browser menu: "Install app" / "Add to Home screen"',
    toast_app_installed: 'App installed',
    toast_updates_unavailable: 'Updates unavailable',
    toast_sw_inactive: 'Service worker inactive',
    toast_checking_updates: 'Checking for updates…',
    toast_check_network: 'Could not check: verify your connection',
    toast_check_failed: 'Could not check for updates',
    toast_new_version: 'New version available ({version}): uninstall and reinstall the app to update',
    toast_up_to_date: 'You\'re up to date (v{version})',
    toast_quit_hint: 'To exit, close the window or tab',
    toast_period_period: 'Period {n}',
    toast_period_overtime: 'Overtime {n} (OT{n})',

    aria_info_dialog: 'About',
    info_title: 'About',
    version_label: 'Version',
    btn_install: 'Install app',
    btn_about_baskin: 'What is Baskin',
    btn_guide: 'User guide',
    btn_repo: 'Source code on GitHub ↗',
    btn_issues: 'Report an issue ↗',
    btn_check_update: 'Check for updates',
    btn_cast_connect: 'Address / QR for the TV',
    btn_cast_role: 'Device role…',
    btn_wake: 'Keep screen on:',
    btn_score_color: 'Team-colored scores:',
    btn_mute: 'Sound:',
    btn_language: 'Language:',
    state_on: 'on',
    state_off: 'off',
    btn_match_settings: 'Match settings',
    btn_reset_app: 'Reset app',
    btn_quit: 'Close app',
    btn_close_menu: 'Close menu',

    aria_about_baskin_dialog: 'What is Baskin',
    about_baskin_title: 'What is Baskin',
    about_baskin_text: 'Baskin is a sport built on basketball, inclusive by design: its rules call for the simultaneous participation of all athletes with no separate categories, thanks to a system based on on-court roles \u2014 athletes of every gender, with and without disabilities, including physical and/or cognitive disabilities, play together on the same court in the same game. The Baskin rulebook is the intellectual property of <em>Associazione Baskin</em>, and championships in Italy are organised by <em>EISI - Ente Italiano Sport Inclusivi</em>, a Paralympic Promotion Body recognised by the <em>Italian Paralympic Committee</em>.',
    logos_disclaimer: 'The «EISI» and «Baskin» logos are registered trademarks of Ente Italiano Sport Inclusivi and Associazione Baskin respectively.',

    aria_guide_dialog: 'User guide',
    guide_main_title: '🏟️ Main screen',
    guide_main_body: '<ul>' +
      '<li><strong>▶️ / ⏸️</strong> start or stop the clock (also works with the spacebar).</li>' +
      '<li>When time runs out, an <strong>⏭ Next period</strong> button appears: with confirmation, it advances one period and resets the clock to full time.</li>' +
      '<li><strong>✏️</strong> opens settings/corrections. <strong>⋯</strong> opens this menu.</li>' +
      '<li><strong>+1 / +2 / +3</strong> increase the left or right team\'s score.</li>' +
      '<li>Tap the <strong>timeout pill</strong> to light one up; once all are lit, the next tap resets them.</li>' +
      '<li>The <strong>foul</strong> buttons only appear if <em>Foul count</em> is enabled in settings.</li>' +
      '<li>Bottom right: <strong>📣 horn</strong> and <strong>whistle</strong>, to play the sounds manually.</li>' +
      '</ul>',
    guide_edit_title: '⚙️ Settings / corrections (✏️)',
    guide_edit_body: '<ul>' +
      '<li>The clock is <strong>automatically paused</strong> when you enter this screen.</li>' +
      '<li><strong>✔️</strong> saves your changes and returns to game mode.</li>' +
      '<li>Tap the <strong>time</strong> or the <strong>period</strong> (dashed boxes) to open the respective pickers.</li>' +
      '<li>Tap a <strong>team name</strong> to edit it; below, a row of colors sets the text color.</li>' +
      '<li><strong>−1 / −2 / −3</strong> lower the score.</li>' +
      '<li>Bottom left, <strong>Reset</strong> (red) resets the match after confirmation.</li>' +
      '</ul>',
    guide_settings_title: '🏀 Match settings (from the ⋯ menu)',
    guide_settings_body: '<ul>' +
      '<li><strong>Mode</strong>: Baskin (standard values) or Custom (every field editable).</li>' +
      '<li><strong>Timeout logic</strong>: Baskin (carries over) or Basket (pool per half).</li>' +
      '<li><strong>Bonus mode</strong>: last 2′ (Baskin), after N fouls (Basket), or none.</li>' +
      '<li>Period/overtime length, number of periods, timeouts, foul threshold, automatic horn and whistle.</li>' +
      '<li><strong>BaskinCam streaming</strong>: sends match state to a companion device on the local network.</li>' +
      '<li><strong>Reset app</strong>: clears everything and restores Baskin default settings.</li>' +
      '</ul>',
    guide_possession_title: '🔄 Possession and bonus',
    guide_possession_body: '<ul>' +
      '<li>The <strong>possession arrows</strong>: tapping one lights it up and turns off the other.</li>' +
      '<li>The <strong>bonus</strong> is shown by one dot per team next to the "Fouls" label.</li>' +
      '</ul>',
    guide_language_title: '🌐 Language',
    guide_language_body: 'The app is available in Italian, English, French, Spanish and German. On first launch, the language is detected automatically from your device; the flags in the ⋯ menu let you choose a specific one at any time. Opening the app with the <code>?lang=</code> parameter in the address (e.g. <code>?lang=de</code>) forces a language for that session only.',
    guide_autosave_title: '💾 Automatic saving',
    guide_autosave_body: 'Match state is saved after every action, even if the app goes to the background or closes unexpectedly: reopening it picks up exactly where you left off (with the clock paused, for safety).',
    close: 'Close',

    aria_match_settings_dialog: 'Match settings',
    match_settings_title: 'Match settings',
    preset_baskin: 'Baskin',
    preset_custom: 'Custom',
    match_params_title: 'Match parameters',
    field_minutes: 'Period length (minutes)',
    field_periods: 'Number of periods',
    field_overtime: 'Overtime length (minutes)',
    field_timeouts_half: 'Timeouts per half (1st/2nd)',
    field_timeouts_ot: 'Timeouts per overtime',
    field_timeout_mode: 'Timeout logic',
    timeout_mode_baskin: 'Baskin (carries over)',
    timeout_mode_basket: 'Basket (pool per half)',
    field_bonus_mode: 'Bonus mode',
    bonus_mode_last2: 'Last 2′ (Baskin)',
    bonus_mode_teamfouls: 'After N fouls (Basket)',
    bonus_mode_off: 'None',
    field_bonus: 'Fouls for bonus (Basket)',
    field_manual_fouls: 'Foul count',
    field_reset_fouls: 'Reset fouls every period',
    field_possession: 'Alternating possession arrows',
    field_auto_whistle_timeout: 'Automatic whistle if timeout unavailable',
    field_auto_horn: 'Automatic horn at time expiry',
    baskincam_title: 'BaskinCam streaming',
    field_baskincam_enable: 'Enable sending to BaskinCam',
    field_baskincam_host: 'BaskinCam address (IP:port)',
    save: 'Save',

    aria_time_editor_dialog: 'Set the time',
    time_editor_title: 'Set the time',
    rotor_min: 'min',
    rotor_sec: 'sec',
    rotor_dec: 'ds',
    apply: 'Apply',
    full_time: 'Full time',
    aria_period_editor_dialog: 'Set the period',
    period_editor_title: 'Set the period',
    rotor_period: 'period',

    aria_rotate_dialog: 'Rotate the device to landscape',
    rotate_title: 'Rotate your device',
    rotate_sub: 'The scoreboard works in landscape mode',

    toast_sound_on: 'Sound on',
    toast_sound_off: 'Sound off',
    toast_manual_fouls_on: 'Foul count on',
    toast_manual_fouls_off: 'Foul count off',
    toast_score_color_on: 'Team-colored scores',
    toast_score_color_off: 'Green scores',
    confirm_reset_app: 'App reset: clears scores, fouls, timeouts, possession, team names and restores Baskin default settings. Proceed?',
    confirm_quit: 'Close the app?',
    lang_confirm_title: 'Change language?',
    lang_confirm_text: 'The app will close; when you reopen it, it will be in {lang}.',
    lang_confirm_text_browser: 'Close and reopen the app to complete the change: it will then be in {lang}.',
    lang_confirm_yes: 'Confirm',
    meta_description: 'Scoreboard for Baskin: time, points, timeouts and bonus. Works offline.'
  },

  fr: {
    lang_name: 'Français',
    lang_system: 'Système',

    aria_play_pause: 'Démarrer ou arrêter le temps',
    aria_next_period: 'Période suivante',
    aria_timer: 'Temps de jeu',
    aria_period: 'Période',
    aria_open_settings: 'Ouvrir les réglages et corrections',
    aria_more_options: 'Autres options',
    aria_confirm_exit_edit: 'Valider et quitter les réglages',

    default_team_name: 'Équipe {n}',
    aria_timeout_team: 'Temps mort {team}',
    aria_possession_team: 'Possession {team}',
    poss_label: 'Possession',
    aria_bonus_team: 'Bonus {team}',
    fouls_label: 'Fautes',
    aria_add_foul: 'Ajouter une faute {team}',
    aria_remove_foul: 'Retirer une faute {team}',
    color_label: 'Couleur {color}',
    color_custom: 'Couleur personnalisée',

    aria_horn: 'Faire retentir la sirène',
    aria_whistle: 'Faire retentir le sifflet',
    aria_reset_match: 'Réinitialiser le match',

    aria_confirm_reset: 'Confirmer la réinitialisation',
    reset_title: 'Réinitialiser le match ?',
    reset_text: 'Scores, fautes, temps morts, temps, période, noms et couleurs des équipes reviendront à leurs valeurs initiales. Les réglages du match restent inchangés.',
    yes_reset: 'Oui, réinitialiser',
    cancel: 'Annuler',

    aria_confirm_next: 'Confirmer la période suivante',
    next_title: 'Passer à la période suivante ?',
    next_text: 'Le chronomètre passe à {label} et repart à temps plein.',
    period_label: '{n}e période',
    overtime_label: '{n}e prolongation (TS{n})',
    yes_next: 'Oui, continuer',

    toast_end_of_time: 'Temps écoulé',
    toast_clock_running: 'Le chronomètre est en marche',
    toast_timeout_unavailable: 'Aucun temps mort disponible',
    toast_time_reset: 'Temps réinitialisé',
    toast_new_match: 'Nouveau match',
    toast_match_reset: 'Match réinitialisé',
    toast_changes_saved: 'Modifications enregistrées',
    toast_baskincam_format: 'BaskinCam : format recommandé IP:port (ex. 192.168.1.50:8080)',
    toast_settings_saved: 'Réglages enregistrés',
    toast_app_reset: 'Application réinitialisée',
    toast_use_browser_menu: 'Utilisez le menu du navigateur : « Installer l\'application » / « Ajouter à l\'écran d\'accueil »',
    toast_app_installed: 'Application installée',
    toast_updates_unavailable: 'Mises à jour indisponibles',
    toast_sw_inactive: 'Service worker inactif',
    toast_checking_updates: 'Vérification des mises à jour…',
    toast_check_network: 'Impossible de vérifier : contrôlez votre connexion',
    toast_check_failed: 'Impossible de vérifier les mises à jour',
    toast_new_version: 'Nouvelle version disponible ({version}) : désinstallez et réinstallez l\'application pour la mettre à jour',
    toast_up_to_date: 'Vous êtes à jour (v{version})',
    toast_quit_hint: 'Pour quitter, fermez la fenêtre ou l\'onglet',
    toast_period_period: 'Période {n}',
    toast_period_overtime: 'Prolongation {n} (TS{n})',

    aria_info_dialog: 'Informations',
    info_title: 'Informations',
    version_label: 'Version',
    btn_install: 'Installer l\'application',
    btn_about_baskin: 'Qu\'est-ce que le Baskin',
    btn_guide: 'Guide d\'utilisation',
    btn_repo: 'Code source sur GitHub ↗',
    btn_issues: 'Signaler un problème ↗',
    btn_check_update: 'Vérifier les mises à jour',
    btn_cast_connect: 'Adresse / QR pour la TV',
    btn_cast_role: 'Rôle de l\'appareil…',
    btn_wake: 'Écran toujours allumé :',
    btn_score_color: 'Scores colorés par équipe :',
    btn_mute: 'Son :',
    btn_language: 'Langue :',
    state_on: 'on',
    state_off: 'off',
    btn_match_settings: 'Réglages du match',
    btn_reset_app: 'Réinitialiser l\'application',
    btn_quit: 'Fermer l\'application',
    btn_close_menu: 'Fermer le menu',

    aria_about_baskin_dialog: 'Qu\'est-ce que le Baskin',
    about_baskin_title: 'Qu\'est-ce que le Baskin',
    about_baskin_text: 'Le Baskin est un sport fondé sur le basket-ball, inclusif par conception : son règlement prévoit la participation simultanée de tous les athlètes sans distinction de catégories, grâce à un système fondé sur des rôles sur le terrain \u2014 des athlètes des deux sexes, avec et sans handicap, y compris des handicaps physiques et/ou cognitifs, jouent ensemble sur le même terrain le même match. Le règlement du Baskin est une propriété intellectuelle de l\'<em>Associazione Baskin</em>, et les championnats en Italie sont organisés par l\'<em>EISI - Ente Italiano Sport Inclusivi</em>, organisme de promotion paralympique reconnu par le <em>Comité paralympique italien</em>.',
    logos_disclaimer: 'Les logos « EISI » et « Baskin » sont des marques déposées respectivement par Ente Italiano Sport Inclusivi et Associazione Baskin.',

    aria_guide_dialog: 'Guide d\'utilisation',
    guide_main_title: '🏟️ Écran principal',
    guide_main_body: '<ul>' +
      '<li><strong>▶️ / ⏸️</strong> démarre ou arrête le chronomètre (fonctionne aussi avec la barre d\'espace).</li>' +
      '<li>Quand le temps est écoulé, un bouton <strong>⏭ Période suivante</strong> apparaît : après confirmation, il passe à la période suivante et remet le chronomètre à temps plein.</li>' +
      '<li><strong>✏️</strong> ouvre les réglages/corrections. <strong>⋯</strong> ouvre ce menu.</li>' +
      '<li><strong>+1 / +2 / +3</strong> augmentent le score de l\'équipe à gauche ou à droite.</li>' +
      '<li>Touchez la <strong>pastille des temps morts</strong> pour en allumer un ; une fois tous allumés, l\'appui suivant les réinitialise.</li>' +
      '<li>Les boutons de <strong>fautes</strong> n\'apparaissent que si le <em>Comptage des fautes</em> est activé dans les réglages.</li>' +
      '<li>En bas à droite : <strong>📣 sirène</strong> et <strong>sifflet</strong>, pour jouer les sons manuellement.</li>' +
      '</ul>',
    guide_edit_title: '⚙️ Réglages / corrections (✏️)',
    guide_edit_body: '<ul>' +
      '<li>Le chronomètre se <strong>met automatiquement en pause</strong> à l\'entrée sur cet écran.</li>' +
      '<li><strong>✔️</strong> enregistre les modifications et revient au mode match.</li>' +
      '<li>Touchez le <strong>temps</strong> ou la <strong>période</strong> (cadres en pointillés) pour ouvrir les molettes correspondantes.</li>' +
      '<li>Touchez le <strong>nom d\'une équipe</strong> pour le modifier ; en dessous, une rangée de couleurs définit la couleur du texte.</li>' +
      '<li><strong>−1 / −2 / −3</strong> diminuent le score.</li>' +
      '<li>En bas à gauche, <strong>Réinitialiser</strong> (rouge) réinitialise le match après confirmation.</li>' +
      '</ul>',
    guide_settings_title: '🏀 Réglages du match (depuis le menu ⋯)',
    guide_settings_body: '<ul>' +
      '<li><strong>Mode</strong> : Baskin (valeurs standard) ou Personnaliser (chaque champ modifiable).</li>' +
      '<li><strong>Logique des temps morts</strong> : Baskin (report) ou Basket (quota par mi-temps).</li>' +
      '<li><strong>Mode bonus</strong> : dernières 2′ (Baskin), après N fautes (Basket), ou aucun.</li>' +
      '<li>Durée de la période/prolongations, nombre de périodes, temps morts, seuil de fautes, sirène et sifflet automatiques.</li>' +
      '<li><strong>Diffusion BaskinCam</strong> : envoi de l\'état du match vers un appareil compagnon sur le réseau local.</li>' +
      '<li><strong>Réinitialiser l\'application</strong> : efface tout et restaure les réglages Baskin par défaut.</li>' +
      '</ul>',
    guide_possession_title: '🔄 Possession et bonus',
    guide_possession_body: '<ul>' +
      '<li>Les <strong>flèches de possession</strong> : toucher l\'une l\'allume et éteint l\'autre.</li>' +
      '<li>Le <strong>bonus</strong> est indiqué par un point par équipe à côté du libellé « Fautes ».</li>' +
      '</ul>',
    guide_language_title: '🌐 Langue',
    guide_language_body: 'L\'application est disponible en italien, anglais, français, espagnol et allemand. Au premier lancement, la langue est détectée automatiquement à partir de celle de l\'appareil ; les drapeaux dans le menu ⋯ permettent d\'en choisir une spécifique à tout moment. Ouvrir l\'application avec le paramètre <code>?lang=</code> dans l\'adresse (ex. <code>?lang=de</code>) force une langue pour cette ouverture uniquement.',
    guide_autosave_title: '💾 Sauvegarde automatique',
    guide_autosave_body: 'L\'état du match est enregistré après chaque action, même si l\'application passe en arrière-plan ou se ferme de manière inattendue : à la réouverture, vous reprenez exactement où vous en étiez (chronomètre en pause, par sécurité).',
    close: 'Fermer',

    aria_match_settings_dialog: 'Réglages du match',
    match_settings_title: 'Réglages du match',
    preset_baskin: 'Baskin',
    preset_custom: 'Personnaliser',
    match_params_title: 'Paramètres du match',
    field_minutes: 'Durée de la période (minutes)',
    field_periods: 'Nombre de périodes',
    field_overtime: 'Durée des prolongations (minutes)',
    field_timeouts_half: 'Temps morts par mi-temps (1re/2e)',
    field_timeouts_ot: 'Temps morts par prolongation',
    field_timeout_mode: 'Logique des temps morts',
    timeout_mode_baskin: 'Baskin (report)',
    timeout_mode_basket: 'Basket (quota par mi-temps)',
    field_bonus_mode: 'Mode bonus',
    bonus_mode_last2: 'Dernières 2′ (Baskin)',
    bonus_mode_teamfouls: 'Après N fautes (Basket)',
    bonus_mode_off: 'Aucun',
    field_bonus: 'Fautes pour le bonus (Basket)',
    field_manual_fouls: 'Comptage des fautes',
    field_reset_fouls: 'Réinitialiser les fautes à chaque période',
    field_possession: 'Flèches de possession alternée',
    field_auto_whistle_timeout: 'Coup de sifflet automatique si temps mort indisponible',
    field_auto_horn: 'Sirène automatique en fin de temps',
    baskincam_title: 'Diffusion BaskinCam',
    field_baskincam_enable: 'Activer l\'envoi vers BaskinCam',
    field_baskincam_host: 'Adresse BaskinCam (IP:port)',
    save: 'Enregistrer',

    aria_time_editor_dialog: 'Régler le temps',
    time_editor_title: 'Régler le temps',
    rotor_min: 'min',
    rotor_sec: 'sec',
    rotor_dec: 'dix',
    apply: 'Appliquer',
    full_time: 'Temps plein',
    aria_period_editor_dialog: 'Régler la période',
    period_editor_title: 'Régler la période',
    rotor_period: 'période',

    aria_rotate_dialog: 'Tournez l\'appareil en mode paysage',
    rotate_title: 'Tournez votre appareil',
    rotate_sub: 'Le tableau fonctionne en mode paysage',

    toast_sound_on: 'Son activé',
    toast_sound_off: 'Son désactivé',
    toast_manual_fouls_on: 'Comptage des fautes activé',
    toast_manual_fouls_off: 'Comptage des fautes désactivé',
    toast_score_color_on: 'Scores colorés par équipe',
    toast_score_color_off: 'Scores en vert',
    confirm_reset_app: 'Réinitialisation de l\'application : efface scores, fautes, temps morts, possession, noms d\'équipe et restaure les réglages Baskin par défaut. Continuer ?',
    confirm_quit: 'Fermer l\'application ?',
    lang_confirm_title: 'Changer de langue ?',
    lang_confirm_text: 'L\'application va se fermer ; à la réouverture, elle sera en {lang}.',
    lang_confirm_text_browser: 'Fermez puis rouvrez l\'application pour terminer le changement : elle sera alors en {lang}.',
    lang_confirm_yes: 'Confirmer',
    meta_description: 'Tableau de marque pour le Baskin : temps, points, temps morts et bonus. Fonctionne hors ligne.'
  },

  es: {
    lang_name: 'Español',
    lang_system: 'Sistema',

    aria_play_pause: 'Iniciar o detener el tiempo',
    aria_next_period: 'Periodo siguiente',
    aria_timer: 'Tiempo de juego',
    aria_period: 'Periodo',
    aria_open_settings: 'Abrir ajustes y correcciones',
    aria_more_options: 'Más opciones',
    aria_confirm_exit_edit: 'Confirmar y salir de los ajustes',

    default_team_name: 'Equipo {n}',
    aria_timeout_team: 'Tiempo muerto {team}',
    aria_possession_team: 'Posesión {team}',
    poss_label: 'Posesión',
    aria_bonus_team: 'Bonus {team}',
    fouls_label: 'Faltas',
    aria_add_foul: 'Añadir falta {team}',
    aria_remove_foul: 'Quitar falta {team}',
    color_label: 'Color {color}',
    color_custom: 'Color personalizado',

    aria_horn: 'Hacer sonar la bocina',
    aria_whistle: 'Hacer sonar el silbato',
    aria_reset_match: 'Reiniciar el partido',

    aria_confirm_reset: 'Confirmar reinicio',
    reset_title: '¿Reiniciar el partido?',
    reset_text: 'Puntos, faltas, tiempos muertos, tiempo, periodo, nombres y colores de los equipos volverán a sus valores iniciales. Los ajustes del partido no se modifican.',
    yes_reset: 'Sí, reiniciar',
    cancel: 'Cancelar',

    aria_confirm_next: 'Confirmar periodo siguiente',
    next_title: '¿Pasar al periodo siguiente?',
    next_text: 'Se pasa al {label} y el cronómetro vuelve al tiempo completo.',
    period_label: '{n}º periodo',
    overtime_label: '{n}ª prórroga (TS{n})',
    yes_next: 'Sí, continuar',

    toast_end_of_time: 'Tiempo cumplido',
    toast_clock_running: 'Cronómetro en marcha',
    toast_timeout_unavailable: 'Tiempo muerto no disponible',
    toast_time_reset: 'Tiempo reiniciado',
    toast_new_match: 'Nuevo partido',
    toast_match_reset: 'Partido reiniciado',
    toast_changes_saved: 'Cambios guardados',
    toast_baskincam_format: 'BaskinCam: formato recomendado IP:puerto (ej. 192.168.1.50:8080)',
    toast_settings_saved: 'Ajustes guardados',
    toast_app_reset: 'Aplicación reiniciada',
    toast_use_browser_menu: 'Usa el menú del navegador: «Instalar aplicación» / «Añadir a pantalla de inicio»',
    toast_app_installed: 'Aplicación instalada',
    toast_updates_unavailable: 'Actualizaciones no disponibles',
    toast_sw_inactive: 'Service worker no activo',
    toast_checking_updates: 'Comprobando actualizaciones…',
    toast_check_network: 'No se puede comprobar: revisa la conexión',
    toast_check_failed: 'No se han podido comprobar las actualizaciones',
    toast_new_version: 'Nueva versión disponible ({version}): desinstala y vuelve a instalar la aplicación para actualizar',
    toast_up_to_date: 'Estás actualizado (v{version})',
    toast_quit_hint: 'Para salir, cierra la ventana o la pestaña',
    toast_period_period: 'Periodo {n}',
    toast_period_overtime: 'Prórroga {n} (TS{n})',

    aria_info_dialog: 'Información',
    info_title: 'Información',
    version_label: 'Versión',
    btn_install: 'Instalar aplicación',
    btn_about_baskin: 'Qué es el Baskin',
    btn_guide: 'Guía de uso',
    btn_repo: 'Código fuente en GitHub ↗',
    btn_issues: 'Informar de un problema ↗',
    btn_check_update: 'Comprobar actualizaciones',
    btn_cast_connect: 'Dirección / QR para la TV',
    btn_cast_role: 'Rol del dispositivo…',
    btn_wake: 'Pantalla siempre encendida:',
    btn_score_color: 'Puntos con color del equipo:',
    btn_mute: 'Sonido:',
    btn_language: 'Idioma:',
    state_on: 'on',
    state_off: 'off',
    btn_match_settings: 'Ajustes del partido',
    btn_reset_app: 'Reiniciar aplicación',
    btn_quit: 'Cerrar aplicación',
    btn_close_menu: 'Cerrar menú',

    aria_about_baskin_dialog: 'Qué es el Baskin',
    about_baskin_title: 'Qué es el Baskin',
    about_baskin_text: 'El Baskin es un deporte basado en el baloncesto, inclusivo por diseño: su reglamento prevé la participación simultánea de todos los deportistas sin división en categorías, gracias a un sistema basado en los roles en la pista \u2014 deportistas de ambos sexos, con y sin discapacidad, incluidas discapacidades físicas y/o cognitivas, juegan juntos en la misma pista el mismo partido. El reglamento del Baskin es propiedad intelectual de <em>Associazione Baskin</em> y los campeonatos en Italia están organizados por <em>EISI - Ente Italiano Sport Inclusivi</em>, entidad de promoción paralímpica reconocida por el <em>Comité Paralímpico Italiano</em>.',
    logos_disclaimer: 'Los logotipos «EISI» y «Baskin» son marcas registradas de Ente Italiano Sport Inclusivi y Associazione Baskin respectivamente.',

    aria_guide_dialog: 'Guía de uso',
    guide_main_title: '🏟️ Pantalla principal',
    guide_main_body: '<ul>' +
      '<li><strong>▶️ / ⏸️</strong> inicia o detiene el cronómetro (también con la barra espaciadora).</li>' +
      '<li>Al acabar el tiempo aparece <strong>⏭ Periodo siguiente</strong>: con confirmación avanza un periodo y devuelve el cronómetro al tiempo completo.</li>' +
      '<li><strong>✏️</strong> abre los ajustes/correcciones. <strong>⋯</strong> abre este menú.</li>' +
      '<li><strong>+1 / +2 / +3</strong> aumentan la puntuación del equipo de la izquierda o de la derecha.</li>' +
      '<li>Toca la <strong>pastilla de tiempos muertos</strong> para encender uno; con todos encendidos, el siguiente toque los reinicia.</li>' +
      '<li>Los botones de <strong>faltas</strong> solo aparecen si el <em>Recuento de faltas</em> está activo en los ajustes.</li>' +
      '<li>Abajo a la derecha: <strong>📣 bocina</strong> y <strong>silbato</strong>, para reproducir los sonidos manualmente.</li>' +
      '</ul>',
    guide_edit_title: '⚙️ Ajustes / correcciones (✏️)',
    guide_edit_body: '<ul>' +
      '<li>El cronómetro se <strong>detiene automáticamente</strong> al entrar en esta pantalla.</li>' +
      '<li><strong>✔️</strong> guarda los cambios y vuelve al modo de juego.</li>' +
      '<li>Toca el <strong>tiempo</strong> o el <strong>periodo</strong> (recuadros discontinuos) para abrir sus respectivos selectores.</li>' +
      '<li>Toca el <strong>nombre de un equipo</strong> para modificarlo; debajo, una fila de colores define el color del texto.</li>' +
      '<li><strong>−1 / −2 / −3</strong> reducen la puntuación.</li>' +
      '<li>Abajo a la izquierda, <strong>Reiniciar</strong> (rojo) reinicia el partido previa confirmación.</li>' +
      '</ul>',
    guide_settings_title: '🏀 Ajustes del partido (desde el menú ⋯)',
    guide_settings_body: '<ul>' +
      '<li><strong>Modo</strong>: Baskin (valores estándar) o Personalizar (todos los campos modificables).</li>' +
      '<li><strong>Lógica de tiempos muertos</strong>: Baskin (arrastre) o Basket (cupo por mitad).</li>' +
      '<li><strong>Modo bonus</strong>: últimos 2′ (Baskin), tras N faltas (Basket), o ninguno.</li>' +
      '<li>Duración del periodo/prórrogas, número de periodos, tiempos muertos, umbral de faltas, bocina y silbato automáticos.</li>' +
      '<li><strong>Streaming BaskinCam</strong>: envío del estado a un dispositivo complementario en la red local.</li>' +
      '<li><strong>Reiniciar aplicación</strong>: borra todo y restablece los ajustes a los valores Baskin.</li>' +
      '</ul>',
    guide_possession_title: '🔄 Posesión y bonus',
    guide_possession_body: '<ul>' +
      '<li>Las <strong>flechas de posesión</strong>: al tocar una se enciende esa y se apaga la otra.</li>' +
      '<li>El <strong>bonus</strong> se indica con un punto por equipo junto a la etiqueta «Faltas».</li>' +
      '</ul>',
    guide_language_title: '🌐 Idioma',
    guide_language_body: 'La aplicación está disponible en italiano, inglés, francés, español y alemán. Al abrirla por primera vez, el idioma se detecta automáticamente del dispositivo; las banderas del menú ⋯ permiten elegir uno concreto en cualquier momento. Al abrir la aplicación con el parámetro <code>?lang=</code> en la dirección (p. ej. <code>?lang=de</code>) se fuerza un idioma solo para esa apertura.',
    guide_autosave_title: '💾 Guardado automático',
    guide_autosave_body: 'El estado del partido se guarda después de cada acción, incluso si la aplicación pasa a segundo plano o se cierra inesperadamente: al reabrirla se retoma exactamente donde lo dejaste (con el cronómetro detenido, por seguridad).',
    close: 'Cerrar',

    aria_match_settings_dialog: 'Ajustes del partido',
    match_settings_title: 'Ajustes del partido',
    preset_baskin: 'Baskin',
    preset_custom: 'Personalizar',
    match_params_title: 'Parámetros del partido',
    field_minutes: 'Duración del periodo (minutos)',
    field_periods: 'Número de periodos',
    field_overtime: 'Duración de las prórrogas (minutos)',
    field_timeouts_half: 'Tiempos muertos por mitad (1ª/2ª)',
    field_timeouts_ot: 'Tiempos muertos por prórroga',
    field_timeout_mode: 'Lógica de tiempos muertos',
    timeout_mode_baskin: 'Baskin (arrastre)',
    timeout_mode_basket: 'Basket (cupo por mitad)',
    field_bonus_mode: 'Modo bonus',
    bonus_mode_last2: 'Últimos 2′ (Baskin)',
    bonus_mode_teamfouls: 'Tras N faltas (Basket)',
    bonus_mode_off: 'Ninguno',
    field_bonus: 'Faltas para el bonus (Basket)',
    field_manual_fouls: 'Recuento de faltas',
    field_reset_fouls: 'Reiniciar las faltas en cada periodo',
    field_possession: 'Flechas de posesión alterna',
    field_auto_whistle_timeout: 'Silbato automático si el tiempo muerto no está disponible',
    field_auto_horn: 'Bocina automática al acabar el tiempo',
    baskincam_title: 'Streaming BaskinCam',
    field_baskincam_enable: 'Activar envío a BaskinCam',
    field_baskincam_host: 'Dirección BaskinCam (IP:puerto)',
    save: 'Guardar',

    aria_time_editor_dialog: 'Ajustar el tiempo',
    time_editor_title: 'Ajustar el tiempo',
    rotor_min: 'min',
    rotor_sec: 'seg',
    rotor_dec: 'déc',
    apply: 'Aplicar',
    full_time: 'Tiempo completo',
    aria_period_editor_dialog: 'Ajustar el periodo',
    period_editor_title: 'Ajustar el periodo',
    rotor_period: 'periodo',

    aria_rotate_dialog: 'Gira el dispositivo en horizontal',
    rotate_title: 'Gira el dispositivo',
    rotate_sub: 'El marcador funciona en horizontal (apaisado)',

    toast_sound_on: 'Sonido activado',
    toast_sound_off: 'Sonido desactivado',
    toast_manual_fouls_on: 'Recuento de faltas activado',
    toast_manual_fouls_off: 'Recuento de faltas desactivado',
    toast_score_color_on: 'Puntos con el color del equipo',
    toast_score_color_off: 'Puntos en verde',
    confirm_reset_app: 'Reiniciar aplicación: borra puntos, faltas, tiempos muertos, posesión, nombres y restablece los ajustes a los valores Baskin. ¿Continuar?',
    confirm_quit: '¿Cerrar la aplicación?',
    lang_confirm_title: '¿Cambiar de idioma?',
    lang_confirm_text: 'La aplicación se cerrará; al volver a abrirla estará en {lang}.',
    lang_confirm_text_browser: 'Cierra y vuelve a abrir la aplicación para completar el cambio: entonces estará en {lang}.',
    lang_confirm_yes: 'Confirmar',
    meta_description: 'Marcador para el Baskin: tiempo, puntos, tiempos muertos y bonus. Funciona sin conexión.'
  },

  de: {
    lang_name: 'Deutsch',
    lang_system: 'System',

    aria_play_pause: 'Zeit starten oder stoppen',
    aria_next_period: 'Nächstes Viertel',
    aria_timer: 'Spielzeit',
    aria_period: 'Viertel',
    aria_open_settings: 'Einstellungen und Korrekturen öffnen',
    aria_more_options: 'Weitere Optionen',
    aria_confirm_exit_edit: 'Bestätigen und Einstellungen verlassen',

    default_team_name: 'Team {n}',
    aria_timeout_team: 'Auszeit {team}',
    aria_possession_team: 'Ballbesitz {team}',
    poss_label: 'Ballbesitz',
    aria_bonus_team: 'Bonus {team}',
    fouls_label: 'Fouls',
    aria_add_foul: 'Foul hinzufügen {team}',
    aria_remove_foul: 'Foul entfernen {team}',
    color_label: 'Farbe {color}',
    color_custom: 'Eigene Farbe',

    aria_horn: 'Hupe ertönen lassen',
    aria_whistle: 'Pfiff ertönen lassen',
    aria_reset_match: 'Spiel zurücksetzen',

    aria_confirm_reset: 'Zurücksetzen bestätigen',
    reset_title: 'Spiel zurücksetzen?',
    reset_text: 'Punkte, Fouls, Auszeiten, Zeit, Viertel, Teamnamen und -farben werden auf die Anfangswerte zurückgesetzt. Die Spieleinstellungen bleiben unverändert.',
    yes_reset: 'Ja, zurücksetzen',
    cancel: 'Abbrechen',

    aria_confirm_next: 'Nächstes Viertel bestätigen',
    next_title: 'Zum nächsten Viertel wechseln?',
    next_text: 'Es geht weiter mit {label}, die Uhr wird auf die volle Zeit zurückgesetzt.',
    period_label: '{n}. Viertel',
    overtime_label: '{n}. Verlängerung (V{n})',
    yes_next: 'Ja, weiter',

    toast_end_of_time: 'Zeit abgelaufen',
    toast_clock_running: 'Uhr läuft',
    toast_timeout_unavailable: 'Keine Auszeit verfügbar',
    toast_time_reset: 'Zeit zurückgesetzt',
    toast_new_match: 'Neues Spiel',
    toast_match_reset: 'Spiel zurückgesetzt',
    toast_changes_saved: 'Änderungen gespeichert',
    toast_baskincam_format: 'BaskinCam: empfohlenes Format IP:Port (z. B. 192.168.1.50:8080)',
    toast_settings_saved: 'Einstellungen gespeichert',
    toast_app_reset: 'App zurückgesetzt',
    toast_use_browser_menu: 'Nutze das Browsermenü: „App installieren“ / „Zum Startbildschirm hinzufügen“',
    toast_app_installed: 'App installiert',
    toast_updates_unavailable: 'Updates nicht verfügbar',
    toast_sw_inactive: 'Service Worker nicht aktiv',
    toast_checking_updates: 'Suche nach Updates…',
    toast_check_network: 'Prüfung nicht möglich: Verbindung überprüfen',
    toast_check_failed: 'Updates konnten nicht geprüft werden',
    toast_new_version: 'Neue Version verfügbar ({version}): App deinstallieren und neu installieren, um zu aktualisieren',
    toast_up_to_date: 'Du bist auf dem neuesten Stand (v{version})',
    toast_quit_hint: 'Zum Beenden das Fenster oder den Tab schließen',
    toast_period_period: '{n}. Viertel',
    toast_period_overtime: 'Verlängerung {n} (V{n})',

    aria_info_dialog: 'Informationen',
    info_title: 'Informationen',
    version_label: 'Version',
    btn_install: 'App installieren',
    btn_about_baskin: 'Was ist Baskin',
    btn_guide: 'Bedienungsanleitung',
    btn_repo: 'Quellcode auf GitHub ↗',
    btn_issues: 'Problem melden ↗',
    btn_check_update: 'Nach Updates suchen',
    btn_cast_connect: 'Adresse / QR für den TV',
    btn_cast_role: 'Geräterolle…',
    btn_wake: 'Bildschirm immer an:',
    btn_score_color: 'Punkte in Teamfarbe:',
    btn_mute: 'Ton:',
    btn_language: 'Sprache:',
    state_on: 'on',
    state_off: 'off',
    btn_match_settings: 'Spieleinstellungen',
    btn_reset_app: 'App zurücksetzen',
    btn_quit: 'App schließen',
    btn_close_menu: 'Menü schließen',

    aria_about_baskin_dialog: 'Was ist Baskin',
    about_baskin_title: 'Was ist Baskin',
    about_baskin_text: 'Baskin ist eine auf Basketball aufbauende Sportart, die von Grund auf inklusiv gestaltet ist: Ihr Regelwerk sieht die gleichzeitige Teilnahme aller Athletinnen und Athleten ohne Einteilung in Kategorien vor, dank eines Systems aus Rollen auf dem Spielfeld \u2014 Sportlerinnen und Sportler beiderlei Geschlechts, mit und ohne Behinderung, einschließlich körperlicher und/oder kognitiver Behinderungen, spielen gemeinsam auf demselben Feld dasselbe Spiel. Das Baskin-Regelwerk ist geistiges Eigentum der <em>Associazione Baskin</em>, und die Meisterschaften in Italien werden von <em>EISI - Ente Italiano Sport Inclusivi</em> organisiert, einem vom <em>Italienischen Paralympischen Komitee</em> anerkannten paralympischen Förderverband.',
    logos_disclaimer: 'Die Logos „EISI“ und „Baskin“ sind eingetragene Marken von Ente Italiano Sport Inclusivi bzw. Associazione Baskin.',

    aria_guide_dialog: 'Bedienungsanleitung',
    guide_main_title: '🏟️ Hauptbildschirm',
    guide_main_body: '<ul>' +
      '<li><strong>▶️ / ⏸️</strong> startet oder stoppt die Uhr (auch mit der Leertaste).</li>' +
      '<li>Nach Ablauf der Zeit erscheint <strong>⏭ Nächstes Viertel</strong>: nach Bestätigung geht es ein Viertel weiter und die Uhr wird auf die volle Zeit zurückgesetzt.</li>' +
      '<li><strong>✏️</strong> öffnet die Einstellungen/Korrekturen. <strong>⋯</strong> öffnet dieses Menü.</li>' +
      '<li><strong>+1 / +2 / +3</strong> erhöhen die Punkte des linken bzw. rechten Teams.</li>' +
      '<li>Tippe auf die <strong>Auszeit-Anzeige</strong>, um eine weitere zu aktivieren; sind alle aktiv, setzt der nächste Tipp sie zurück.</li>' +
      '<li>Die <strong>Foul</strong>-Tasten erscheinen nur, wenn die <em>Foulzählung</em> in den Einstellungen aktiv ist.</li>' +
      '<li>Unten rechts: <strong>📣 Hupe</strong> und <strong>Pfiff</strong>, um die Töne manuell abzuspielen.</li>' +
      '</ul>',
    guide_edit_title: '⚙️ Einstellungen / Korrekturen (✏️)',
    guide_edit_body: '<ul>' +
      '<li>Die Uhr wird beim Öffnen dieses Bildschirms <strong>automatisch angehalten</strong>.</li>' +
      '<li><strong>✔️</strong> speichert die Änderungen und kehrt zum Spielmodus zurück.</li>' +
      '<li>Tippe auf die <strong>Zeit</strong> oder das <strong>Viertel</strong> (gestrichelte Felder), um die jeweiligen Auswahlräder zu öffnen.</li>' +
      '<li>Tippe auf einen <strong>Teamnamen</strong>, um ihn zu ändern; darunter legt eine Farbreihe die Schriftfarbe fest.</li>' +
      '<li><strong>−1 / −2 / −3</strong> verringern die Punkte.</li>' +
      '<li>Unten links setzt <strong>Zurücksetzen</strong> (rot) das Spiel nach Bestätigung zurück.</li>' +
      '</ul>',
    guide_settings_title: '🏀 Spieleinstellungen (über das Menü ⋯)',
    guide_settings_body: '<ul>' +
      '<li><strong>Modus</strong>: Baskin (Standardwerte) oder Anpassen (alle Felder änderbar).</li>' +
      '<li><strong>Auszeit-Logik</strong>: Baskin (Übertrag) oder Basket (Kontingent pro Halbzeit).</li>' +
      '<li><strong>Bonus-Modus</strong>: letzte 2′ (Baskin), nach N Fouls (Basket) oder keiner.</li>' +
      '<li>Dauer von Viertel/Verlängerung, Anzahl der Viertel, Auszeiten, Foulgrenze, automatische Hupe und automatischer Pfiff.</li>' +
      '<li><strong>BaskinCam-Streaming</strong>: Übertragung des Spielstands an ein Begleitgerät im lokalen Netzwerk.</li>' +
      '<li><strong>App zurücksetzen</strong>: löscht alles und stellt die Baskin-Standardeinstellungen wieder her.</li>' +
      '</ul>',
    guide_possession_title: '🔄 Ballbesitz und Bonus',
    guide_possession_body: '<ul>' +
      '<li>Die <strong>Ballbesitzpfeile</strong>: Tippen auf einen aktiviert diesen und deaktiviert den anderen.</li>' +
      '<li>Der <strong>Bonus</strong> wird durch einen Punkt pro Team neben der Beschriftung „Fouls“ angezeigt.</li>' +
      '</ul>',
    guide_language_title: '🌐 Sprache',
    guide_language_body: 'Die App ist auf Italienisch, Englisch, Französisch, Spanisch und Deutsch verfügbar. Beim ersten Start wird die Sprache automatisch vom Gerät erkannt; über die Flaggen im Menü ⋯ lässt sich jederzeit eine bestimmte Sprache wählen. Wird die App mit dem Parameter <code>?lang=</code> in der Adresse geöffnet (z. B. <code>?lang=de</code>), gilt diese Sprache nur für diese Öffnung.',
    guide_autosave_title: '💾 Automatisches Speichern',
    guide_autosave_body: 'Der Spielstand wird nach jeder Aktion gespeichert, auch wenn die App in den Hintergrund wechselt oder unerwartet geschlossen wird: Beim erneuten Öffnen geht es genau dort weiter, wo du aufgehört hast (die Uhr steht dabei sicherheitshalber still).',
    close: 'Schließen',

    aria_match_settings_dialog: 'Spieleinstellungen',
    match_settings_title: 'Spieleinstellungen',
    preset_baskin: 'Baskin',
    preset_custom: 'Anpassen',
    match_params_title: 'Spielparameter',
    field_minutes: 'Viertellänge (Minuten)',
    field_periods: 'Anzahl der Viertel',
    field_overtime: 'Länge der Verlängerung (Minuten)',
    field_timeouts_half: 'Auszeiten pro Halbzeit (1./2.)',
    field_timeouts_ot: 'Auszeiten pro Verlängerung',
    field_timeout_mode: 'Auszeit-Logik',
    timeout_mode_baskin: 'Baskin (Übertrag)',
    timeout_mode_basket: 'Basket (Kontingent pro Halbzeit)',
    field_bonus_mode: 'Bonus-Modus',
    bonus_mode_last2: 'Letzte 2′ (Baskin)',
    bonus_mode_teamfouls: 'Nach N Fouls (Basket)',
    bonus_mode_off: 'Keiner',
    field_bonus: 'Fouls für den Bonus (Basket)',
    field_manual_fouls: 'Foulzählung',
    field_reset_fouls: 'Fouls in jedem Viertel zurücksetzen',
    field_possession: 'Wechselnde Ballbesitzpfeile',
    field_auto_whistle_timeout: 'Automatischer Pfiff bei nicht verfügbarer Auszeit',
    field_auto_horn: 'Automatische Hupe bei Zeitablauf',
    baskincam_title: 'BaskinCam-Streaming',
    field_baskincam_enable: 'Übertragung an BaskinCam aktivieren',
    field_baskincam_host: 'BaskinCam-Adresse (IP:Port)',
    save: 'Speichern',

    aria_time_editor_dialog: 'Zeit einstellen',
    time_editor_title: 'Zeit einstellen',
    rotor_min: 'Min',
    rotor_sec: 'Sek',
    rotor_dec: 'Zehntel',
    apply: 'Anwenden',
    full_time: 'Volle Zeit',
    aria_period_editor_dialog: 'Viertel einstellen',
    period_editor_title: 'Viertel einstellen',
    rotor_period: 'Viertel',

    aria_rotate_dialog: 'Gerät ins Querformat drehen',
    rotate_title: 'Gerät drehen',
    rotate_sub: 'Die Anzeigetafel funktioniert im Querformat',

    toast_sound_on: 'Ton an',
    toast_sound_off: 'Ton aus',
    toast_manual_fouls_on: 'Foulzählung aktiviert',
    toast_manual_fouls_off: 'Foulzählung deaktiviert',
    toast_score_color_on: 'Punkte in Teamfarbe',
    toast_score_color_off: 'Punkte in Grün',
    confirm_reset_app: 'App zurücksetzen: löscht Punkte, Fouls, Auszeiten, Ballbesitz, Teamnamen und stellt die Baskin-Standardeinstellungen wieder her. Fortfahren?',
    confirm_quit: 'App schließen?',
    lang_confirm_title: 'Sprache wechseln?',
    lang_confirm_text: 'Die App wird geschlossen; beim erneuten Öffnen ist sie auf {lang}.',
    lang_confirm_text_browser: 'Schließe die App und öffne sie erneut, um den Wechsel abzuschließen: danach ist sie auf {lang}.',
    lang_confirm_yes: 'Bestätigen',
    meta_description: 'Anzeigetafel für Baskin: Zeit, Punkte, Auszeiten und Bonus. Funktioniert offline.'
  }
};

/* rileva la lingua di sistema tra quelle supportate, default 'it' */
function i18nDetectSystemLang(){
  try{
    const cands = (navigator.languages && navigator.languages.length) ? navigator.languages : [navigator.language];
    for(const c of cands){
      if(!c) continue;
      const base = c.slice(0,2).toLowerCase();
      if(I18N_SUPPORTED.includes(base)) return base;
    }
  }catch(_){}
  return 'en';
}

/* Override da URL: ?lang=xx forza la lingua per questa sessione/apertura,
   senza toccare la preferenza salvata. Utile per link diretti e per lo
   schermo Cast (?display=1&lang=de). Valori non supportati sono ignorati. */
function i18nUrlLang(){
  try{
    const v = new URLSearchParams(location.search).get('lang');
    if(!v) return null;
    const base = v.slice(0,2).toLowerCase();
    return I18N_SUPPORTED.includes(base) ? base : null;
  }catch(_){ return null; }
}

function i18nGetPref(){
  try{ return localStorage.getItem(I18N_LANG_KEY) || 'system'; }catch(_){ return 'system'; }
}
function i18nSetPref(value){
  try{ localStorage.setItem(I18N_LANG_KEY, value); }catch(_){}
}
function i18nGetLang(){
  const forced = i18nUrlLang();       // priorità massima: parametro URL
  if(forced) return forced;
  const pref = i18nGetPref();
  if(pref !== 'system' && I18N_SUPPORTED.includes(pref)) return pref;
  return i18nDetectSystemLang();
}

/* sostituzione segnaposto {chiave} nella stringa tradotta */
function i18nFormat(str, vars){
  if(!vars) return str;
  return str.replace(/\{(\w+)\}/g, (m, k)=> (k in vars) ? vars[k] : m);
}

/* t(key, vars): stringa tradotta nella lingua corrente, con fallback IT */
function t(key, vars){
  const lang = i18nGetLang();
  const dict = I18N_DICT[lang] || I18N_DICT.it;
  const str = (key in dict) ? dict[key] : (I18N_DICT.it[key] !== undefined ? I18N_DICT.it[key] : key);
  return i18nFormat(str, vars);
}

/* come t(), ma per una lingua specifica indipendente da quella attiva
   (es. per anticipare un messaggio nella lingua a cui si sta per passare) */
function tFor(lang, key, vars){
  const dict = I18N_DICT[lang] || I18N_DICT.it;
  const str = (key in dict) ? dict[key] : (I18N_DICT.it[key] !== undefined ? I18N_DICT.it[key] : key);
  return i18nFormat(str, vars);
}

/* applica le traduzioni a tutti gli elementi con attributi data-i18n-* nel DOM */
function applyI18n(){
  const lang = i18nGetLang();
  document.documentElement.lang = lang;

  document.querySelectorAll('[data-i18n]').forEach(el=>{
    el.innerHTML = t(el.getAttribute('data-i18n'));
  });
  document.querySelectorAll('[data-i18n-aria]').forEach(el=>{
    const key = el.getAttribute('data-i18n-aria');
    const teamN = el.getAttribute('data-i18n-team');
    const vars = teamN ? { team: t('default_team_name', { n: teamN }) } : undefined;
    el.setAttribute('aria-label', t(key, vars));
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el=>{
    el.setAttribute('placeholder', t(el.getAttribute('data-i18n-placeholder')));
  });

  const desc = document.querySelector('meta[name="description"]');
  if(desc) desc.setAttribute('content', t('meta_description'));
}

window.I18N = {
  t, tFor, applyI18n,
  getLang: i18nGetLang,
  getPref: i18nGetPref,
  setPref: i18nSetPref,
  urlLang: i18nUrlLang,
  detectSystem: i18nDetectSystemLang,
  supported: I18N_SUPPORTED
};
