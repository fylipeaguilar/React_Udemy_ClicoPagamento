import React from 'react'

//Importando do React-Router
import {Router, Route, Redirect, hashHistory}  from 'react-router'

//Os componetes que entram nas rotas tem que ser importados
import Dashboard from '../dashboard/dashboard'
import BillingCycle from '../billingCycle/billingCycle'


export default props => (
    <Router history={hashHistory}>
        <Route path='/' component={Dashboard}></Route>
        <Route path='/billingCycle' component={BillingCycle}></Route>
        <Redirect from='*' to='/'></Redirect>
    </Router>
)