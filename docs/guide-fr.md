# 📋 Guide d'utilisation — Tabellone Baskin EISI (PWA)

*[Versione italiana](guida-it.md) · [English version](guide-en.md) · [Versión española](guia-es.md)*

Ce guide explique comment utiliser le tableau de marque pendant un match de Baskin. Pour l'installation, la publication et les détails techniques, voir le [README](../README.md).

---

## 🏟️ Écran principal (mode match)

C'est l'écran utilisé **pendant le match**.

- **▶️ / ⏸️** — démarre ou arrête le chronomètre (fonctionne aussi avec la barre d'espace).
- Quand le **temps est écoulé** (après la sirène automatique), un bouton **⏭ Période suivante** apparaît : après confirmation, il passe à la période suivante et remet le chronomètre à temps plein. À la fin du 4e quart-temps et de chaque prolongation (`TS1`, `TS2`…), il n'est proposé **qu'en cas d'égalité**.
- **✏️** ouvre les réglages/corrections. **⋯** ouvre le menu avec la version, les mises à jour et d'autres options.
- **+1 / +2 / +3** à gauche et à droite augmentent le score de l'Équipe 1 et de l'Équipe 2.
- Touchez la **pastille des temps morts** : elle allume un point de plus ; une fois tous allumés, l'appui suivant les réinitialise.
- Les boutons de **fautes** (**+** / **−**) n'apparaissent que si le *Comptage des fautes* est activé dans les réglages du match. Ils sont désactivés par défaut : seuls le libellé « Fautes » et les points de bonus restent affichés.
- En bas à droite : **📣 sirène** et **sifflet**, pour jouer les sons respectifs manuellement.

## ⚙️ Écran réglages / corrections (✏️)

Utilisez cet écran pour **corriger une erreur** ou préparer le match avant qu'il commence.

- Le chronomètre se **met automatiquement en pause** à l'entrée sur cet écran.
- **✔️** enregistre les modifications et revient au mode match.
- Touchez le **temps** (cadre en pointillés) pour ouvrir les molettes minutes / secondes / dixièmes.
- Touchez la **période** (cadre en pointillés) pour ouvrir la molette de sélection : `1`…`4`, puis `TS1`…`TS9` (prolongations).
- Touchez le **nom d'une équipe** (cadre en pointillés) : un clavier apparaît pour le modifier. Sous le nom, une rangée de couleurs définit la couleur du texte.
- **−1 / −2 / −3** sur les côtés diminuent le score.
- En bas à gauche, le bouton **Réinitialiser** (rouge) réinitialise le match après confirmation : scores, fautes, temps morts, temps et période reviennent à zéro, tandis que les réglages et les noms d'équipe sont conservés.

## 🏀 Réglages du match (depuis le menu ⋯)

- **Mode** : **Baskin** (valeurs standard) ou **Personnaliser** (chaque champ est modifiable).
- **Logique des temps morts** : *Baskin* (1 par quart-temps, report) ou *Basket* (quota par mi-temps, 2 en 1re mi-temps et 3 en 2e).
- **Mode bonus** : *Dernières 2′ (Baskin)*, *Après N fautes (Basket)*, ou *Aucun*.
- Durée de la période et des prolongations, nombre de périodes, temps morts, seuil de fautes pour le bonus.
- **Coup de sifflet automatique si temps mort indisponible** et **sirène automatique en fin de temps** : toujours personnalisables, même en mode Baskin.
- **Diffusion BaskinCam** : envoi automatique de l'état du match vers un appareil compagnon sur le réseau local.
- **Réinitialiser l'application** : efface tout et restaure les réglages Baskin par défaut.

## 🔄 Possession et bonus

- Les **flèches de possession** (au-dessus des fautes) : toucher l'une l'allume et éteint l'autre.
- Le **bonus** est indiqué par un point par équipe à côté du libellé « Fautes ».

## 🌐 Langue

L'application est disponible en **italien**, **anglais**, **français** et **espagnol**. Au premier lancement, la langue est détectée automatiquement à partir de celle de l'appareil (si aucune des quatre n'est prise en charge, elle démarre en anglais) ; les **drapeaux** 🌐🇮🇹🇬🇧🇫🇷🇪🇸 dans le menu ⋯ permettent d'en choisir une spécifique à tout moment.

Le **nom des équipes**, s'il n'est pas personnalisé, suit automatiquement la langue choisie (ex. « Squadra 1 » devient « Team 1 » en anglais) ; un nom saisi manuellement reste inchangé en changeant de langue.

## 💾 Sauvegarde automatique

L'état du match est enregistré **après chaque action**, même si l'application passe en arrière-plan ou se ferme de manière inattendue : à la réouverture, vous reprenez exactement où vous en étiez (chronomètre en pause, par sécurité).

---

📄 Retour au [README](../README.md) · 🐞 [Signaler un problème](https://github.com/UncleDan/tabellone-baskin-eisi-pwa/issues)
