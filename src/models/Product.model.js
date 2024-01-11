import { Schema, model } from 'mongoose';

const productSchema = new Schema({
    id: {
        type: Number,
        unique: true,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    stock: {
        type: Number,
        required: true
    },
    id_shop: {
        ref: "Shops",
        type: Schema.Types.ObjectId
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: false,
        default: "https://cdn4.vectorstock.com/i/1000x1000/40/05/product-icon-vector-22944005.jpg"
    }
}, {
    timestamps: true,
    versionKey: false
});

export default model('Products', productSchema);