import { pool } from "../../../config/mysql";
import { EMPLOYEE } from "../interface/employee";

const getServiceEmployees = async () => {
  const response = await pool.query("SELECT * from employee");
  return response;
};
const getServiceEmployee = async (id: string) => {
  const response = await pool.query(`Select * from employee where id=?`, [id]);
  return response;
};

const postServiceEmployee = async (item: EMPLOYEE) => {
  const { name, salary } = item;
  const [response] = await pool.query(
    "INSERT INTO employee (name, salary) VALUES(?,?)",
    [name, salary]
  );
  return { response };
};

const updateServiceEmployee = async (id: string) => {};

const deleteServiceEmployee = async (id: string) => {};

export {
  updateServiceEmployee,
  getServiceEmployees,
  deleteServiceEmployee,
  getServiceEmployee,
  postServiceEmployee,
};
