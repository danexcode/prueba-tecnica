# Prueba Técnica

Estimado equipo de Nolatech,

Agradezco sinceramente la oportunidad de participar en el proceso de selección. Estoy emocionado por la posibilidad de formar parte de su equipo.

Quiero aclarar que debido a mis responsabilidades laborales durante el día, pude trabajar en la prueba únicamente en las horas nocturnas. A pesar de las limitaciones de tiempo, he puesto mi mejor esfuerzo para demostrar mis habilidades y conocimientos en el área.

Durante este tiempo de evaluación, he puesto mi mayor esfuerzo y dedicación en la prueba técnica. Espero con ansias su respuesta y estoy seguro de que podré contribuir positivamente a Nolatech.

Gracias nuevamente por considerarme y por su tiempo.

Atentamente, Daniel Rodríguez

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
- Database con sequelizeORM 
- Middlewares
- Dtos
- Utils

#### 2. Diseñar la base de datos

En este caso la base de datos solo cuenta con una sola tabla, que es la tabla de usuarios, se utilizará un sistema de migraciones con sequelize, se pide almacenar:

- Nombre
- Apellido
- Usuario
- Email
- Contraseña

#### 3. Maquetar página de Login y Registro y crear sus funciones

En este paso se creará las rutas, los servicios, los middlewares y los dtos necesarios para que esta sección funcione, tomando en cuenta los requerimientos.

#### 4. Crear los endpoints para modificar usuarios

#### 5. Maquetar pagina de información de usuario y crear sus funciones

Se harán las funciones necesarias para que el usuario logueado pueda actualizar su información

---

## Requerimientos completados:

- Almacenar informacion del usuario en una base de datos, las contraseñas se guardan encriptadas

- Validar datos al momento de registrar un nuevo usuario (usuario unico, email unico, longitud minimo de la contraseña 8 digitos)

- Función de loguearse por usuario o por email con validaciones

- Opcion para actualizar la informacion del usuario logueado con aviso

- Endpoints para modificar los usuarios creados

- Repositorio en github creado y proyecto servido en vercel

## Deuda técnica asumida:

- Debido a que vercel no esta optimizado para usar archivos simples de html, css y js, tuve problemas para servir los archivos estáticos, y para cumplir con el plazo de entrega decidí hacer todo dentro de los archivos html, por lo que la parte del frontend quedó muy desordenada

- A pesar que implementé una estrategia de jsonwebtoken para hacer login, al final no la use por el tiempo

