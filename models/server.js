//solicitar recursos de las dependencias de express y cors
import express from 'express';
import cors from 'cors';
//solicitar informacion de la conexion de base de datos
import dbConnection from '../database/config.js';
//solicitar el arcivo coleccion de la carpeta routes
import coleccion from '../routes/coleccion.js';
//crear la clase de servidor
class Server{
    constructor(){
        //puerto de conexion
        this.port = process.env.PORT;
        //servidor
        this.app = express();
        //conectar con base de datos
        this.app = conectarDB();
        //middlewares
        this.app = middlewares();
        //rutas
        this.app = routes();
    }
    //metodo para conetar con base de datos
    async conectarDB(){
        await dbConnection();
    }
    //metodos para llamar los middlewares
    middlewares(){
        this.app.use(express());
        this.app.use(cors());
        this.app.use(express.static('public'));
    }
    //metodos para las rutas 
    routes(){
        //si alguien el front-end solicita esta ruta retornelo al arcivo coleccion de la carpeta routes
        this.app.use('/api/coleccion',coleccion)
    }
    //metodo para iniciar el servidor
    listen(){
        this.app.listen(this.port, ()=>{
            console.log(`servidor corriendo en el puerto ${this.port}`);
        });
    }
}
//exportar la clase servidor
export default Server