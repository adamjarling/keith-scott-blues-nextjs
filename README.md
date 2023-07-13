# Caseymurtaugh.art

This is a NextJS app for https://caseymurtaugh.art

## Masonry Galleries

This creates automated Masonry style Lightbox image galleries from a directory of images (and optional `manifest.ts` file providing more info to plug into the Lightbox display). It outputs the gallery as optimized `next/image` components.

To automate this process, we need to pull image metadata from images (dimensions). There's a helper script to do this:

```bash
npm run image-meta [PAGE_COMPONENT_DIRECTORY] [SOURCE_DIRECTORY]
```

This will generate a JSON file `images-meta.json` which will live in the `[PAGE_COMPONENT_DIRECTORY]` folder and which the component will use to grab images. This is a bit of a workaround, as running this script at build time (processing a lot of images) overloads the AWS lambda limit > 50MB, and the Vercel build fails.

## CV

Note for the PDF CV to render, `react-pdf` must be pinned to version `v6.2.2`.
