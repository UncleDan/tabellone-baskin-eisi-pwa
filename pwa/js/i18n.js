/* =====================================================================
   Tabellone Baskin EISI (PWA) - internazionalizzazione (it / en / fr)
   Deve essere caricato PRIMA di app.js: espone window.I18N (funzioni
   t/getLang/setLang/applyI18n) usate sia dall'HTML (data-i18n-*) sia
   dal codice applicativo (toast, etichette dinamiche).
   ===================================================================== */
'use strict';

const I18N_LANG_KEY = 'tabellone-baskin-eisi:lang'; // 'system' | 'it' | 'en' | 'fr'
const I18N_SUPPORTED = ['it', 'en', 'fr'];

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
    guide_language_body: 'L\'app è disponibile in italiano, inglese e francese. Alla prima apertura la lingua viene rilevata automaticamente da quella del dispositivo; le bandierine nel menu ⋯ permettono di sceglierne una specifica in qualsiasi momento.',
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
    guide_language_body: 'The app is available in Italian, English and French. On first launch, the language is detected automatically from your device; the flags in the ⋯ menu let you choose a specific one at any time.',
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
    guide_language_body: 'L\'application est disponible en italien, anglais et français. Au premier lancement, la langue est détectée automatiquement à partir de celle de l\'appareil ; les drapeaux dans le menu ⋯ permettent d\'en choisir une spécifique à tout moment.',
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
    meta_description: 'Tableau de marque pour le Baskin : temps, points, temps morts et bonus. Fonctionne hors ligne.'
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

function i18nGetPref(){
  try{ return localStorage.getItem(I18N_LANG_KEY) || 'system'; }catch(_){ return 'system'; }
}
function i18nSetPref(value){
  try{ localStorage.setItem(I18N_LANG_KEY, value); }catch(_){}
}
function i18nGetLang(){
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
  t, applyI18n,
  getLang: i18nGetLang,
  getPref: i18nGetPref,
  setPref: i18nSetPref,
  supported: I18N_SUPPORTED
};
