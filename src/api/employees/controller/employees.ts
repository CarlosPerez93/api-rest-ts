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
      res.send({ message: "SUCCESSFUL_TRANSACTION", data: response[0] });
    }
  } catch (e) {
    res.status(500).send(handleHttp(res, "ERROR_GET_EMPLOYEES"));
  }
};
const getEmployee = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await getServiceEmployee(id);
    if (response.length <= 0)
      return res.status(404).send({ message: "NOT_FOUNT_EMPLOYEE" });
    res.send(response[0]);
  } catch (e) {
    res.status(500).send(handleHttp(res, "ERROR_GET_EMPLOYEES"));
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

const updateEmployee = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await updateServiceEmployee(id);
    res.send(response);
  } catch (e) {
    res.status(500).send(handleHttp(res, "ERROR_GET_EMPLOYEES"));
  }
};
const deleteEmployee = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await deleteServiceEmployee(id);
    res.send(response);
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
