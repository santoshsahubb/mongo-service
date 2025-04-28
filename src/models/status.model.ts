import mongoose, { Schema, Document } from "mongoose";

export interface ReportStatus extends Document {
  name: string;
  isEnabled?: boolean;
  createdAt: Date;
}

const ReportStatusSchema: Schema = new Schema({
  name: { type: String, required: true },
  isEnabled: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now },
});

export const ReportStatusModel = mongoose.model<ReportStatus>("report_status", ReportStatusSchema);