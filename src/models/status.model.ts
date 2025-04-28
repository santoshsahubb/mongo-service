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

export interface CommentStatus extends Document {
  name: string;
  isEnabled?: boolean;
  createdAt: Date;
}

const CommentStatusSchema: Schema = new Schema({
  name: { type: String, required: true },
  isEnabled: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now },
});
export interface ProjectStatus extends Document {
  name: string;
  isEnabled?: boolean;
  createdAt: Date;
}

const ProjectStatusSchema: Schema = new Schema({
  name: { type: String, required: true },
  isEnabled: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now },
});
export interface URLStatus extends Document {
  name: string;
  isEnabled?: boolean;
  createdAt: Date;
}

const URLStatusSchema: Schema = new Schema({
  name: { type: String, required: true },
  isEnabled: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now },
});

export const ReportStatusModel = mongoose.model<ReportStatus>("report_status", ReportStatusSchema);
export const URLStatusModel = mongoose.model<URLStatus>("url_status", URLStatusSchema);
export const CommentStatusModel = mongoose.model<CommentStatus>("comment_status", CommentStatusSchema);
export const ProjectStatusModel = mongoose.model<ProjectStatus>("project_status", ProjectStatusSchema);
