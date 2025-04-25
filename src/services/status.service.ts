import { ReportStatusModel } from "../models/status.model"; // Adjusted import
import { ReportStatus } from "../models/status.model"; 
import { ReportStatusDTO } from "../types/status.d";

export const createReportStatus = async (data: ReportStatusDTO): Promise<ReportStatus> => {
  const item = new ReportStatusModel(data);
  return item.save();
};

export const getReportStatus = async (): Promise<ReportStatus[]> => {
  return ReportStatusModel.find();
};

export const getReportStatusById = async (id: string): Promise<ReportStatus | null> => {
  return ReportStatusModel.findById(id);
};

export const updateReportStatus = async (id: string, data: ReportStatusDTO): Promise<ReportStatus | null> => {
  return ReportStatusModel.findByIdAndUpdate(id, data, { new: true });
};

export const deleteReportStatus = async (id: string): Promise<ReportStatus | null> => {
  return ReportStatusModel.findByIdAndDelete(id);
};
