import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const insights = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/insights' }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    author: z.string().default('John Mark Rankins'),
    description: z.string().optional(),
    category: z.string().optional(),
    image: z.string().optional(),
  }),
});

export const collections = { insights };
