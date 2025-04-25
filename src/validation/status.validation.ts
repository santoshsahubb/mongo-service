import { z } from "zod";

export const createReportStatusSchema = z.object({
  body: z.object({
    name: z.string().min(1, "Name is required"),
    isEnabled: z.boolean().optional(),
  }),
});

export const updateReportStatusSchema = z.object({
  body: z.object({
    name: z.string().min(1, "Name is required").optional(),
    isEnabled: z.boolean().optional(),
  }),
});

export type createReportStatusInput = z.infer<typeof createReportStatusSchema>["body"];
export type updateReportStatusInput = z.infer<typeof updateReportStatusSchema>["body"];
