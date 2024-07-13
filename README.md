# Prueba Tecnica

### Instrucciones:

Desarrollar un registro de usuario y login básico en NodeJS, el diseño no es de mucha importancia, algo sencillo. Cuando el usuario inicie sesión tendrá una opción para modificar su información. La información a almacenar será la siguiente:
- Nombre
- Apellido
- Usuario
- Email
- Contraseña

Colocar un aviso al usuario al momento de actualizar su información (si fue hecha o no),
igualmente al momento de loguearse si ha ocurrido un error.

### Notas

- Puedes usar el framework con el que te sientas más cómodo.
- Puedes usar cualquier sistema de base de datos.
- El login puede ser por usuario o email
- Tener en cuenta las validaciones (Usuario o email que ya existen, longitud de la contraseña
a tu elección).
- Contraseñas encriptadas. 

Crear los siguientes endpoints :

* Listado de todos los usuarios (con paginación)  GET /api/v1/users?page=1&count=10  
* Obtener un solo usuario GET /api/v1/users/{ID} 
* Actualizar un usuario UPDATE /api/v1/users/{ID}
* Eliminar un usuario DELETE /api/v1/users/{ID}

## Pasos a seguir

#### 1. Elejir la arquitectura backend a utilizar y crear esquema del proyecto

Se usará clean arquitecture, donde se implementaran los modulos a continuacion: 
- Servicios
- Rutas
- Database
- Middlewares
- Dtos
- Utils

#### 2. Diseñar la base de datos

En este caso la base de datos solo cuenta con una sola tabla, que es la tabla de usuarios, donde se pide almacenar:

- Nombre
- Apellido
- Usuario
- Email
- Contraseña

#### 3. Maquetar pagina de Login y Registro y crear sus funciones

En este paso se creará las rutas, los servicios, los middlewares y los dtos necesarios para que esta seccion funcione, tomando en cuenta los requerimientos.

#### 4. Crear los endpoints para modificar usuarios

#### 5. Maquetar pagina de informacion de usuario y crear sus funciones

Se harán las funciones necesarias para que el usuario logueado pueda actualizar su informacion

