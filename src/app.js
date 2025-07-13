const express = require('express');

const cors = require('cors');

require('dotenv').config();

const movimientoRoutes = require('./routes/movimientos')


const app = express();

app.use(cors());
app.use(express.json());


app.use('/api/movimientos', movimientoRoutes);

//Ruta base

app.get('/', (req, res) => {
    res.send('API de control de Finanzas');
})


module.exports = app;


