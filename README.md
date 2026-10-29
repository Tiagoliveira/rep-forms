# Rep Forms

An offline form holder. Pick a form, fill it in, then **Print / Save PDF**.
Nothing you type is stored anywhere. It disappears when you close the app.

## Hosting
A PWA has to be served over **HTTPS** (or `localhost`) before it can be installed and work offline.
These are static files, so any web server will do. For example:

- **Homelab (nginx/Caddy/Docker):** copy this folder into the web root. A quick Docker option:
  `docker run -d -p 8080:80 -v "$PWD":/usr/share/nginx/html:ro nginx:alpine`
  Then put it behind your HTTPS reverse proxy.
- **GitHub Pages / Netlify / Cloudflare Pages:** upload the folder. All of them are free and give you HTTPS.

Open the site once on the phone, then use "Add to Home screen" / "Install app".
From then on it opens fully offline.

## Updating
1. Change `forms.js` (or any other file).
2. Bump `VERSION` in `sw.js` (for example `v1.0.0` → `v1.1.0`).
3. Upload the files again.

When an installed copy is opened while online, it shows **"A new version is ready – Update now"**.
Nothing changes until the user taps Update. If they never tap it, they keep using the old version offline.

## Adding a form
Forms are plain data in `forms.js`. Copy an existing entry, give it a new `id`, and edit the labels.
You can link straight to a form by adding its id after a `#`, for example `…/#casework-notes`.
