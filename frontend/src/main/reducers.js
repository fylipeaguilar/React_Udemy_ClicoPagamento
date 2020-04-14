// Precisamoes utilizar o método do redux "combineReducers"
import { combineReducers } from 'redux'

// Importando o Redux Form
import { reducer as formReducer } from 'redux-form'

// Declarando o "reducer" das mensagens
import { reducer as toastrReducer } from 'react-redux-toastr'


// Precisamos importar o "DashBoardReducer"
import DashboardReducer from '../dashboard/dashboardReducer'

// Importando o Reducer para as "ABAS"
import TabReducer from '../common/tab/tabReducer'

// Importando o Reducer para BillingCylcle
import BillingCylcleReducer from '../billingCycle/billingCycleReducer'

const rootReducer = combineReducers({

    // **** ATRIBUTOS DO STADO GLOBAL DA APLICACAO******//
    // O reducer é uma função pura e recebe 2 parametros
    // parâmetros: (estado, ação que foi disparada para que o reducer fosse chamado)
    dashboard: DashboardReducer,
    tab: TabReducer,
    billingCycle: BillingCylcleReducer,
    form: formReducer,
    tosatr: toastrReducer

    // ********** ANTIGO: Fixo para teste *****************
    // dashboard: () => ({summary: {credit: 100, debt: 50}})
})

export default rootReducer