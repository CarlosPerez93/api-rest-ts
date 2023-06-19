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
  const [result] = await pool.query(
    "UPDATE employee  SET  name = ?, salary = ? WHERE id = ? ",
    [name, salary, id]
  );

  console.log(result);

  const [rows] = await pool.query("SELECT * FROM employee WHERE id = ? ", [id]);
  return rows;
};

const deleteServiceEmployee = async (id: string) => {
  const [rows] = await pool.query("DELETE FROM employee WHERE id = ?", [id]);
  return rows;
};

export {
  updateServiceEmployee,
  getServiceEmployees,
  deleteServiceEmployee,
  getServiceEmployee,
  postServiceEmployee,
};
