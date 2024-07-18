// routes/categoria.js
const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/', async (req, res) => {
  try {
    const categorias = await db.select().from('categoria');
    res.status(200).json(categorias);
  } catch (error) {
    console.error('Error al obtener categorías:', error.message);
    res.status(500).json({ error: 'Error al obtener categorías' });
  }
});

router.post('/', async (req, res) => {
  const { nombre } = req.body;
  try {
    const nuevaCategoria = await db('categoria').insert({ nombre });
    res.status(201).json({ id: nuevaCategoria[0], message: 'Categoría creada exitosamente' });
  } catch (error) {
    console.error('Error al crear categoría:', error.message);
    res.status(500).json({ error: 'Error al crear categoría' });
  }
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { nombre } = req.body;
  try {
    await db('categoria').where({ categoria_id: id }).update({ nombre });
    res.status(200).json({ message: 'Categoría actualizada exitosamente' });
  } catch (error) {
    console.error('Error al actualizar categoría:', error.message);
    res.status(500).json({ error: 'Error al actualizar categoría' });
  }
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await db('categoria').where({ categoria_id: id }).del();
    res.status(200).json({ message: 'Categoría eliminada exitosamente' });
  } catch (error) {
    console.error('Error al eliminar categoría:', error.message);
    res.status(500).json({ error: 'Error al eliminar categoría' });
  }
});

module.exports = router;
