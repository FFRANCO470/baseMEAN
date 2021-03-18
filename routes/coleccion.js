//solicitar complemento de express para hacer las rutas
import {Router} from 'express';
//recibir lo que se va a enviar o recibir a la base de datos
import coleccionControllers from '../controllers/coleccion.js';
//crear instancia de redireccionamiento
const router = Router();
router.get('/',coleccionControllers.coleccionGet);
router.get('/',coleccionControllers.coleccionPost);
router.get('/',coleccionControllers.coleccionPut);
router.get('/',coleccionControllers.coleccionDelete);
//exportar la instancia cuando sea requerida o invocada
export default router