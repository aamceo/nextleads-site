# NextLeads — Version corrigée avec Google Forms intégré

Cette version corrige la section Contact : l'ancien formulaire mailto est supprimé et remplacé par le Google Form intégré.

Lien Google Form :
https://docs.google.com/forms/d/e/1FAIpQLSfL6ckgmY2Ex0lVJHoJmq6xIOSGKQ9RpDXP8JoAE8vuI7WTcQ/viewform?usp=header

## Fonctionnement

```text
Boutons du site
→ Section Contact
→ Google Form intégré
→ Google Sheets "Suivi demandes NextLeads"
```

## Déploiement

1. Upload tous les fichiers sur GitHub dans `nextleads-site`
2. Commit changes
3. Vercel redéploie automatiquement
4. Ouvre `https://nextleads.fr?v=3` pour forcer le rafraîchissement

## Installation locale

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```
