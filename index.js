const express = require('express');
const db = require('./db');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Configuración de CORS
const corsOptions = {
  origin: '*', // Permitir todas las solicitudes de origen. Puedes cambiar '*' por un dominio específico.
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
};

app.use(cors(corsOptions));
app.use(bodyParser.json());

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// Rutas
const establecimientoRoutes = require('./routes/establecimiento');
const aforoRoutes = require('./routes/aforo');
const categoriaRoutes = require('./routes/categoria');
const ventaRoutes = require('./routes/venta'); // Importar las rutas de venta

app.use('/api/establecimiento', establecimientoRoutes);
app.use('/api/aforo', aforoRoutes);
app.use('/api/categoria', categoriaRoutes);
app.use('/api/venta', ventaRoutes); // Usar las rutas de venta
