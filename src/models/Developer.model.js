import { Schema, model } from 'mongoose';

const developerSchema = new Schema({
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
    url: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: false,
        default: "https://cdn3.vectorstock.com/i/1000x1000/38/02/game-user-logo-icon-design-vector-22953802.jpg"
    },
    banner: {
        type: String,
        required: false,
        default: "https://assets.kpmg.com/is/image/kpmg/blog-banner-girl-playing-game-on-phone:cq5dam.web.1400.350"
    }
}, {
    timestamps: true,
    versionKey: false
});

export default model('Developers', developerSchema);