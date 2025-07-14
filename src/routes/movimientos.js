const express = require('express');

const router = express.Router();

const movimientosController = require('../controllers/movimientos');


// Rutas CRUD

router.get('/', movimientosController.getAll);

router.get('/:id', movimientosController.getById)

router.post('/', movimientosController.create);

router.put('/:id', movimientosController.update);

router.delete('/:id', movimientosController.remove);


module.exports = router;