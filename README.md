WAGA — Workshop d'Algèbre et Géométrie Abidjan 2026
===================================================

Ce dépôt contient le site public du **WAGA** (Workshop d'Algèbre et Géométrie — Abidjan, 09–10 janvier 2026, Université Félix Houphouët-Boigny, Salle 206).

**🌐 Site en ligne :** [https://bkablam11.github.io/waga.ci](https://bkablam11.github.io/waga.ci)

---

## ✅ Fonctionnalités complétées

### Pages principales
- **index.html** — Page d'accueil : présentation du séminaire régulier (mercredi 16h00, UFR Maths-Infos, coordinateur M. KOUAKOU K. Mathias)
- **waga2026.html** — Présentation complète du workshop 2026 avec dates, programme détaillé, communicateurs, countdown interactif et lien vers stream YouTube en direct
- **waga2024.html** — Rétrospective du workshop 2024 avec galerie photo interactive (10 images), lightbox accessible au clavier
- **annuaire.html** — Répertoire complet des algébristes (10 fiches AMACI) avec photos intégrées et publications (3 par chercheur)
- **contact.html** — Page de contact
- **wireframe.html** — Maquette de structure du site

### Interactivité & Médias
- **Countdown timer** stylisé (mis en place pour le 09 janvier 2026)
- **Galerie photo interactive** (WAGA 2024) avec hover effects et lightbox modal (click/Enter/Space pour ouvrir, Esc pour fermer, navigation au clavier)
- **Embed YouTube direct** (stream live du workshop 2026 avec paramètre start=164s)
- **Formulaire de contact** (HTML/JavaScript côté client)

### Données & Contenu
- **Annuaire AMACI enrichi** : 10 fiches complètes (nom, grade, fonction, spécialités, biographie, 3 publications par chercheur avec liens Google Scholar/ResearchGate)
- **Communicateurs WAGA 2026** : liste finale validée avec noms, titres, affiliations
- **Images intégrées** :
  - 7 photos réelles dans l'annuaire (1, 2, 4, 6, 7, 8, 10.jpeg)
  - 3 placeholders SVG pour fiches manquantes (Kamano, Abalo, Kouadio)
  - 10 images galerie pour WAGA 2024

### Design & Accessibilité
- **En-têtes uniformisés** sur toutes les pages (logo à gauche, navigation flexbox à droite)
- **Layout responsive flexbox** : annuaire avec images à gauche (150px) et texte à droite (flex: 1)
- **Navigation cohérente** : Accueil, Annuaire, Waga 2024, Waga 2026
- **CSS personnalisé** (waga.css) avec masquage du menu legacy (display: none)
- **Accessibilité clavier** : lightbox, countdown, navigation et galerie

### Infrastructure
- **Structure de dossiers** organisée : `/assets/css`, `/assets/js`, `/assets/images`, `/assets/sass`
- **Stylesheets** : main.css (template base), waga.css (personnalisations)
- **JavaScript** : waga.js avec countdown, lightbox, utilitaires

---

## ⏳ À faire (En attente)

### Corrections & Améliorations
- [ ] **Résoudre YouTube embed Error 153** — Tester en environnement HTTP (serveur local ou déploiement) ; vérifier les paramètres d'embed et droits du propriétaire
- [ ] **Compléter biographies annuaire** — Enrichir les descriptions (actuellement brèves) avec plus de contexte académique
- [ ] **Homonymie publications** — Verifier les articles pour Assane, Kamano, Abalo, Kouadio (recherches Google Scholar pourraient être ambiguës)
- [ ] **Ajouter ORCID** — Inclure les liens ORCID pour les chercheurs disposant d'un profil

### Contenu client
- [ ] **Formulaire contact fonctionnel** — Brancher à Formspree, Netlify Forms ou backend maison (actuellement JS côté client uniquement)
- [ ] **Images manquantes annuaire** — Fournir photos réelles pour Kamano, Abalo, Kouadio (actuellement SVG placeholders)
- [ ] **Liens Google Drive** — Remplacer les placeholders par les URLs réels des exposés (une par communicateur)
- [ ] **Contact coordinateurs** — Ajouter emails et téléphones des dirigeants dans contact.html (si accord)

### Optimisations
- [ ] **Tests responsif** — Valider l'affichage sur mobile (< 768px)
- [ ] **Performance** — Optimiser tailles images, minifier CSS/JS
- [ ] **SEO** — Ajouter meta descriptions, sitemap, robots.txt

### Documentation
- [ ] **Procédure déploiement** — Instructions pour GitHub Pages / Netlify
- [ ] **Guide contribution** — Si repos sera partagé avec d'autres éditeurs

---

## 🚀 Démarrage local

```bash
# Option 1 : Serveur Python
cd "g:/Mon Drive/TEXMAKER_DOCUMENT/TEX/Dr Brou/Workshop_28_nov_2025_WAGA/waga.ci"
python -m http.server 8000
# Ouvrir http://localhost:8000

# Option 2 : Live Server VS Code
# Installer l'extension "Live Server" et ouvrir index.html
```

---

## 📂 Structure du projet

```
waga.ci/
├── index.html              # Accueil — Séminaire régulier
├── waga2026.html          # WAGA 2026 — Présentation complète
├── waga2024.html          # WAGA 2024 — Rétrospective + galerie
├── annuaire.html          # Répertoire AMACI (10 fiches)
├── contact.html           # Contact
├── wireframe.html         # Maquette
├── README.md              # Ce fichier
├── assets/
│   ├── css/
│   │   ├── main.css       # Template base (Editorial by HTML5 UP)
│   │   ├── waga.css       # Personnalisations WAGA
│   │   ├── fontawesome-all.min.css
│   ├── js/
│   │   ├── waga.js        # Countdown, lightbox, utilitaires
│   │   ├── jquery.min.js
│   │   ├── main.js
│   │   ├── util.js
│   │   ├── breakpoints.min.js
│   │   ├── browser.min.js
│   ├── images/
│   │   ├── 1–10.jpeg      # Galerie WAGA 2024 + annuaire
│   ├── sass/
│   │   ├── *.scss         # Sources SASS (optionnel)
│   ├── webfonts/          # Icônes FontAwesome
```

---

## 📝 Notes

- **Données AMACI** : Extraites du PDF AMACI 2025, enrichies via Google Scholar search
- **Pas de backend** : Site statique HTML/CSS/JS pur ; formulaires côté client uniquement (à brancher si besoin)
- **Compatibilité** : Testé sur navigateurs modernes (Chrome, Firefox, Safari)
- **Licence** : Template original Editorial par HTML5 UP (CCA 3.0) ; contenu WAGA selon vos directives

---

## 📞 Contact

Pour des mises à jour ou modifications, veuillez contacter le coordinateur du séminaire :  
**M. KOUAKOU K. Mathias**  
(Détails complets dans `/contact.html`)

---

*Dernière mise à jour : 8 janvier 2026*