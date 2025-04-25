import { z } from "zod";

export const createItemSchema = z.object({
  body: z.object({
    name: z.string().min(1, "Name is required"),
    description: z.string().optional(),
  }),
});

export const updateItemSchema = z.object({
  body: z.object({
    name: z.string().min(1, "Name is required").optional(),
    description: z.string().optional(),
  }),
});

export type CreateItemInput = z.infer<typeof createItemSchema>["body"];
export type UpdateItemInput = z.infer<typeof updateItemSchema>["body"];
