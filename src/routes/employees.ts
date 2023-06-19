import { Router } from "express";
import {
  deleteEmployee,
  getEmployee,
  getEmployees,
  postEmployee,
  updateEmployee,
} from "../api/employees/controller/employees";

const router = Router();

router.get("/", getEmployees);
router.get("/:id", getEmployee);
router.post("/", postEmployee);
router.put("/:id", updateEmployee);
router.delete("/:id", deleteEmployee);

export { router };
