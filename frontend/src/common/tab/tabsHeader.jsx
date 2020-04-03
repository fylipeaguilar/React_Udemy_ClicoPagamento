//Componente que vai agrupar os cabelhacos de nossas abas
// Importando o React
import React from 'react'

// Abas = Listas (ul's, li's)
export default props => (
    <ul className='nav nav-tabs'>
        {props.children}
    </ul>
)