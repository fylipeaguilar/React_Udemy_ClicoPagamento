// Importando o axios para fazer a conexao com a base de dados
import axios from 'axios'

// // Importando o "toastr"
// import { toastr } from 'react-redux-toastr'

// Configurando o endereço que o axion vai acessar a nossa API
// Obs.: Para funcionar o nosso servidor de backend tem que estar em pé
// Diretório: d/Cursos_Aprendizados/Udemy/React/my-money-app/frontend
// Comando: npm run dev
const BASE_URL = ' http://localhost:3003/api'

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

export function create(values) {

    // console.log(values) // o axion retorna uma promise
    axios.post(`${BASE_URL}/BillingCycles`, values)
        // .then(resp => {

        //     toastr.success('Sucesso', 'Operação Realizada com sucesso.')

        // })
    return {

        type: 'TEMP',
    
    }

}