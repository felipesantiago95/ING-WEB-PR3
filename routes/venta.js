// routes/venta.js
const express = require('express');
const router = express.Router();
const db = require('../db');

// Obtener todas las ventas
router.get('/', async (req, res) => {
  try {
    const ventas = await db.select().from('venta');
    res.status(200).json(ventas);
  } catch (error) {
    console.error('Error al obtener ventas:', error.message);
    res.status(500).json({ error: 'Error al obtener ventas' });
  }
});

// Crear una nueva venta
router.post('/', async (req, res) => {
  const { establecimiento_id, aforo_id, categoria_id, fecha_venta, monto } = req.body;
  try {
    const nuevaVenta = await db('venta').insert({
      establecimiento_id,
      aforo_id,
      categoria_id,
      fecha_venta,
      monto
    }).returning('*');
    res.status(201).json({ id: nuevaVenta[0].venta_id, message: 'Venta creada exitosamente' });
  } catch (error) {
    console.error('Error al crear venta:', error.message);
    res.status(500).json({ error: 'Error al crear venta' });
  }
});

// Actualizar una venta existente
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { establecimiento_id, aforo_id, categoria_id, fecha_venta, monto } = req.body;
  try {
    await db('venta').where({ venta_id: id }).update({
      establecimiento_id,
      aforo_id,
      categoria_id,
      fecha_venta,
      monto
    });
    res.status(200).json({ message: 'Venta actualizada exitosamente' });
  } catch (error) {
    console.error('Error al actualizar venta:', error.message);
    res.status(500).json({ error: 'Error al actualizar venta' });
  }
});

// Eliminar una venta
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await db('venta').where({ venta_id: id }).del();
    res.status(200).json({ message: 'Venta eliminada exitosamente' });
  } catch (error) {
    console.error('Error al eliminar venta:', error.message);
    res.status(500).json({ error: 'Error al eliminar venta' });
  }
});

module.exports = router;
