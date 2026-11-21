# Open Library – rebuild (static site)

A static website with 5 pages: Home, Catalog, Services & Facilities, Library Guides (Infographics), and Gallery.
All content (names, addresses, journals, photos, logos) is **dummy data / placeholders**.

## Requirements
- [Node.js](https://nodejs.org/) version 18 or newer (includes `npm`).

## How to run
```bash
npm install        # install dependencies (only once)
npm run build      # build the website into the dist/ folder
npm run preview    # open http://localhost:8080 in your browser
```
Stop the preview with `Ctrl + C`.

> Note: don't open `dist/index.html` by double-clicking it — the CSS/images use root paths (`/assets/...`),
> so the site has to be served through a server (`npm run preview`, or any static hosting).

## Pages
| Path | Page |
|---|---|
| `/` | Home |
| `/home/catalog.html` | Catalog |
| `/home/servicesandfacilities.html` | Services & Facilities |
| `/home/infografis.html` | Library Guides |
| `/home/gallery.html` | Gallery |

## Folder structure
```
build.mjs          builds the HTML pages + copies assets into dist/
serve.mjs          small server for local preview
src/data.mjs       all dummy data (edit the content here)
src/layout.mjs     header, footer, floating buttons
src/pages/         content of each page
src/style.css      all styling (colours, fonts, phone/tablet layouts)
src/main.js        interactivity (slider, tabs, search, phone menu)
src/svg.mjs        placeholder images (covers, logos, gallery photos)
src/icons.mjs      icons
```

## Deploy
Upload the contents of the `dist/` folder (after `npm run build`) to any static hosting
(GitHub Pages, Netlify, Vercel, etc.).
