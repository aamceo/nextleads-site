# NextLeads — Version finale React

Version finale indépendante inspirée du rendu Base44 validé.

Cette version garde :
- le style clair premium Base44
- les visuels humains
- les cartes dashboard
- les sections commerciales NextLeads
- le prix à partir de 6 € / lead ciblé
- le pack test payant sur demande
- le formulaire de demande de devis

Cette version retire volontairement :
- le SDK Base44
- l'authentification Base44
- les pages login/register/reset password
- le plugin Base44

Objectif : permettre un déploiement gratuit sur GitHub + Vercel ou Netlify.

## Installation locale

```bash
npm install
npm run dev
```

## Build production

```bash
npm run build
```

## Déploiement Vercel

1. Crée un repository GitHub.
2. Upload tous les fichiers du dossier.
3. Connecte le repository à Vercel.
4. Framework : Vite.
5. Build command : `npm run build`.
6. Output directory : `dist`.

## Formulaire

Le formulaire ouvre un email pré-rempli vers `contact@nextleads.fr`.

Pour recevoir les demandes directement sans ouverture du client mail, connecte ensuite :
- Formspree
- Netlify Forms
- ou un backend personnalisé
