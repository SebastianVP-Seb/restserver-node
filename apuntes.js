/*
REST SERVER
Permite a parte de servir contenido estático, regresar info en formato json.
Se podrán hacer peticiones get, post put, delete, patch.

Crear el npm init -y -> Crea el package.json
app.js
npm i express -> para crear el webserver
npm i dotenv -> para configurar vars de entorno
Ir a npm express (en Google) y copiar el párrafo del express require en el app.js Cambiar la function
por un arrow function
Correr la aplicación con: node app
Crear archivo .env y definir el puerto
Usar el requite de dotenv
Modificar el app.listen: definiendo el puerto de la var de entorno y agregando el callback

Express en clases: 
Carpeta "models"
server.js
Lo siguiente estaba en app.js, se ha movido a server.js
------------------------------------
const express = require('express')
const app = express()
 
app.get('/', (req, res)=> {
  res.send('Hello World')
})
 
app.listen(process.env.PORT,()=>{
    console.log('Servidor corriendo en el puerto: ',process.env.PORT);
})
-----------------------------------
Crear la instancia de la clase en app.js
En app.js mandar a llamar el método del puerto, con la instancia de la clase Server

Configurando carpeta pública:
carpeta "public" -> index.html -> "!" Para poner el llenado básico del html
Aquí se puede poner el sitio web
En el constructor poner el apartado Middlewares (funciones que siempre se ejecutan al levantar el servidor)
Crear el método middlewares
La palabra "use" indica que se trata de un middleware

Peticiones http:
    get: se establece el path al que se le quiere pedir algo y res es la respuesta (Postman)
    Se puede cambiar el res.send por res.json y gral se mandará un objeto
    put: para actualizar
    post: para crear nuevos recursos (como un nuevo usuario)
    delete: para borrar

Cors:
Dará acceso a nuestra REST API a sólo ciertas págs web o a todas, dependiendo de nosotros, permite
proteger el servidor de manera superficial. Es un middleware porque usa la palabra use. La lista
blanca permitirá el acceso a las urls que vengan en ella, lo contrario a la lista negra. Teniendo
la lista blanca ya no es necesaria la lista negra.
Siempre se debe configurar el cors. Poner en el método creado de middlewares en server.js, e importarlo.

Separar las rutas y los controladores del server.js:

-------------------------------------------- Así se tenía
    rutas(){
        this.app.get('/joss', (req, res)=> {
            // res.status(403).json({ Para mandarle un status
            res.json({
                nombre:'Sebastian',
                edad:24,
                peticion:'get'
            });
        })

        this.app.put('/joss', (req, res)=> {
            res.json({
                nombre:'Sebastian',
                edad:24,
                peticion:'put'
            });
        })

        this.app.post('/joss', (req, res)=> {
            res.json({
                nombre:'Sebastian',
                edad:24,
                peticion:'post'
            });
        })

        this.app.delete('/joss', (req, res)=> {
            res.json({
                nombre:'Sebastian',
                edad:24,
                peticion:'delete'
            });
        })

        this.app.patch('/joss', (req, res)=> {
            res.json({
                nombre:'Sebastian',
                edad:24,
                peticion:'patch'
            });
        })
    }
-----------------------------------------------------------
Carpeta routes -> usuarios.js este archivo manejará las determinadas rutas. (Rutas relacionadas a los
  usuarios)
Mandar a llamar la f Router
Cambiar this.app por router
En server.js agregar un middleware al método routes (por ruta, como un condicional)
Definir el path como una propiedad en el constructor
Separar el controlador de las rutas (de usuarios.js)
Carpeta controllers -> usuarios.js (este nombre del archivo debe coincidir con el nombre del 
  archivo usuarios de la carpeta routes)
Cortar el callback de las rutas del archivo usuarios.js de routes
Pegarlo y definirlo como una constante en usuarios.js de controllers
Importar el response para hacer válida la palabra "res" e igualarlo: res=response

Post:
Se puede mandar un body en la petición. Apoyarnos de Postman: Body, raw, json.
Escribir un json válido en el espacio en blanco
Para recibir el body se debe configurar otro middleware en express, para post put o delete (cuando se
  manda un mensaje diciendo que la eliminación de algo ha sido correcta) diciendo que el contenido
  de la petición llegará en formato json. Agregarlo en el método middlewares
Ir al controlador de usuarios post.

Parámetros de segmento y query. Postman. También conocidos como parámetros de segmento
Ir al controlador put y a su respectiva ruta
Para mandar query params: se indican con "?" -> ?q=hola&name=jaz&color=naranja
Para extraer estos parámetros se usa el get en el controlador

Archivo .gitignore (Hacer respaldo en GitHub)
En la consola: 
    git init
    git add .
    git commit -m "Primer commit"    




*/