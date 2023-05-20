import { Schema,model } from 'mongoose';

const areaSchema = new Schema({
    Nombre: String,
    Abreviatura: String,
    Estado: String
},{
    timestamps:true,
    versionKey:false

})

export default model('Area', areaSchema)