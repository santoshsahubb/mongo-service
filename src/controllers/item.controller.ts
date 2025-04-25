import { Request, Response } from "express";
import * as ItemService from "../services/item.service";
import { CreateItemInput, UpdateItemInput } from "../validation/item.validation";

// Create Item
export const createItem = async (
  req: Request<{}, {}, CreateItemInput>,
  res: Response
): Promise<void> => {
  try {
    const item = await ItemService.createItem(req.body);
    res.status(201).json(item); // Send response directly, no return needed
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: "An unexpected error occurred." });
    }
  }
};

// Get all Items
export const getItems = async (_req: Request, res: Response): Promise<void> => {
  try {
    const items = await ItemService.getItems();
    res.json(items); // Send response directly, no return needed
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: "An unexpected error occurred." });
    }
  }
};

// Get Item by ID
export const getItemById = async (
  req: Request<{ id: string }>,
  res: Response
): Promise<void> => {
  try {
    const item = await ItemService.getItemById(req.params.id);
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
export const deleteItem = async (
  req: Request<{ id: string }>,
  res: Response
): Promise<void> => {
  try {
    const item = await ItemService.deleteItem(req.params.id);
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
export const updateItem = async (
  req: Request<{ id: string }, {}, UpdateItemInput>,
  res: Response
): Promise<void> => {
  try {
    const item = await ItemService.updateItem(req.params.id, req.body);
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
