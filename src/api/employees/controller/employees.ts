import { Request, Response } from "express";
import { handleHttp } from "../../../utils/error.handle";
import {
  deleteServiceEmployee,
  getServiceEmployee,
  getServiceEmployees,
  postServiceEmployee,
  updateServiceEmployee,
} from "../services/employees";

const getEmployees = async (req: Request, res: Response) => {
  try {
    const response = await getServiceEmployees();
    if (response !== null) {
      res.send({ message: "SUCCESSFUL_TRANSACTION", data: response });
    }
  } catch (e) {
    res.status(500).send(handleHttp(res, "ERROR_GET_EMPLOYEES"));
  }
};
const getEmployee = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const rows = await getServiceEmployee(id);
    if (Array.isArray(rows) && rows.length <= 0)
      return res.status(404).send({ message: "NOT_FOUNT_EMPLOYEE" });

    res.send(rows);
  } catch (e) {
    res.status(500).send(handleHttp(res, "ERROR_GET_EMPLOYEES"));
  }
};
const deleteEmployee = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const [rows] = await deleteServiceEmployee(id);
    console.log(rows.affectedRows);

    if (rows.affectedRows <= 0)
      return res.status(404).send({ message: "EMPLOYEE_NOT_FOUND" });
    return res.sendStatus(204);
  } catch (e) {
    res.status(500).send(handleHttp(res, "ERROR_DELETED_EMPLOYEES"));
  }
};
const postEmployee = async ({ body }: Request, res: Response) => {
  try {
    const response = await postServiceEmployee(body);
    if (response) {
      res.status(200).send({ message: "SUCCESSFUL_TRANSACTION " });
    }
  } catch (e) {
    res.status(500).send(handleHttp(res, "ERROR_GET_EMPLOYEES"));
  }
};

const updateEmployee = async ({ params, body }: Request, res: Response) => {
  try {
    const { id } = params;
    const { name, salary } = body;
    const data = await updateServiceEmployee(id, name, salary);
    const { rows, dataUpdate } = data;

    if (rows.affectedRows === 0)
      return res.status(404).json({ message: "EMPLOYEE_NOT_FOUND" });

    res.send(dataUpdate);
  } catch (e) {
    res.status(500).send(handleHttp(res, "ERROR_GET_EMPLOYEES"));
  }
};

export {
  getEmployees,
  getEmployee,
  postEmployee,
  updateEmployee,
  deleteEmployee,
};
