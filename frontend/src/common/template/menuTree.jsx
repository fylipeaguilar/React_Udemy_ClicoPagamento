import React from 'react'

export default props => (
    // treeview é um ícone que tem subitens

    <li className='treeview'>
        <a ref>
            <i className={`fa fa-${props.icon}`}></i>{props.label}

            {/* Esse ícone é para dizer se ele está aberto ou fechado */}
            <i className='fa fa-angle-left pull-right'></i>
        </a>
        <ul className='treeview-menu'>
            {props.children}
        </ul>
    </li>
)