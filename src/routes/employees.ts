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
router.post("/create-employee", postEmployee);
router.put("/update-employee/:id", updateEmployee);
router.delete("/deleted-employee/:id", deleteEmployee);

export { router };
