import { url } from "inspector";
import { ReportStatusModel, URLStatusModel, CommentStatusModel, ProjectStatusModel } from "../models/status.model"; // Adjusted import
import { ReportStatus, URLStatus, CommentStatus, ProjectStatus } from "../models/status.model"; 
import { StatusDTO } from "../types/status.d";

export const createStatus = async (data: StatusDTO, query: { type: string }): Promise<ReportStatus | URLStatus | CommentStatus | ProjectStatus> => {
  switch (query.type) {
    case "report_status":
      let reportStatus = await ReportStatusModel.create(data);
      return reportStatus.save();
    case "url_status":
      let urlStatus = await URLStatusModel.create(data);
      return urlStatus.save();
    case "comment_status":
      let commentStatus = await CommentStatusModel.create(data);
      return commentStatus.save();
    case "project_status":
      let projectStatus = await ProjectStatusModel.create(data);
      return projectStatus.save();
    default:
      throw new Error("Invalid status type");
  }
};

export const getStatus = async (query: { type: string }): Promise<ReportStatus[]> => {
  switch (query.type) {
    case "report_status":
      return ReportStatusModel.find();
    case "url_status":
      return URLStatusModel.find();
    case "comment_status":
      return CommentStatusModel.find();
    case "project_status":
      return ProjectStatusModel.find();
    default:
      throw new Error("Invalid status type");
  }
};

export const getStatusById = async (id: string, query: { type: string }): Promise<ReportStatus | null> => {
  switch (query.type) {
    case "report_status":
      return ReportStatusModel.findById(id);
    case "url_status":
      return URLStatusModel.findById(id);
    case "comment_status":
      return CommentStatusModel.findById(id);
    case "project_status":
      return ProjectStatusModel.findById(id);
    default:
      throw new Error("Invalid status type");
  } 
};

export const updateStatus = async (id: string, data: StatusDTO, query: { type: string }): Promise<ReportStatus | null> => {
  switch (query.type) {
    case "report_status":
      return ReportStatusModel.findByIdAndUpdate(id, data, { new: true });
    case "url_status":
      return URLStatusModel.findByIdAndUpdate(id, data, { new: true });
    case "comment_status":
      return CommentStatusModel.findByIdAndUpdate(id, data, { new: true });
    case "project_status":
      return ProjectStatusModel.findByIdAndUpdate(id, data, { new: true });
    default:
      throw new Error("Invalid status type");
  } 
};

export const deleteStatus = async (id: string, query: { type: string }): Promise<ReportStatus | null> => {
  switch (query.type) {
    case "report_status":
      return ReportStatusModel.findByIdAndDelete(id);
    case "url_status":
      return URLStatusModel.findByIdAndDelete(id);
    case "comment_status":
      return CommentStatusModel.findByIdAndDelete(id);
    case "project_status":
      return ProjectStatusModel.findByIdAndDelete(id);
    default:
      throw new Error("Invalid status type");
  } 
};
