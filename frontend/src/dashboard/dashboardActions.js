//Precisamos importar o axios que é nosso cliente HTTP
//É a partir dele que faremos as requisições no nosso backend
import axios from 'axios'

//Criando uma constante para acessar os dados do mongo atravez
//da nossa API (neste caso será um URL local)
const BASE_URL = 'http://localhost:3003/api'

export function getSummary() {
    const request = axios.get(`${BASE_URL}/billingCycles/summary`)

    //Retornando o objeto da requisicao
    //Esse objeto é uma ação
    return {
        type: 'BILLING_SUMMARY_FETCHED',
        payload: request
    }
}