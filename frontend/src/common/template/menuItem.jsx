import React from 'react'

// ******** Novo **********//
// Antes era sem o React Router
import { Link } from 'react-router'

export default props => (
    <li>
        {/* Utilizando o  React Router */}
        <Link to={props.path}>
            <i className={`fa fa-${props.icon}`}></i>
            <span>{props.label}</span>
        </Link>
        

        {/* ********* Antes **********
        <a href={props.path}>
            <i className={`fa fa-${props.icon}`}></i>
            <span>{props.label}</span>
        </a> */}
    </li>
)