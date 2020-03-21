const express = require('express')

//Para receber o servidor como parâmetros
module.exports = function(server) {

    // Definir URL base para todas as rotas
    const router = express.Router()

    //Sempre que a URL começar com "api", ela será direciona para "router"
    server.use('/api', router)

    //Mapeamento das rotas relacionadas ao clico de pagamento
    const BillingCycle = require('../api/billingCycle/billingCycleService')
    BillingCycle.register(router, '/billingCycles')
}