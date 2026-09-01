---
title: "Hello, foundry"
description: "A first note about what this site is for and how it can grow."
pubDate: 2026-08-28
tags:
  - meta
  - foundry
---

This site is a place to keep small public things:

- notes that are too useful to leave in a private document
- tools and sketches that deserve a URL
- reference material that is easier to browse as pages than as scattered files

The bar should stay low. Publish the sketch, keep the useful parts, and let the
site grow by accretion.

## How to add an article

Create a new Markdown file in `src/content/articles/`.

```md
---
title: "My article title"
description: "A short summary for listing pages."
pubDate: 2026-08-28
tags:
  - notes
---

Write the article here.
```

The URL will follow the filename. For example, `src/content/articles/my-note.md`
becomes `/articles/my-note/`.
