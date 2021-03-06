import React from 'react'

export default props => (
    // treeview é um ícone que tem subitens

    <li className='treeview'>
        <a href={props.path}>
            <i className={`fa fa-${props.icon}`}></i>
            <span>{props.label}</span>

            {/* Esse ícone é para dizer se ele está aberto ou fechado */}
            <i className='fa fa-angle-left pull-right'></i>
        </a>
        <ul className='treeview-menu'>
            {props.children}
        </ul>
    </li>
)