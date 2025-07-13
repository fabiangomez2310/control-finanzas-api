const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false } 
});

pool.on('connect', () => {
  console.log('✔️ Conectado a la base de datos');
});

pool.on('error', (err) => {
  console.error('❌ Error en la conexión con la DB:', err);
});

module.exports = {
  query: (text, params) => {
    console.log('SQL Query:', text);
    console.log('Parámetros:', params);
    return pool.query(text, params);
  }
};
