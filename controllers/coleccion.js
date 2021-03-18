//para operar sobre la base de datos y las colecciones
import Coleccion from "../models/coleccion.js";
//variable global que contiene los metodos para invocar los protocolos de htpp
const coleccionControllers={
    //objetos para hacer ya sea una peticion, para enviar, para modificar y eliminar
    coleccionGet:async(req,res)=>{
        const variableEnviadaPorFrondEnd = req;
        //funcion que realiza
        const coleccion = await Coleccion(); 
    },
    coleccionPost:async(req,res)=>{
        const variableEnviadaPorFrondEnd = req;
        //funcion que realiza
        const coleccion = await Coleccion(); 
    },
    coleccionPut:async(req,res)=>{
        const variableEnviadaPorFrondEnd = req;
        //funcion que realiza
        const coleccion = await Coleccion(); 
    },
    coleccionDelete:async(req,res)=>{
        const variableEnviadaPorFrondEnd = req;
        //funcion que realiza
        const coleccion = await Coleccion(); 
    }
}
//exportar cuando este arcivo js sea invocado o requerido
export default coleccionControllers