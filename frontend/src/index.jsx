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

//Importando o arquivo app.jsx
import App from './main/app'
//Importar o Reducers (os que criamos)
import reducers from './main/reducers'

//Criar os Stores
const store = applyMiddleware(promise)(createStore)(reducers)


ReactDOM.render(
    // O "app" do document.getElementById deve ser o mesmo valor
    // inserido no arquivo index.html
    <Provider store={store}>
        <App/>
    </Provider>,

    document.getElementById('app')
)