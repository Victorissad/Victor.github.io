# Portfolio BTS SIO E4 — Victor Issad

Portfolio professionnel 3D interactif créé dans le cadre de la préparation à l'épreuve E4 du BTS SIO (Services Informatiques aux Organisations) option SLAM.

![Portfolio Preview](.github/README_ASSETS/3d-portfolio.png)

## 📌 À propos

Ce portfolio présente mes compétences et réalisations professionnelles acquises durant ma formation BTS SIO SLAM à 3IFA et mon alternance chez MTB111 by Creative.

**Étudiant** : Victor Issad
**Formation** : BTS SIO SLAM (2023-2025)
**Entreprise** : MTB111 by Creative
**Épreuve** : E4 - Support et mise à disposition de services informatiques

## 🎯 Objectifs du Portfolio

Ce portfolio répond aux exigences de l'épreuve E4 en présentant :

1. **Tableau de synthèse** : Correspondance entre réalisations et compétences du Bloc 1
2. **8 Réalisations professionnelles** détaillées (entreprise + académique)
3. **Parcours de professionnalisation** : Formation et expérience
4. **Compétences BTS SIO** : Les 6 compétences du Bloc 1 (B1.1 à B1.6)
5. **Veille technologique** : Chatbots et IA conversationnelle
6. **CV professionnel**

## 📂 Structure du Portfolio

### Navigation (9 sections)

1. **Accueil** - Page d'accueil avec animation 3D
2. **À propos** - Présentation personnelle et objectifs
3. **Parcours** - Timeline formation et expérience professionnelle
4. **Compétences** - Les 6 compétences du Bloc 1 BTS SIO
5. **Réalisations** - 8 projets professionnels détaillés
6. **Veille Technologique** - Chatbots et IA
7. **Épreuve E4** - Tableau de synthèse réalisations ↔ compétences
8. **CV** - Curriculum Vitae
9. **Contact** - Formulaire de contact

## 🎓 Compétences BTS SIO Bloc 1

Toutes les compétences du référentiel sont couvertes :

- **B1.1** - Gérer le patrimoine informatique
- **B1.2** - Répondre aux incidents et demandes d'assistance
- **B1.3** - Développer la présence en ligne de l'organisation
- **B1.4** - Travailler en mode projet
- **B1.5** - Mettre à disposition un service informatique
- **B1.6** - Organiser son développement professionnel

## 💼 Réalisations Professionnelles

### Chez MTB111 by Creative

1. **Structur'All - Reverse Engineering** (B1.1, B1.4, B1.6)
2. **Comparateur de Fichiers Excel** (B1.2, B1.4, B1.5)
3. **Analyseur de Code Java** (B1.1, B1.4, B1.6)
4. **Refactoring Système de Logging** (B1.1, B1.2, B1.4)

### Projets Académiques (3IFA)

5. **RFTG Luigi** - Application Android (B1.3, B1.4, B1.5)
6. **RFTG Toad** - API REST Spring Boot (B1.3, B1.4, B1.5)
7. **RFTG Mario** - Interface Laravel (B1.3, B1.4, B1.5)
8. **Portfolio 3D** - React + Three.js (B1.3, B1.4, B1.6)

## 🔍 Veille Technologique

**Thème** : Les Chatbots et l'Intelligence Artificielle Conversationnelle

- Problématique définie
- Méthodologie de veille documentée
- 5+ sources techniques analysées
- Synthèse des tendances 2024-2025
- Perspectives d'évolution
- Outils utilisés (Feedly, Notion, etc.)

## 🛠️ Technologies Utilisées

**Frontend**
- React 18
- TypeScript
- Three.js (animations 3D)
- Tailwind CSS
- Framer Motion

**Outils**
- Vite (build tool)
- ESLint + Prettier
- Git / GitHub

**Déploiement**
- GitHub Pages

## 🚀 Installation et Démarrage

### Prérequis

- Node.js (v16+)
- npm ou yarn
- Git

### Installation

