import {Schema, model} from 'mongoose';

const serverSchema = new Schema(
    {
        _id: Number,
        name: String,
        abreviature: String
    }, {
        versionKey: false
    }   
);

export default model("Servers", serverSchema);
