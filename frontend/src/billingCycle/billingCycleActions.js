// Importando o axios para fazer a conexao com a base de dados
import axios from 'axios'

// Impontando os reset para reset de formulários
import { reset as resetForm, initialize } from 'redux-form'
import { showTabs, selectTab } from '../common/tab/tabActions'

// Importando o "toastr"
import { toastr } from 'react-redux-toastr'

// Configurando o endereço que o axion vai acessar a nossa API
// Obs.: Para funcionar o nosso servidor de backend tem que estar em pé
// Diretório: d/Cursos_Aprendizados/Udemy/React/my-money-app/frontend
// Comando: npm run dev
const BASE_URL = ' http://localhost:3003/api'

// Criando uma constante para carregar os valores iniciais da aplicação
const INITIAL_VALUES = {credits:[{}], debts:[{}]}

// Funcao para coletar os dados do ciclo de pagamento
export function getList() {

    // Usando a metodologia de uma API Restful
    const request = axios.get(`${BASE_URL}/billingCycles`)
     
    // Chamando o retorno dos dados para evoluir o estado e renderizar os dados
    return {

        // "ID da action"
        type: 'BILLING_CYCLES_FETCHED',
        // Payload é o resultado da requisicao
        payload: request

    }

}

// funcao para criar um ciclo de pagamento
export function create(values) {

    return submit(values, 'post')
    
}

// funcao para atualização do ciclo de pagamento
export function update(values) {

    return submit(values, 'put')

}

// funcao para atualização do ciclo de pagamento
export function remove(values) {

    return submit(values, 'delete')

}

// funcao de "reuso" para create, update e delete
// Essa funcao irá receber os valores e os métodos
function submit(values, method) {

    return dispatch => {

        // console.log(values) // o axion retorna uma promise
        // ********** ANTES **************** //
        //axios.post(`${BASE_URL}/BillingCycles`, values)

        // ********** Parametrizando o método **************** //

        // Estams criando essa constante para passar o valor do "id"
        // O valor de "id" virá dentro da variável "values"
        // para os métodos de update e delete
        const id = values._id ? values._id : ''

        // Podemos passar o nome de uma função dentro de cochetes 
        axios[method](`${BASE_URL}/BillingCycles/${id}`, values)
            .then(resp => {

                toastr.success('Sucesso', 'Operação Realizada com sucesso.')
                // O dispatch recebe uma action
                // So podemos ter um dispatch de um array
                // porque estamos usando o meaddle multi
                dispatch(
                    // [

                    init()

                    // ******* ANTES *******************//
                    // resetForm('billingCycleForm'),
                    // getList(),
                    // selectTab ('tabList'),
                    // showTabs('tabList', 'tabCreate')

                // ])
                )

            })
            .catch(e => {

                // O erros é sempre um array
                e.response.data.errors.forEach(error => toastr.error('Erro', error));

            })    

    }

}

export function showUpdate(billingCycle) {

    // Recornando um array de actions pelo meaddle mult
    return [
        // Mostrando a aba que eu quero exibir
        showTabs('tabUpdate'),
        // Deixar a aba ativa
        selectTab('tabUpdate'),
        // Utilizando o initialize para trazer os dados
        // na aba de "alterar"
        // initialize recebe 2 parametros (string(nome), object(dados))
        initialize('billingCycleForm', billingCycle)
    ]

}

export function showDelete(billingCycle) {

    // Recornando um array de actions pelo meaddle mult
    return [
        // Mostrando a aba que eu quero exibir
        showTabs('tabDelete'),
        // Deixar a aba ativa
        selectTab('tabDelete'),
        // Utilizando o initialize para trazer os dados
        // na aba de "alterar"
        // initialize recebe 2 parametros (string(nome), object(dados))
        initialize('billingCycleForm', billingCycle)
    ]

}

export function init() {

    return[
        showTabs('tabList', 'tabCreate'),
        selectTab('tabList'),
        getList(),
        initialize('billingCycleForm', INITIAL_VALUES)
    ]

}