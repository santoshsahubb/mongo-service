import { Request, Response } from "express";
import * as StatusService from "../services/status.service";
import { createReportStatusInput, updateReportStatusInput } from "../validation/status.validation";

// Create report status
export const createReportStatus = async (
  req: Request<{}, {}, createReportStatusInput>,
  res: Response
): Promise<void> => {
  try {
    const item = await StatusService.createReportStatus(req.body,req.query);
    res.status(201).json(item); // Send response directly, no return needed
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: "An unexpected error occurred." });
    }
  }
};

// Get all report status
export const getReportStatus = async (_req: Request, res: Response): Promise<void> => {
  try {
    const items = await StatusService.getReportStatus();
    res.json(items); // Send response directly, no return needed
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: "An unexpected error occurred." });
    }
  }
};

// Get report status by ID
export const getReportStatusById = async (
  req: Request<{ id: string }>,
  res: Response
): Promise<void> => {
  try {
    const item = await StatusService.getReportStatusById(req.params.id);
    if (!item) {
      res.status(404).json({ error: "Item not found" });
      return;
    }
    res.json(item); // Send response directly, no return needed
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: "An unexpected error occurred." });
    }
  }
};

// Delete Item
export const deleteReportStatus = async (
  req: Request<{ id: string }>,
  res: Response
): Promise<void> => {
  try {
    const item = await StatusService.deleteReportStatus(req.params.id);
    if (!item) {
      res.status(404).json({ error: "Item not found" });
      return;
    }
    res.json({ message: "Item deleted" }); // Send response directly, no return needed
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: "An unexpected error occurred." });
    }
  }
};

// Update Item
export const updateReportStatus = async (
  req: Request<{ id: string }, {}, updateReportStatusInput>,
  res: Response
): Promise<void> => {
  try {
    const item = await StatusService.updateReportStatus(req.params.id, req.body);
    if (!item) {
      res.status(404).json({ error: "Item not found" });
      return;
    }
    res.json(item); // Send response directly, no return needed
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: "An unexpected error occurred." });
    }
  }
};
