const _ = require('lodash')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const User = require('./user')
const env = require('../../.env')

// Expressão regular para validar um e-mail
// Espera receber uma "string"@"string"."string"
// Exemplo: usuario@dominio.com
const emailRegex = /\S+@\S+\.\S+/

// Expressão regular para validar uma senha
// Regras para a senha
// - Tem que ter letras
// - Tem que ter letras minúsculas
// - Tem que ter letras maiúsculas
// - Tem que ter caracteres especiais 
// - Mínimo de 6 e máximo de 20 dígitos
const passwordRegex = /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{6,20})/


// Método para tratar os erros de banco de dados
const sendErrorsFromDB = (res, dbErrors) => {
    const errors = []
    _.forIn(dbErrors.errors, error => errors.push(error.message))
    return res.status(400).json({ errors })
}