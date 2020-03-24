//Precisamoes utilizar o método do redux "combineReducers"
import { combineReducers } from 'redux'

//Precisamos importar o "DashBoardReducer"
import DashboardReducer from '../dashboard/dashboardReducer'

const rootReducer = combineReducers({
    // O reducer é uma função pura e recebe 2 parametros
    // parâmetros: (estado, ação que foi disparada para que o reducer fosse chamado)
    dashboard: DashboardReducer


    // ********** ANTIGO: Fixo para teste *****************
    // dashboard: () => ({summary: {credit: 100, debt: 50}})
})

export default rootReducer