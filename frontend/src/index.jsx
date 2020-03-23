import React from 'react'
import ReactDOM from 'react-dom'

// Importando o arquivo app.jsx
import App from './main/app'

ReactDOM.render(
    // O "app" do document.getElementById deve ser o mesmo valor
    // inserido no arquivo index.html
    <App/>, document.getElementById('app')
)