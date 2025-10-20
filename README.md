Ya que la imagen de las relaciones no cargo, utilice un ejemplo par poder cumplir con la pregunta planteada 

# API REST - Tienda

API REST completa construida con NestJS, TypeORM y PostgreSQL para gestión de tienda.

## 🚀 Características

- CRUD completo para Usuarios, Categorías, Productos y Órdenes
- Validación de datos con class-validator
- Documentación automática con Swagger
- Base de datos PostgreSQL con TypeORM
- Relaciones entre entidades

## 📋 Requisitos Previos

- Node.js (v18 o superior)
- PostgreSQL (v14 o superior)
- npm o yarn

## 🔧 Instalación

1. Clonar el repositorio:
```bash
git clone <URL_DE_TU_REPO>
cd api-tienda
```

2. Instalar dependencias:
```bash
npm install
```

3. Crear archivo `.env` en la raíz del proyecto:
```env
# Base de datos
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=tu_password
DB_DATABASE=api_tienda

# Puerto de la aplicación
PORT=3000
```

4. Crear la base de datos en PostgreSQL:
```sql
CREATE DATABASE api_tienda;
```

## ▶️ Ejecución

### Modo desarrollo
```bash
npm run start:dev
```

### Modo producción
```bash
npm run build
npm run start:prod
```

La aplicación estará disponible en: `http://localhost:3000`

## 📚 Documentación API

Una vez iniciada la aplicación, accede a la documentación Swagger en:

```
http://localhost:3000/api/docs
```

## 🗂️ Estructura del Proyecto

```
src/
├── config/           # Configuración de la aplicación
├── users/            # Módulo de usuarios
├── categories/       # Módulo de categorías
├── products/         # Módulo de productos
├── orders/           # Módulo de órdenes
├── app.module.ts     # Módulo principal
└── main.ts           # Punto de entrada
```

## 🔗 Endpoints Principales

### Users
- `GET /users` - Obtener todos los usuarios
- `GET /users/:id` - Obtener un usuario
- `POST /users` - Crear usuario
- `PATCH /users/:id` - Actualizar usuario
- `DELETE /users/:id` - Eliminar usuario

### Categories
- `GET /categories` - Obtener todas las categorías
- `GET /categories/:id` - Obtener una categoría
- `POST /categories` - Crear categoría
- `PATCH /categories/:id` - Actualizar categoría
- `DELETE /categories/:id` - Eliminar categoría

### Products
- `GET /products` - Obtener todos los productos
- `GET /products?categoryId=<id>` - Filtrar por categoría
- `GET /products/:id` - Obtener un producto
- `POST /products` - Crear producto
- `PATCH /products/:id` - Actualizar producto
- `DELETE /products/:id` - Eliminar producto

### Orders
- `GET /orders` - Obtener todas las órdenes
- `GET /orders?userId=<id>` - Filtrar por usuario
- `GET /orders/:id` - Obtener una orden
- `POST /orders` - Crear orden
- `PATCH /orders/:id` - Actualizar orden
- `DELETE /orders/:id` - Eliminar orden

## 🛠️ Tecnologías

- [NestJS](https://nestjs.com/) - Framework backend
- [TypeORM](https://typeorm.io/) - ORM
- [PostgreSQL](https://www.postgresql.org/) - Base de datos
- [Swagger](https://swagger.io/) - Documentación API
- [Class Validator](https://github.com/typestack/class-validator) - Validación

## 📦 Dependencias Principales

```json
{
  "@nestjs/common": "^10.0.0",
  "@nestjs/core": "^10.0.0",
  "@nestjs/typeorm": "^10.0.0",
  "@nestjs/swagger": "^7.0.0",
  "typeorm": "^0.3.17",
  "pg": "^8.11.3",
  "class-validator": "^0.14.0",
  "class-transformer": "^0.5.1"
}
```


## 👤 Autor

Carlos Morales - [GitHub](https://github.com/CarlosMorales07)

## 📄 Licencia

MIT
