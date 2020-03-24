import '../common/template/dependecies'
import React from 'react'

//Importando o Header
import Header from '../common/template/header'
//Importando o sidebar
import Sidebar from '../common/template/sidebar'
//Importando o Footer (rodapé da aplicação)
import Footer from '../common/template/footer'

//Importando o arquivo responsável pelas rotas
import Routes from './routes'

export default props => (
    // wrapper é uma classe do admin LTE
    <div className="wrapper">
    
        {/* Instanciando a tag Header */}
        <Header/>
        
        {/* Instanciando a tag Sidebar */}
        <Sidebar/>

        {/* Entre o sidebar e o footer teremos uma div
        que é a div que vai ter o conteúdo da nossa aplicação */}

        <div className='content-wrapper'>
            <Routes/>
        </div>

        {/* Instanciando o Footer */}
        <Footer/>

    </div>
)