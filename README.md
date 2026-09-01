# ritchey.io

A small foundry built with [Astro](https://astro.build/) and deployed
with GitHub Pages.

## Run locally

```sh
npm install
npm run dev
```

## Add an article

Create a Markdown file in `src/content/articles/`:

```md
---
title: "My article"
description: "A short summary for listing pages."
pubDate: 2026-08-28
tags:
  - notes
---

Write the article here.
```

`src/content/articles/my-article.md` publishes at `/articles/my-article/`.

## Add root-level pages

Create a Markdown file under `src/content/pages/`:

```md
---
title: "My page"
description: "A short summary for listing pages."
section: "Tools"
tags:
  - demo
order: 10
---

Write the page here.
```

Nested folders become nested URLs. For example,
`src/content/pages/tools/tiny-tools.md` publishes at `/tools/tiny-tools/`.

## Deploy

The GitHub Actions workflow in `.github/workflows/deploy.yml` builds the site and
publishes `dist/` to GitHub Pages whenever `main` is pushed.

In the repository settings on GitHub, set Pages to use **GitHub Actions** as the
source. The `public/CNAME` file is set to `ritchey.io` for the custom domain.
