const db = require("../config/db");

const getAll = async () => {
  const result = await db.query("SELECT * FROM movimientos ORDER BY date DESC");

  return result.rows;
};

const getById = async (id) => {
  const result = await db.query("SELECT * FROM movimientos WHERE id = $1", [id]);
  return result.rows[0];
}

const create = async (movimiento) => {
  const { description, amount, type, category, date } = movimiento;

  const result = await db.query(
    "INSERT INTO movimientos (description, amount, type, category, date) VALUES ($1, $2, $3, $4, $5) RETURNING *",
    [description, amount, type, category, date]
  );

  return result.rows[0];
};

const update = async (id, movimiento) => {
  const { description, amount, type, category, date } = movimiento;

  const result = await db.query(
    "UPDATE movimientos SET description = $1, amount = $2, type = $3, category = $4, date = $5 WHERE id = $6 RETURNING *",
    [description, amount, type, category, date, id]
  );
  return result.rows[0];
};

const remove = async (id) => {
  const result = await db.query(
    "DELETE FROM movimientos WHERE id = $1 RETURNING *",
    [id]
  );
  return result.rows[0];
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};
