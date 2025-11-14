WAGA — Workshop d'Algèbre et Géométrie
===================================

Ce dépôt contient le site public d'information pour le WAGA (Abidjan, 28–29 novembre 2025).
Le fichier README a été remplacé par ce résumé des actions effectuées et des améliorations à venir.

Actions effectuées (historique)
- 2025-11-14 : Inspection du projet et identification du contenu lié au workshop.
- Réécriture complète de `index.html` pour en faire la page d'information WAGA (présentation, objectifs, programme, participants, budget sommaire, contact public).
- Suppression/neutralisation des informations personnelles : numéros de téléphone et adresses e-mail individuelles ont été retirés du site public.
- Ajout d'une section `Communicateurs` listant les communicateurs retenus (noms, titres, affiliations).
- Ajout d'un bouton "Télécharger l'exposé" par communicateur (placeholders Google Drive à remplacer par des liens réels).
- Remplacement des pages template inutiles (`elements.html`, `generic.html`) par de petites pages archivées (contenu neutralisé) afin de garder le site propre.
- Neutralisation du fichier `LICENSE.txt` (mention d'archivage) pour indiquer que le dépôt contient désormais uniquement le site WAGA.
- Ajout d'un décompte (timer) visible et stylisé en rouge qui compte jusqu'au 28 novembre 2025.
- Ajustements CSS dans `assets/css/waga.css` pour améliorer l'apparence et la visibilité du compteur et des cartes des communicateurs.

Améliorations et tâches à venir (suggestions)
- Remplacer les liens Google Drive placeholder par les liens de partage réels pour chaque exposé (fournir les URL partagées).
- Automatiser la génération de la section `Communicateurs` à partir d'un fichier JSON (ex : `data/communicateurs.json`) pour faciliter les mises à jour.
- Rendre le formulaire d'inscription / contact fonctionnel (backend ou service tiers) et ajouter une politique de confidentialité simple.
- Vérifier et optimiser l'affichage mobile (tests sur différentes tailles d'écran) et ajuster les tailles du compteur si nécessaire.
- Ajouter un script de build (optionnel) pour générer des pages statiques propres à partir des sources SASS si vous préférez maintenir `sass/`.
- Sauvegarder et archiver les templates originaux (si besoin) hors du dépôt public ou dans une branche `archive`.

Notes de confidentialité
- Aucune donnée personnelle n'est affichée publiquement sur le site. Si vous souhaitez republier des contacts ou téléphones, fournissez explicitement l'accord des personnes concernées.

Si vous voulez que j'exécute l'une des améliorations listées (remplacer les liens Drive, automatiser la génération depuis JSON, brancher un petit backend pour inscriptions), dites laquelle et je m'en occupe.

— Liste générée automatiquement par les actions récentes du dépôt