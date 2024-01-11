import { Schema, model } from 'mongoose';

const shopSchema = new Schema({
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
    phone: {
        type: Number,
        required: true
    },
    id_user: {
        ref: "Users",
        type: Schema.Types.ObjectId
    },
    id_game: {
        ref: "Games",
        type: Schema.Types.ObjectId
    },
    image: {
        type: String,
        required: false,
        default: "https://cdn3.vectorstock.com/i/1000x1000/38/02/game-user-logo-icon-design-vector-22953802.jpg"
    }
}, {
    timestamps: true,
    versionKey: false
});

export default model('Shops', shopSchema);