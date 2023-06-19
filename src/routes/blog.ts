import { Router } from "express";
import {
  deleteBlogs,
  getBlog,
  getBlogs,
  postBlogs,
  updateBlogs,
} from "../api/blog/controller/blog";

const router = Router();

router.get("/:id", getBlog);
router.put("/:id", updateBlogs);
router.delete("/:id", deleteBlogs);
router.get("/", getBlogs);
router.post("/", postBlogs);

export { router };
