// Componente que vai agrupar todos os conteúdos de nossas abas
// Importando o React
import React from 'react'

export default props => (
    <div className='tab-content'>
        {props.children}
    </div>
)