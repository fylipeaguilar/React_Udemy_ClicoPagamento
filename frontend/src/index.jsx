import React from 'react'
import ReactDOM from 'react-dom'

//Importando o "createStrore" para uso do redux
//O método applyMiddleware é para  aguardar
//o retorno da requisição assincrona de consulta dos dados
import { applyMiddleware, createStore } from 'redux'
//Importando o "Provider" para fazer a integração do React com o Redux
import { Provider } from 'react-redux'

//Para aguardar o retorno da requisição assincrona de consulta dos dados
import promise from 'redux-promise'
// Importando os meaddle para ...
import multi from 'redux-multi'
import thunk from 'redux-thunk'

//Importando o arquivo app.jsx
import App from './main/app'
//Importar o Reducers (os que criamos)
import reducers from './main/reducers'



//Para fazer o plug do "redux" no Chrome funcionar
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
      && window.__REDUX_DEVTOOLS_EXTENSION__()


//Criar os Stores
//Promise: Promessa 
const store = applyMiddleware(multi, thunk, promise)(createStore)(reducers, devTools)


ReactDOM.render(
    // O "app" do document.getElementById deve ser o mesmo valor
    // inserido no arquivo index.html
    <Provider store={store}>
        <App/>
    </Provider>,

    document.getElementById('app')
)