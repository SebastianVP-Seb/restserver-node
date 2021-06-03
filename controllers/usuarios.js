const {response,request}=require('express');

const usuariosGet= (req=request, res=response)=> {//Esta función se manda a llamar en usuarios.js routes
    //no se manda a llamar como función (usuariosGet()), sólo como "usuariosGet", ya que se
    //trata de la referencia
    // res. no reconoce esta palabra si no se hace el require de response, al igual que request

    //Obteniendo los parámetros de la URL. Poner los parámetros en la URL en Postman como:
    // http://localhost:8081/joss/sebastian?q=hola&nombre=jaz&materia=mecanica&name=silvana
    // const query=req.query;
    const {q,name='Fernanda'}=req.query; //Desestructurando
    //Dentro de la desestructuración se pueden igualar los parámetros a valores por defecto,
    //por si no vienen en la URL. Se quita desde la "&"

    res.json({
        nombre:'Sebastian',
        mensaje:'Hola desde el controlador',
        peticion:'get',
        q,
        name
    });
}

const usuariosPut= (req, res)=> {
    // const id=req.params.id; //El .id debe coincidir con el nombre que se haya puesto en la ruta (path)
    const {id}=req.params;

    res.json({
        nombre:'Sebastian',
        mensaje:'Hola desde el controlador',
        peticion:'put',
        id
    });
}

const usuariosPost=(req, res)=> {
    //Para extraer el body de postman. Viene de la request (lo que el usuario solicita)
    const body=req.body;
    // const {Ingeniera,Color}=req.body; también se puede desestructurar del body e ignorar info de más

    res.json({
        nombre:'Sebastian',
        mensaje:'Hola desde el controlador',
        peticion:'post',
        body
    });
}

const usuariosDelete=(req, res)=> {
    res.json({
        nombre:'Sebastian',
        mensaje:'Hola desde el controlador',
        peticion:'delete'
    });
}

const usuariosPatch=(req, res)=> {
    res.json({
        nombre:'Sebastian',
        mensaje:'Hola desde el controlador',
        peticion:'patch'
    });
}



module.exports={
    usuariosGet,usuariosPut,usuariosPost,usuariosDelete,usuariosPatch
}