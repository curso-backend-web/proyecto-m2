# LaVioleta-eShop

<img src="https://imgur.com/NheKKdo.png" width="300px">

## Introducción

Queremos construir una base de datos para una aplicación de e-commerce.
Cuando entrevistamos al cliente nos da los siguientes requerimientos:

- Quiere almacenar **productos** con información
- Necesita almacenar información del **cliente**
- Debe ser capaz de consultar el **historial de compra** de cada cliente
- Los productos pueden tener una **categoría**
- Los usuarios pueden **revisar** los productos y valorarlos asignándoles de 1 a 5 estrellas.

- Se facilita también la siguiente información:

**INFO CLIENTE**
|nombre|tipo de Dato|ejemplo|
|---|---|---|
|firstName| texto| "John"|
|lastName| texto| "Smith"|
|dateBirth| fecha| "2016-12-10T18:28:09.369Z"|
|address:streetAddress| texto| "21 2nd Street"|
|address:city| texto|"New York"|
|address:state| texto|"NY"|
|address:postalCode| texto|"10021"|

**INFO PRODUCTO**
|nombre|tipo de Dato|ejemplo|
|---|---|---|
|name|texto|Water Bottle,|
|description|texto|"High quality glass bottle provides a healthier way to drink|
|category|texto|"Kitchen"|
|price|número con un decimal|23.0|

**INFO REVIEW**
|nombre|tipo de Dato|ejemplo|
|---|---|---|
|"name"|texto|"Shannon"|
|"comment"|texto|"This is so warm and comfortable."|
|"stars"|number|2|
|"date"|fecha|"2016-11-10T18:28:09.369Z"|

Además se necesita asociar un **carrito de la compra** a cada usuario.

## Instrucciones de entrega

1. Realiza un fork del repositorio a tu usuario de GitHub.
2. Clona **tú** repositorio a tu entorno local.
3. Incluye los documentos que se solicitan, dentro del repositorio.
4. Una vez completado el ejercicio realiza un pull request con tu nombre sobre el repositorio original.

## Actividades

Con la información disponible, realiza las siguientes actividades:

### PARTE 1: BBDD
1. Identifica las entidades y atributos del modelo, y pinta las relaciones entre los datos.
   _Esta respuesta debe realizarse a mano en la hoja de respuestas que se facilita._
   **1 PTO**

2. Crea una base de datos con el nombre **eshop** en tu entorno local a partir de la información del modelo, **puede ser relacional o no relacional**.
   _La bbdd se entregará como un fichero importable al acabar la prueba._
   **4 PTOS**

### PARTE 2 | CRUD

3. Realiza las siguientes inserciones:
    - El primer usuario, utilizando la información que se facilita en el fichero **data >`users.json`**.
    - Inserta otro registro con tus datos (sólo nombre y apellido reales)
    - Inserta un producto del fichero **data >`products.json`**

_Utiliza cualquier cliente de la bbdd para realizar esta actividad_
_Las queries utilizadas pegalas en el fichero paste-queries.js_

   **1 PTO**

Utiliza el código que se facilita en la carpeta `starter_code` y complétalo:

4. Crea la conexión a la base de datos que has creado, en el fichero `database.js`
   **1 PTO**


| Actividad | Descripción | Nombre de la función|Puntuación|
|-----|-------------|-------|--------|
| 5 | Inserta un usuario | `insertUser`|**1 PTO**|
| 6 | Lista todos los usuarios| `listUsers`|**1 PTO**|
| 7 | Borra un usuario | `deleteUser`|**1 PTO**|
| 8 | Inserta un producto| `insertProduct`|**1 PTO**|
| 9 | Lista todos los productos| `listProducts`|**1 PTO**|
| 10 | Borra un producto | `deleteProduct`|**1 PTO**|
| 11 | Compra un producto| `addProductToShoppingCart`|**1 PTO**|
| 12| Revisa un producto | `addReviewToProduct`|**1 PTO**|

13. Realiza la exportación de la base de datos e incluye el fichero en la carpeta data
    **1 PTO**.

Sube el código a GitHub y realiza el pull request para entregar el ejercicio.
