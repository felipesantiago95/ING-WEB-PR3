
# Venta Management API

Este proyecto es una API RESTful construida con Node.js y Express.js para gestionar la tabla `venta` en una base de datos PostgreSQL. La API permite realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) sobre la tabla `venta` y también incluye rutas para gestionar establecimientos, aforos y categorías.

## Contenidos

- [Instalación](#instalación)
- [Configuración](#configuración)
- [Uso](#uso)
- [Rutas de la API](#rutas-de-la-api)
  - [Establecimiento](#establecimiento)
  - [Aforo](#aforo)
  - [Categoría](#categoría)
  - [Venta](#venta)
- [Contribuciones](#contribuciones)
- [Licencia](#licencia)

## Instalación

1. Clona el repositorio:

   ```bash
   git clone https://github.com/tuusuario/venta-management-api.git
   cd venta-management-api
   ```

2. Instala las dependencias:

   ```bash
   npm install
   ```

## Configuración

1. Crea un archivo `.env` en la raíz del proyecto y añade tu configuración de base de datos PostgreSQL:

   ```env
   PORT=3000
   DB_HOST=tu-host-de-base-de-datos
   DB_USER=tu-usuario-de-base-de-datos
   DB_PASSWORD=tu-contraseña-de-base-de-datos
   DB_NAME=tu-nombre-de-base-de-datos
   ```

2. Configura la conexión a la base de datos en `db.js`:

   ```javascript
   // db.js
   const knex = require('knex');
   const dotenv = require('dotenv');

   dotenv.config();

   const db = knex({
     client: 'pg',
     connection: {
       host: process.env.DB_HOST,
       user: process.env.DB_USER,
       password: process.env.DB_PASSWORD,
       database: process.env.DB_NAME
     }
   });

   module.exports = db;
   ```

## Uso

1. Inicia el servidor:

   ```bash
   npm start
   ```

2. El servidor estará corriendo en `http://localhost:3000`.

## Rutas de la API

### Establecimiento

- `GET /api/establecimiento`
  - Obtiene todos los establecimientos.
  
- `POST /api/establecimiento`
  - Crea un nuevo establecimiento.
  - Body JSON:
    ```json
    {
      "nombre": "Nombre del Establecimiento",
      "direccion": "Dirección",
      "ciudad": "Ciudad",
      "pais": "País"
    }
    ```

- `PUT /api/establecimiento/:id`
  - Actualiza un establecimiento existente.
  - Body JSON:
    ```json
    {
      "nombre": "Nombre del Establecimiento",
      "direccion": "Dirección",
      "ciudad": "Ciudad",
      "pais": "País"
    }
    ```

- `DELETE /api/establecimiento/:id`
  - Elimina un establecimiento.

### Aforo

- `GET /api/aforo`
  - Obtiene todos los aforos.
  
- `POST /api/aforo`
  - Crea un nuevo aforo.
  - Body JSON:
    ```json
    {
      "descripcion": "Descripción del Aforo"
    }
    ```

- `PUT /api/aforo/:id`
  - Actualiza un aforo existente.
  - Body JSON:
    ```json
    {
      "descripcion": "Descripción del Aforo"
    }
    ```

- `DELETE /api/aforo/:id`
  - Elimina un aforo.

### Categoría

- `GET /api/categoria`
  - Obtiene todas las categorías.
  
- `POST /api/categoria`
  - Crea una nueva categoría.
  - Body JSON:
    ```json
    {
      "nombre": "Nombre de la Categoría"
    }
    ```

- `PUT /api/categoria/:id`
  - Actualiza una categoría existente.
  - Body JSON:
    ```json
    {
      "nombre": "Nombre de la Categoría"
    }
    ```

- `DELETE /api/categoria/:id`
  - Elimina una categoría.

### Venta

- `GET /api/venta`
  - Obtiene todas las ventas.
  
- `POST /api/venta`
  - Crea una nueva venta.
  - Body JSON:
    ```json
    {
      "establecimiento_id": 1,
      "aforo_id": 2,
      "categoria_id": 3,
      "fecha_venta": "2024-07-16T19:20:30",
      "monto": 100.50
    }
    ```

- `PUT /api/venta/:id`
  - Actualiza una venta existente.
  - Body JSON:
    ```json
    {
      "establecimiento_id": 1,
      "aforo_id": 2,
      "categoria_id": 3,
      "fecha_venta": "2024-07-16T19:20:30",
      "monto": 100.50
    }
    ```

- `DELETE /api/venta/:id`
  - Elimina una venta.


