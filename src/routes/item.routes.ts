import { Router } from "express";
import * as ItemController from "../controllers/item.controller";
import validate from "../middleware/validate";
import { createItemSchema, updateItemSchema } from "../validation/item.validation";

const router = Router();

router.post("/", validate(createItemSchema), ItemController.createItem);
router.get("/", ItemController.getItems);
router.get("/:id", ItemController.getItemById);
router.put("/:id", validate(updateItemSchema), ItemController.updateItem);
router.delete("/:id", ItemController.deleteItem);

export default router;
