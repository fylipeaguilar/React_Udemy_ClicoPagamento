import React from 'react'

export default props => (
    <header className='main-header'>
        <a href='/#/' className='logo'>
            {/* Teremos 2 logos
            Um pequeno e outra grande */}

            <span className='logo-mini'><b>My</b>M</span>
            <span className='logo-lg'>
                {/* Adicionando ícone (importando da biblioteca do font aweson) */}
                <i className='fa fa-money'></i>
                <b> My</b> Money
            </span>
        </a>

        {/* Criando um botão de navegação */}
        <nav className='navbar navbar-static-top'>
            <a href className='sidebar-toggle' data-toggle='offcanvas'></a>
        </nav>
    </header>
)