import '../common/template/dependencies'
import React from 'react'

//Importando o Header
import Header from '../common/template/header'
//Importando o sidebar
import SideBar from '../common/template/sideBar'
//Importando o Footer (rodapé da aplicação)
import Footer from '../common/template/footer'

//Importando o arquivo responsável pelas rotas
import Routes from './routes'

//Importando o "messages" para mostrar o css
import Messages from '../common/msg/messages'

export default props => (
    // wrapper é uma classe do admin LTE
    <div className='wrapper'>
    
        {/* Instanciando a tag Header */}
        <Header />
        
        {/* Instanciando a tag Sidebar */}
        <SideBar />

        {/* Entre o sidebar e o footer teremos uma div
        que é a div que vai ter o conteúdo da nossa aplicação */}

        <div className='content-wrapper'>
            <Routes />
        </div>

        {/* Instanciando o Footer */}
        <Footer />

        {/* Instanciando componente Messages*/}
        <Messages /> 

    </div>
)