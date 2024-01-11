// models/Usuario.js
import { Schema, model } from 'mongoose';

import bcrypt from 'bcryptjs';

const userSchema = new Schema({
    id: {
        type: Number,
        unique: true,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    id_rol: [{
        ref: "Rols",
        type: Schema.Types.ObjectId
    }],
    nick_name: {
        type: String,
        unique: true,
        required: true
    },
    image: {
        type: String,
        required: false,
        default: "https://cdn3.vectorstock.com/i/1000x1000/38/02/game-user-logo-icon-design-vector-22953802.jpg"
    },
    coins: {
        type: Number,
        required: false,
        default: 0
    },
    age: {
        type: Number,
        required: true,
    },
    phone: {
        type: Number,
        required: true,
    },
    id_server: {
        ref: "Servers",
        type: Schema.Types.ObjectId
    },
    id_privacy: {
        ref: "Privacy",
        type: Schema.Types.ObjectId
    },
    reports:{
        ref: "Users",
        type: Schema.Types.ObjectId
    }
}, {
    timestamps: true,
    versionKey: false
});

// Encripta una contraseña utilizando bcrypt
userSchema.statics.encryptPassword = async (password) => {
    // Genera un salt aleatorio con 10 rondas de salado
    const salt = await bcrypt.genSalt(10);
    // Genera el hash de la contraseña utilizando el salt generado
    return await bcrypt.hash(password, salt);
};

// Compara una contraseña en texto plano con una contraseña encriptada
userSchema.statics.comparePassword = async (password, receivedPassword) => {
    // Compara las contraseñas y devuelve un booleano que indica si coinciden o no
    return await bcrypt.compare(password, receivedPassword);
};

// Hook que se ejecuta antes de guardar un documento de usuario
userSchema.pre("save", async function (next) {
    // Obtén una referencia al documento de usuario actual
    const user = this;
    // Verifica si el campo de contraseña ha sido modificado
    if (!user.isModified("password")) {
        // Si no ha sido modificado, continúa con el siguiente middleware/hook
        return next();
    }
    // Genera el hash de la contraseña actualizada
    const hash = await bcrypt.hash(user.password, 10);
    // Actualiza la contraseña en el documento de usuario con el hash generado
    user.password = hash;
    // Continúa con el siguiente middleware/hook
    next();
});

export default model('Users', userSchema);