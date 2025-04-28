import { z } from "zod";

export const createStatusSchema = z.object({
  body: z.object({
    name: z.string().min(1, "Name is required"),
    isEnabled: z.boolean().optional(),
  }),
  query: z.object({
    type: z.enum(["report_status", "project_status", "url_status","comment_status"]), //enum values
  }),
});

export const updateStatusSchema = z.object({
  body: z.object({
    name: z.string().min(1, "Name is required").optional(),
    isEnabled: z.boolean().optional(),
  }),
  query: z.object({
    type: z.enum(["report_status", "project_status", "url_status","comment_status"]), //enum values
  }),
});
export const getStatusSchema = z.object({
  query: z.object({
    type: z.enum(["report_status", "project_status", "url_status","comment_status"]), //enum values
  }),
});
export const deleteStatusSchema = z.object({
  query: z.object({
    type: z.enum(["report_status", "project_status", "url_status","comment_status"]), //enum values
  }),
});

export const getAllStatusSchema = z.object({
  query: z.object({
    type: z.enum(["report_status", "project_status", "url_status","comment_status"]), //enum values
  }),
});

export type createStatusInput = z.infer<typeof createStatusSchema>["body"];
export type updateStatusInput = z.infer<typeof updateStatusSchema>["body"];
export type getStatusInput = z.infer<typeof getStatusSchema>["query"];
export type getAllStatusInput = z.infer<typeof getAllStatusSchema>["query"];
export type deleteStatusInput = z.infer<typeof deleteStatusSchema>["query"];
