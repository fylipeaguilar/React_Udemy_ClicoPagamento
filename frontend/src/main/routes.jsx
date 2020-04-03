import React from 'react'

//Importando do React-Router
import {Router, Route, Redirect, hashHistory}  from 'react-router'

// import App from './app'
//****************** SEM O REDUX **************************************/
// //Os componetes que entram nas rotas tem que ser importados
// import Dashboard from '../dashboard/dashboard'
import Dashboard from '../dashboard2/dashboard2'
//****************** SEM O REDUX **************************************/
import BillingCycle from '../billingCycle/billingCycle'


export default props => (
    <Router history={hashHistory}>
        <Route path='/' component={Dashboard}></Route>
        <Route path='/billingCycles' component={BillingCycle}></Route>
        <Redirect from='*' to='/'></Redirect>
    </Router>
)