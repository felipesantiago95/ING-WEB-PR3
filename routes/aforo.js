// routes/aforo.js
const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/', async (req, res) => {
  try {
    const aforos = await db.select().from('aforo');
    res.status(200).json(aforos);
  } catch (error) {
    console.error('Error al obtener aforos:', error.message);
    res.status(500).json({ error: 'Error al obtener aforos' });
  }
});

router.post('/', async (req, res) => {
  const { capacidad } = req.body;
  try {
    const nuevoAforo = await db('aforo').insert({ capacidad });
    res.status(201).json({ id: nuevoAforo[0], message: 'Aforo creado exitosamente' });
  } catch (error) {
    console.error('Error al crear aforo:', error.message);
    res.status(500).json({ error: 'Error al crear aforo' });
  }
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { capacidad } = req.body;
  try {
    await db('aforo').where({ aforo_id: id }).update({ capacidad });
    res.status(200).json({ message: 'Aforo actualizado exitosamente' });
  } catch (error) {
    console.error('Error al actualizar aforo:', error.message);
    res.status(500).json({ error: 'Error al actualizar aforo' });
  }
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await db('aforo').where({ aforo_id: id }).del();
    res.status(200).json({ message: 'Aforo eliminado exitosamente' });
  } catch (error) {
    console.error('Error al eliminar aforo:', error.message);
    res.status(500).json({ error: 'Error al eliminar aforo' });
  }
});

module.exports = router;
