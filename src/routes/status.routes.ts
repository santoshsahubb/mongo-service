import { Router } from "express";
import * as StatusController from "../controllers/status.controller";
import validate from "../middleware/validate";
import { createStatusSchema, updateStatusSchema, getStatusSchema, getAllStatusSchema, deleteStatusSchema } from "../validation/status.validation";

const router = Router();

router.post("/", validate(createStatusSchema), StatusController.createStatus);
router.get("/", validate(getAllStatusSchema), StatusController.getStatus);
router.get("/:id", validate(getStatusSchema), StatusController.getStatusById);
router.put("/:id", validate(updateStatusSchema), StatusController.updateStatus);
router.delete("/:id", validate(deleteStatusSchema), StatusController.deleteStatus);

export default router;
