import {Schema, model} from 'mongoose';

const postSchema = new Schema({
    id: {
        type: Number,
        unique: true,
        required: true
    },
    id_user: {
        ref: "Users",
        type: Schema.Types.ObjectId
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: false
    },
    date_update: {
        type: Date,
        required: true
    },
    id_game: {
        ref: "Games",
        type: Schema.Types.ObjectId,
        required: false
    },
    id_server: {
        ref: "Servers",
        type: Schema.Types.ObjectId,
        required: true
    },
    id_privacy: {
        ref: "Privacy",
        type: Schema.Types.ObjectId,
        required: true
    },
    likes: [{
        ref: "Users",
        type: Schema.Types.ObjectId
    }],
    reposts: [{
        ref: "Users",
        type: Schema.Types.ObjectId
    }], 
    reports: [{
        ref: "Users",
        type: Schema.Types.ObjectId
    }],
    },{
        timestamps: true,
        versionKey: false
    });

export default model("Posts", postSchema);
