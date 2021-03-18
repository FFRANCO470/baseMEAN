//recurso para crear la coleccion
import mongoose from 'mongoose';
//crear coleccion
const ColeccionShema = mongoose.Schema({
    campo1:{type:String, require:true, maxlength:50, unique:ture},
    campo2:{type:Number, default:1},
    createAt:{type:Date, default:Date.now}
})
//exportar coleccion cuando sea requerida
export default mongoose.model('Coleccion',ColeccionShema)