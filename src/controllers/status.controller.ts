import { Request, Response } from "express";
import * as StatusService from "../services/status.service";
import { createStatusInput, updateStatusInput, createStatusSchema } from "../validation/status.validation";

// Create report status
export const createStatus = async (
  req: Request<{}, {}, createStatusInput>,
  res: Response
): Promise<void> => {
  try {
    createStatusSchema.parse({
      body: req.body,
      query: req.query,
    });
    const item = await StatusService.createStatus(req.body,req.query as { type: string });
    res.status(201).json({data : "status created"});
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: "An unexpected error occurred." });
    }
  }
};

// Get all report status
export const getStatus = async (req: Request, res: Response): Promise<void> => {
  try {
    const items = await StatusService.getStatus(req.query as { type: string });
    res.json({data : items}); // Send response directly, no return needed
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: "An unexpected error occurred." });
    }
  }
};

// Get report status by ID
export const getStatusById = async (
  req: Request<{ id: string }>,
  res: Response
): Promise<void> => {
  try {
    const item = await StatusService.getStatusById(req.params.id,req.query as { type: string });
    if (!item) {
      res.status(404).json({ error: "status not found" });
      return;
    }
    res.json({data : item}); // Send response directly, no return needed
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: "An unexpected error occurred." });
    }
  }
};

// Delete status
export const deleteStatus = async (
  req: Request<{ id: string }>,
  res: Response
): Promise<void> => {
  try {
    const item = await StatusService.deleteStatus(req.params.id,req.query as { type: string });
    if (!item) {
      res.status(404).json({ error: "status not found" });
      return;
    }
    res.json({ data : "status deleted" }); // Send response directly, no return needed
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: "An unexpected error occurred." });
    }
  }
};

// Update status
export const updateStatus = async (
  req: Request<{ id: string }, {}, updateStatusInput>,
  res: Response
): Promise<void> => {
  try {
    const item = await StatusService.updateStatus(req.params.id, req.body, req.query as { type: string });
    if (!item) {
      res.status(404).json({ error: "status not found" });
      return;
    }
    res.json({ data : item }); // Send response directly, no return needed
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: "An unexpected error occurred." });
    }
  }
};
