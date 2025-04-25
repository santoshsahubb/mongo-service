import { Router } from "express";
import * as StatusController from "../controllers/status.controller";
import validate from "../middleware/validate";
import { createReportStatusSchema, updateReportStatusSchema } from "../validation/status.validation";

const router = Router();

router.post("/report", validate(createReportStatusSchema), StatusController.createReportStatus);
router.get("/report", StatusController.getReportStatus);
router.get("/report/:id", StatusController.getReportStatusById);
router.put("/report/:id", validate(updateReportStatusSchema), StatusController.updateReportStatus);
router.delete("/report/:id", StatusController.deleteReportStatus);

export default router;
