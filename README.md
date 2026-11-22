# Portfolio deployment

The React and Vite frontend is extracted into `client/` so Netlify can build it directly from the repository. The original ZIP is retained as the source archive.

`netlify.toml` defines the deployment settings:

- Base directory: `client`
- Build command: `npm ci --include=dev --no-audit --no-fund && npm run build`
- Publish directory: `dist` (relative to `client`)

Keep the base directory relative to the repository; do not use build-machine paths such as `/opt/build`. The build command explicitly installs locked dependencies, including Vite and its React plugin, before building. This also supports CLI deployments that do not run Netlify's automatic dependency installation step. The frontend's `public/_redirects` provides the single-page application fallback.

The contact form needs a separately deployed API configured through `VITE_API_URL`. The backend and database examples remain in the original ZIP; this deployment configuration publishes only the frontend.
