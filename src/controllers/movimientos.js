const model = require('../models/movimientos');

const getAll = async (req, res) => {

    try {
        const movimientos = await model.getAll();
        res.json(movimientos);
    } catch (error) {
        res.status(500).json({error: 'Error al obtener movimientos'});
    }

}

const create = async (req, res) => {
    try {
        const nuevoMovimiento = await model.create(req.body);
        res.status(201).json(nuevoMovimiento);
    } catch (error) {
        res.status(500).json({error: 'Error al crear movimiento'})
    }
}

const update = async (req, res) => {

    try {
        const {id} = req.params;
        const movimientoEditado = await model.update(id, req.body);
        res.json(movimientoEditado);
    } catch (error) {
        res.status(500).json({error: 'Error al actualizar movimiento'});
    }
}

const remove = async (req, res) => {

    try {
        const {id} = req.params;
        const movimientoEliminado = await model.remove(id);
        res.json(movimientoEliminado);
    } catch (error) {
        res.status(500).json({error: 'Error al eliminar movimiento'})
    }

}

module.exports = {
    getAll,
    create,
    update,
    remove
}