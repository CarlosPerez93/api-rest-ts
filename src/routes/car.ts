import { Router } from "express";
import {
  deleteItems,
  getItem,
  getItems,
  postItems,
  updateItems,
} from "../api/car/controller/car";
import { logMiddleware } from "../middleware/log";

const router = Router();

router.get("/", getItems);
router.post("/", postItems);
router.get("/:id", logMiddleware, getItem);
router.put("/:id", updateItems);
router.delete("/:id", deleteItems);

export { router };
