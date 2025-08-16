import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: "data", // or "content" if you prefer MD/MDX
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    thumb: z.object({
      src: z.string(),
      alt: z.string()
    }),
    slug: z.string(),
    isFeatured: z.boolean(),
    order: z.number(),
    date: z.string(),
    hero: z.object({
      heading: z.object({ bold: z.string(), light: z.string() }),
      description: z.string(),
      metadata: z.array(z.string()),
      cover: image(),
      prev: z.string(),
      next: z.string()
    }),
    sections: z.array(
      z.union([
        z.object({
          sectionType: z.string(),
          heading: z.object({ bold: z.string(), light: z.string() }),
          text: z.string(),
          visual: z.object({
            kind: z.string(),
            caption: z.string(),
            src: image(),
            alt: z.string()
          })
        }),
        z.object({
          sectionType: z.string(),
          heading: z.object({ bold: z.string(), light: z.string() }),
          text: z.string(),
          visual: z.object({
            kind: z.string(),
            caption: z.string(),
            images: z.array(z.object({ src: image(), alt: z.string() }))
          })
        }),
        z.object({
          sectionType: z.string(),
          visual: z.object({
            kind: z.string(),
            caption: z.string(),
            images: z.array(z.object({ src: image(), alt: z.string() }))
          })
        }),
        z.object({
          sectionType: z.string(),
          heading: z.object({ bold: z.string(), light: z.string() }),
          text: z.string(),
          visual: z.object({
            kind: z.string(),
            caption: z.string(),
            before: z.object({ src: image(), alt: z.string() }),
            after: z.object({ src: image(), alt: z.string() })
          })
        })
      ])
    )
  })
});


export const collections = { projects };