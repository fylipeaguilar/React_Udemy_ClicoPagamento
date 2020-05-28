import React from 'react'

//Importando do React-Router
// Obs.: O indexRouter foi adicionado na aula 185
import {Router, Route, IndexRoute, Redirect, hashHistory}  from 'react-router'

// Obs.: Esse import foi adicionado na aula 185
import App from './app'

// import App from './app'
//****************** SEM O REDUX **************************************/
// //Os componetes que entram nas rotas tem que ser importados
// import Dashboard from '../dashboard/dashboard'
import Dashboard from '../dashboard2/dashboard2'
//****************** SEM O REDUX **************************************/
import BillingCycle from '../billingCycle/billingCycle'


export default props => (
    <Router history={hashHistory}>
        {/* Obs.: Esse trecho foi adicionado na aula 185 */}
        <Route path='/' component={App}>
            <IndexRoute component={Dashboard}></IndexRoute>
            <Route path='billingCycles' component={BillingCycle}></Route>
        </Route>
       
        <Redirect from='*' to='/'></Redirect>
        {/* Fim do código adicionado */}

        {/* Código antigo */}
            {/* <Route path='/' component={Dashboard}></Route>
            <Route path='/billingCycles' component={BillingCycle}></Route>
            <Redirect from='*' to='/'></Redirect> */}
        {/* Fim do Código antigo */}
    </Router>
)