import { pool } from "../../../config/mysql";
import { EMPLOYEE } from "../interface/employee";

const getServiceEmployees = async () => {
  const [rows] = await pool.query("SELECT * FROM employee");
  return rows;
};
const getServiceEmployee = async (id: string) => {
  const [rows] = await pool.query(`SELECT * FROM employee WHERE id=?`, [id]);
  return rows;
};

const postServiceEmployee = async (item: EMPLOYEE) => {
  const { name, salary } = item;
  const [rows] = await pool.query(
    "INSERT INTO employee (name, salary) VALUES(?,?)",
    [name, salary]
  );
  return rows;
};

const updateServiceEmployee = async (
  id: string,
  name: string,
  salary: string
) => {
  const response = await pool.query(
    "UPDATE employee  SET  name = ?, salary = ? WHERE id = ? ",
    [name, salary, id]
  );
  const result = JSON.stringify(response);
  const rows = JSON.parse(result);
  const [dataUpdate] = await pool.query(
    "SELECT * FROM employee WHERE id = ? ",
    [id]
  );
  const data = {
    dataUpdate,
    rows,
  };

  return data;
};

const deleteServiceEmployee = async (id: string) => {
  const response = await pool.query("DELETE FROM employee WHERE id = ?", [id]);
  const result = JSON.stringify(response);
  const rows = JSON.parse(result);
  return rows;
};

export {
  updateServiceEmployee,
  getServiceEmployees,
  deleteServiceEmployee,
  getServiceEmployee,
  postServiceEmployee,
};
