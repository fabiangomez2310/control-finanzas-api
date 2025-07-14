const express = require('express');
const cors = require('cors');
require('dotenv').config();

const movimientoRoutes = require('./routes/movimientos');

const app = express();


const corsOptions = {
  origin: [
    'http://localhost:5173', 
    'https://control-finanzas-app.onrender.com' 
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
};

app.use(cors(corsOptions));
app.use(express.json());


app.use('/api/movimientos', movimientoRoutes);


app.get('/', (req, res) => {
  res.send('API de control de Finanzas');
});

module.exports = app;
