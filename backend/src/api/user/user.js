const restful = require('node-restful')
const mongoose = restful.mongoose

// Criando o esquema do usuário para autenticação
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, min: 6, max: 12, required: true }
})

module.exports = restful.model('User', userSchema)