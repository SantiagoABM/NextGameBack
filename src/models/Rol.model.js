import {Schema, model} from 'mongoose';
const { v4: uuidv4 } = require('uuid');

const rolSchema = new Schema(
    {
        _id: Number,
        name: String,
    }, {
        versionKey: false
    }   
);

export default model("Rols", rolSchema);
