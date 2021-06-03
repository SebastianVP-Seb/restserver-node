const {Router}=require('express');
const { usuariosGet, usuariosPut, usuariosPost, usuariosDelete, usuariosPatch } = require('../controllers/usuarios');

const router=Router();

// Aquí se configurarán las rutas
// res.status(403).json({ Para mandarle un status
router.get('/', usuariosGet);

router.put('/:id', usuariosPut);//Ahora es forzoso mandarle el id
//Después de los : se indica que el valor se obtendrá de manera dinámica


router.post('/', usuariosPost);

router.delete('/', usuariosDelete);

router.patch('/', usuariosPatch);


module.exports=router;