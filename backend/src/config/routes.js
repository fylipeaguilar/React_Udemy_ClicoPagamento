const express = require('express')

const auth = require('./auth')

//Para receber o servidor como parâmetros
module.exports = function(server) {

    // **** Rotas protegidas por Token JWT *******//
    const protectedApi = express.Router()
    server.use('/api', protectedApi)
    protectedApi.use(auth)
    const BillingCycle = require('../api/billingCycle/billingCycleService')
    BillingCycle.register(protectedApi, '/billingCycles')


    /********* Rotas abertas *******/
    const openApi = express.Router()
    server.use('/oapi', openApi)
    const AuthService = require('../api/user/AuthService')
    openApi.post('/login', AuthService.login)
    openApi.post('/signup', AuthService.signup)
    openApi.post('/validateToken', AuthService.validateToken)


    // ****** Antes da implementação da autenticação ********** //
    // // Definir URL base para todas as rotas
    // const router = express.Router()

    // //Sempre que a URL começar com "api", ela será direciona para "router"
    // server.use('/api', router)

    // //Mapeamento das rotas relacionadas ao clico de pagamento
    // const BillingCycle = require('../api/billingCycle/billingCycleService')
    // BillingCycle.register(router, '/billingCycles')
}