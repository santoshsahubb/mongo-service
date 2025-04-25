import mongoose, { Schema, Document } from "mongoose";

export interface IItem extends Document {
  name: string;
  description?: string;
  createdAt: Date;
}

const ItemSchema: Schema = new Schema({
  name: { type: String, required: true },
  description: { type: String },
  createdAt: { type: Date, default: Date.now },
});

export const ItemModel = mongoose.model<IItem>("Item", ItemSchema);