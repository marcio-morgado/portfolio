import { defineCollection, z } from "astro:content";

const HeadingSchema = z.object({
    bold: z.string(),
    light: z.string(),
});

const ImageSchema = (image) =>
    z.object({
        src: image(),
        alt: z.string(),
    });

const SectionSchema = (image) =>
    z.discriminatedUnion("sectionType", [
        // Single Image section
        z.object({
            sectionType: z.literal("singleImage"),
            sectionId: z.string(),
            heading: HeadingSchema.optional(),
            text: z.string().optional(),
            visual: z.object({
                kind: z.literal("single"),
                caption: z.string(),
                src: image(),
                alt: z.string(),
            }),
        }),

        // Gallery section
        z.object({
            sectionType: z.literal("gallery"),
            sectionId: z.string(),
            heading: HeadingSchema.optional(),
            text: z.string().optional(),
            visual: z.object({
                kind: z.literal("gallery"),
                caption: z.string(),
                images: z.array(ImageSchema(image)),
            }),
        }),

        // Before/After comparison section
        z.object({
            sectionType: z.literal("beforeAfter"),
            sectionId: z.string(),
            heading: HeadingSchema.optional(),
            text: z.string().optional(),
            visual: z.object({
                kind: z.literal("comparison"),
                caption: z.string(),
                before: ImageSchema(image),
                after: ImageSchema(image),
            }),
        }),
    ]);

const projects = defineCollection({
    type: "data",
    schema: ({ image }) =>
        z.object({
            shortTitle: z.string(),
            shortDesc: z.string(),
            thumb: ImageSchema(image),
            slug: z.string(),
            isFeatured: z.boolean(),
            order: z.number(),
            date: z.string(),
            hero: z.object({
                heading: HeadingSchema,
                description: z.string(),
                metadata: z.array(z.string()),
                cover: image(),
            }),
            sections: z.array(SectionSchema(image)),
        }),
});

export const collections = { projects };
