import { ItemModel } from "../models/item.model"; // Adjusted import
import { IItem } from "../models/item.model"; 
import { IItemDTO } from "../types/item.d";

export const createItem = async (data: IItemDTO): Promise<IItem> => {
  const item = new ItemModel(data);
  return item.save();
};

export const getItems = async (): Promise<IItem[]> => {
  return ItemModel.find();
};

export const getItemById = async (id: string): Promise<IItem | null> => {
  return ItemModel.findById(id);
};

export const updateItem = async (id: string, data: IItemDTO): Promise<IItem | null> => {
  return ItemModel.findByIdAndUpdate(id, data, { new: true });
};

export const deleteItem = async (id: string): Promise<IItem | null> => {
  return ItemModel.findByIdAndDelete(id);
};
