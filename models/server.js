const express = require('express');
const cors=require('cors');

class Server{
    //Las propiedades se definene en el constructor
    constructor(){
        this.app = express();//se crea la app de express
        this.port=process.env.PORT;
        this.usuariosPath='/joss/sebastian';

        //middlewares
        this.middlewares();

        //llamado de métodos
        this.rutas();
    }

    //Se define el método de las rutas, es: this.app
    //en el constructor se mandan a llamar los métodos
    rutas(){//Se le pasa la ruta del archivo que va a cargar
        this.app.use(this.usuariosPath,require('../routes/usuarios'));//Modificar el path de usuarios.js
        //de /joss a /, ya que aquí se está poniendo el path
    }

    //Método para escuchar el puerto, el puerto se define como una propiedad (en el constructor)
    listen(){
        this.app.listen(this.port,()=>{
            console.log('Servidor corriendo en el puerto: ',this.port);
        })
    }

    //Método para los middlewares
    middlewares(){
        //cors
        this.app.use(cors());

        //Directorio público
        this.app.use(express.static('public'));//Se le pasa la carpeta que se desea publicar

        //Lectura y parseo del body (Postman)
        this.app.use(express.json());
        //De esta forma, cualquier información que venga de un put, post o delete la convierte a un
        //formato json (javascript object notation)
    }

}

module.exports=Server;