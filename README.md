# Website

Site Vite + Tailwind pour la refonte premium de JGM Advisory.

## Installation

```powershell
npm install
```

## Lancer en local

```powershell
npm run dev
```

Vite ouvre le site sur `http://127.0.0.1:5173` par defaut.

## Build static

```powershell
npm run build
```

Le site statique est genere dans `dist/`.

## Structure

- `index.html` : shell Vite.
- `src/content.js` : contenu editable du site.
- `src/main.js` : rendu et interactions.
- `src/styles.css` : Tailwind et styles de base.
- `public/assets/` : assets statiques.
