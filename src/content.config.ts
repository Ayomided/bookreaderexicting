import { defineCollection, z } from "astro:content";

const stories = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    authors: z.array(z.string()).optional(),
    cover: z.string().optional(),
  }),
});

export const collections = {
  stories: stories,
};
