import React from 'react'

// Importando o MenuItem
import MenuItem from './menuItem'

//Importando o MenuTree
import MenuTree from './menuTree'


export default props => (
    <ul className='sidebar-menu'>

        {/* Instanciando o MenuItem */}
        {/* Path é para onde está apontando o "click do botão" */}
        {/* label é o nome "palabra que aparecerá após o ícone" */}
        {/* A sequencia "ícone ou palabra" está no arquivo "menuItem.jsx" */}
        <MenuItem path='/' label='Dashboard' icon='dashboard'/>

        {/* Instanciando o MenuTree */}
        <MenuTree label='Cadastro' icon='edit'>
            <MenuItem path='billingCycles'
                label='Ciclos de pagamentos' icon='usd'/>
        </MenuTree>

    </ul>
)