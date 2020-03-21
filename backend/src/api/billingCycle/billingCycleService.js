//Criando o objeto
const BillingCycle = require('./billingCycle')
const errorHandler = require('../common/errorHandler')

//Mapeando/liberando os métodos que serão usados na API
BillingCycle.methods(['get', 'post', 'put', 'delete'])

//Essa linha de comando é para que seja feita a validação
//também para o método PUT, pois no padrão do método PUT
//o sistema "burla" e não faz o check.
BillingCycle.updateOptions({
    //Para retornar o nome objeto e não o antigo
    new: true,

    //Para rodar a validaçaõ do PUT
    runValidators: true
})

//Aplicando o middle de erro
//Interceptando o erro após a requisiação do post e put
BillingCycle.after('post', errorHandler).after('put', errorHandler)


// *************** ANTIGO *********************
// //Criando um serviço para contar quantos registros tem inseridos
BillingCycle.route('count', (req, res, next) => {
    //Esse método receberá uma callback
    BillingCycle.count((error, value) =>{
        //Value será um valor inteiro
        //Vamos colocar esse valor dentro de um objeto
        //Mas primeiro vamos tratar o erro
        if(error){
            res.status(500).json({errors: [error]})
        } else {
            res.json({value})
        }
    })
})


// *************** NOVO *********************
BillingCycle.route('summary', (req, res, next) => {

    // O método "aggregate" é uma pipeline (sequência do método)
    BillingCycle.aggregate([{ 
        //Projetar ou extrair de dentro do objeto
        $project: {
            credit: {$sum: "$credits.value"},
            debt: {$sum: "$debts.value"}} 
    }, { 
        $group: {
            // O id "null" é para não ter critério de agrupamento
            _id: null,
            // O atributo "credit" não é o mesmo no anterior
            // Já a variável "$credit" é o resultado do antributo anterior
            credit: {$sum: "$credit"}, 

            // O atributo "debt" não é o mesmo no anterior
            // Já a variável "$debt" é o resultado do antributo anterior
            debt: {$sum: "$debt"} 
        }
    }, { 
        $project: {
            _id: 0, // (0) Para NÃO aparecer no resultado final
            credit: 1, // (1) Para aparecer no resultado final
            debt: 1 // (1) Para aparecer no resultado final
        }
    }], (error, result) => {
        if(error) {
            res.status(500).json({errors: [error]})
        } else {
            res.json(result[0] || {credit: 0, debt: 0})
        }
    })
})


module.exports = BillingCycle