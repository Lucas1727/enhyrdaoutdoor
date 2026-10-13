# enhyrdaoutdoor

Enhydra Studio "coming soon" landing page (Vite + React + TypeScript, Bun).

```sh
bun install
bun run dev       # local dev server
bun run build     # type-check + production build to dist/
bun run preview   # serve dist/
bun run images    # regenerate public/images/* from DSCF4577.JPG (needs ImageMagick)
```

## Deploy

Every push to `main` builds and deploys to GitHub Pages via `.github/workflows/deploy.yml`
(also runnable manually from the Actions tab).

Custom apex domain DNS records (set at the registrar):

| Type  | Name  | Value |
|-------|-------|-------|
| A     | @     | 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153 |
| AAAA  | @     | 2606:50c0:8000::153, 2606:50c0:8001::153, 2606:50c0:8002::153, 2606:50c0:8003::153 |
| CNAME | www   | lucas1727.github.io |

Then set the domain under repo Settings → Pages → Custom domain and tick "Enforce HTTPS" once the certificate is issued.
