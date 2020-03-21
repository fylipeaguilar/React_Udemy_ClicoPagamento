// É padrão usar a variável do lodash com "_"
const _ = require('lodash')

//Iremos retornar um meaddle 
//Padrão de assinatura de meaddle para express (req, res, next)
module.exports = (req, res, next) => {
    const bundle = res.locals.bundle

    if(bundle.errors) {
        //erros é um array com todas as strings dos erros que foram capturados
        const errors = parseErrors(bundle.errors)
        res.status(500).json({errors})
    } else {
        next()
    }
}

const parseErrors = (nodeRestfulErrors) => {
    const errors = []
    _.forIn(nodeRestfulErrors, error => errors.push(error.message))
    return errors
}