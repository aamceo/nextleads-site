# NextLeads — Version finale connectée Google Forms

Cette version connecte les demandes de devis au Google Form :

https://docs.google.com/forms/d/e/1FAIpQLSfL6ckgmY2Ex0lVJHoJmq6xIOSGKQ9RpDXP8JoAE8vuI7WTcQ/viewform?usp=header

## Fonctionnement

```text
Boutons du site
→ Section Contact
→ Google Form intégré
→ Google Sheets "Suivi demandes NextLeads"
```

Les demandes arrivent automatiquement dans Google Sheets via Google Forms.

## Déploiement

1. Upload les fichiers sur GitHub dans le repository `nextleads-site`
2. Commit changes
3. Vercel redéploie automatiquement

## Installation locale

```bash
npm install
npm run dev
```

## Build production

```bash
npm run build
```
