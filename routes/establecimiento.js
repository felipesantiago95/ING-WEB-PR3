// routes/establecimiento.js
const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/', async (req, res) => {
  try {
    const establecimientos = await db.select().from('establecimiento');
    res.status(200).json(establecimientos);
  } catch (error) {
    console.error('Error al obtener establecimientos:', error.message);
    res.status(500).json({ error: 'Error al obtener establecimientos' });
  }
});

router.post('/', async (req, res) => {
  const { nombre, direccion, ciudad, pais } = req.body;
  try {
    const nuevoEstablecimiento = await db('establecimiento').insert({ nombre, direccion, ciudad, pais });
    res.status(201).json({ id: nuevoEstablecimiento[0], message: 'Establecimiento creado exitosamente' });
  } catch (error) {
    console.error('Error al crear establecimiento:', error.message);
    res.status(500).json({ error: 'Error al crear establecimiento' });
  }
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { nombre, direccion, ciudad, pais } = req.body;
  try {
    await db('establecimiento').where({ establecimiento_id: id }).update({ nombre, direccion, ciudad, pais });
    res.status(200).json({ message: 'Establecimiento actualizado exitosamente' });
  } catch (error) {
    console.error('Error al actualizar establecimiento:', error.message);
    res.status(500).json({ error: 'Error al actualizar establecimiento' });
  }
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await db('establecimiento').where({ establecimiento_id: id }).del();
    res.status(200).json({ message: 'Establecimiento eliminado exitosamente' });
  } catch (error) {
    console.error('Error al eliminar establecimiento:', error.message);
    res.status(500).json({ error: 'Error al eliminar establecimiento' });
  }
});

module.exports = router;