```bash
# Cloner le repository
git clone https://github.com/Victorissad/Victor.github.io.git
cd Victor.github.io

# Installer les dépendances
npm install

# Variables d'environnement (optionnel pour le formulaire de contact)
# Créer un fichier .env avec :
VITE_EMAILJS_SERVICE_ID=votre_service_id
VITE_EMAILJS_TEMPLATE_ID=votre_template_id
VITE_EMAIL_JS_ACCESS_TOKEN=votre_access_token

# Lancer le serveur de développement
npm run dev
```

Le portfolio sera accessible sur [http://localhost:5173](http://localhost:5173)

### Scripts Disponibles

| Script | Description |
|--------|-------------|
| `npm run dev` | Démarre le serveur de développement |
| `npm run build` | Build de production |
| `npm run preview` | Preview du build de production |
| `npm run lint` | Vérification ESLint |
| `npm run ts:check` | Vérification TypeScript |

## 📦 Build de Production

```bash
# Compiler pour la production
npm run build

# Le dossier dist/ contient les fichiers optimisés
```

## 📱 Déploiement

Le portfolio est déployé automatiquement sur GitHub Pages à chaque push sur la branche `main`.

URL en ligne : [https://victorissad.github.io](https://victorissad.github.io)

## 📋 Checklist E4

- [x] Tableau de synthèse complet (8 réalisations × 6 compétences)
- [x] 8 Réalisations professionnelles détaillées
- [x] Toutes les compétences B1.1 à B1.6 couvertes
- [x] Parcours de professionnalisation (timeline)
- [x] Veille technologique avec méthodologie
- [x] CV professionnel
- [x] Formulaire de contact
- [x] Design responsive (mobile, tablette, desktop)
- [x] Navigation claire (9 sections)
- [x] Contenu en français
- [x] Animations professionnelles mais sobres

## 📄 Structure des Fichiers

```
src/
├── assets/          # Images, icônes, modèles 3D
├── components/      # Composants React
│   ├── atoms/       # Composants réutilisables (Header)
│   ├── canvas/      # Composants 3D (Three.js)
│   ├── layout/      # Layout (Navbar, Loader)
│   └── sections/    # Sections de pages
│       ├── Hero.tsx (Accueil)
│       ├── About.tsx (À propos)
│       ├── Experience.tsx (Parcours)
│       ├── Tech.tsx (Compétences)
│       ├── Works.tsx (Réalisations)
│       ├── Feedbacks.tsx (Attestations)
│       ├── Contact.tsx
│       └── ... (sections E4)
├── constants/       # Configuration et données
│   ├── config.ts    # Textes et configuration
│   └── index.ts     # Données (réalisations, compétences, etc.)
├── hoc/            # Higher-Order Components
├── types/          # Définitions TypeScript
├── utils/          # Utilitaires (animations)
└── App.tsx         # Application principale
```

## 🎨 Design

- **Palette de couleurs** : Bleu/violet profond (professionnel)
- **Typographie** : Inter, sans-serif
- **Style** : Moderne, jeune mais professionnel
- **Animations** : Subtiles, pas flashy
- **Responsive** : Mobile-first design

## 📞 Contact

- **Email** : victor.issad@example.com
- **LinkedIn** : [Victor Issad](https://linkedin.com/in/victorissad)
- **GitHub** : [@Victorissad](https://github.com/Victorissad)
- **Portfolio** : [victorissad.github.io](https://victorissad.github.io)

## 📜 Licence

MIT License - Copyright (c) 2026 Victor Issad

## 🙏 Remerciements

Ce portfolio a été réalisé avec :

- **React** & **TypeScript** - Framework et typage
- **Three.js** - Animations 3D
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Vite** - Build tool
- **EmailJS** - Formulaire de contact

---

**Note pour le jury E4** : Ce portfolio démontre l'ensemble des compétences du Bloc 1 à travers 8 réalisations professionnelles réelles effectuées en entreprise (MTB111) et en formation (3IFA). Le tableau de synthèse permet de visualiser clairement la correspondance entre chaque réalisation et les compétences du référentiel BTS SIO.
