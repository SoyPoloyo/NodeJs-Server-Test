

const { Schema, model } = require('mongoose');

const UsuarioSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio']
    },
    correo: {
        type: String,
        required: [true, 'El correo es obligatorio'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'La contraseña es obligatoria']
    },
    img: {
        type: String,
    },
    rol: {
        type: String,
        required: true,
        //emun valida que solo acepte estas opciones****
        emun: ['ADMIN_ROLE', 'USER_ROLE']
    },
    estado: {
        type: Boolean,
        default: true
    },
    google: {
        type: Boolean,
        default: false
    }

});

//se pueden crear metodos o sobreescribir existentes
//sobreescribimos el toJSON para que devuelva solo que queremos al mostrar info de forma global
UsuarioSchema.methods.toJSON = function (params) {
    const {__v, password, ...usuario} = this.toObject();
    return usuario
}


module.exports = model('Usuario', UsuarioSchema);