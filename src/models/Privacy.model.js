import {Schema, model} from 'mongoose';

const privacySchema = new Schema(
    {
        _id: Number,
        name: String,
    }, {
        versionKey: false
    }   
);

export default model("Privacy", privacySchema);
