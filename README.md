# NextLeads — Formulaire premium connecté à Google Sheets

Cette version garde le formulaire premium du site NextLeads.

Elle envoie les demandes en arrière-plan vers Google Forms, qui alimente automatiquement Google Sheets.

## Mapping Google Forms

```text
Nom → entry.2020656799
Société → entry.1420934706
Téléphone → entry.188096982
Email → entry.1506560305
Secteur recherché → entry.177023606
Zone géographique → entry.926475078
Volume souhaité → entry.778147516
Message → entry.139607335
```

## Fonctionnement

```text
Formulaire premium NextLeads
→ Google Forms formResponse
→ Google Sheets Suivi demandes NextLeads
```

## Déploiement

1. Upload les fichiers sur GitHub dans `nextleads-site`
2. Commit changes
3. Vercel redéploie automatiquement
4. Ouvre `https://nextleads.fr?v=5`

## Test

Remplis une demande test sur le site.
Une nouvelle ligne doit apparaître dans Google Sheets.
