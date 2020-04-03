// Vamos criar um componente baseado em classes
import React, { Component } from 'react'

// Importe funcionalidade do Redux "bindActionCreator" e "connect"
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import If from '../operador/if'
import { selectTab } from './tabActions'

class TabHeader extends Component {

    render () { 

        // Avalidando se a aba está selecionada ou não
        // Esse parâmetro (this.props.tab.selected) representa uma string
        const selected = this.props.tab.selected === this.props.target
        const visible = this.props.tab.visible[this.props.target]

        return (

            // Para escolher as abas que serão exibidas
            <If test = { visible }>
                {/* // Estrutura básica para renderezir uma única aba
                // Baseada no template do AdminTLE */}
                <li className={ selected ? 'active' : ''}>
                    {/* O link (javascript:;) é para ignorar qualquer link */}
                    <a href='javascript:;'
                        data-toggle='tab'
                        data-target={this.props.target}
                        
                        // Mapeando o evento do "onClick"
                        onClick={()=> this.props.selectTab(this.props.target)}>
                        <i className={`fa fa-${this.props.icon}`}></i>
                        {this.props.label}
                    </a>
                </li>
            </If>
        )

    }

}

// A variável "tab" do estado do componente (state)
// tem que ter o mesmo nome do arquivo "reducers.js"
const mapStateToProps = state => ({ tab: state.tab })
//Funcao para disparar a acao do estado
const mapDispatchToProps = dispatch => bindActionCreators ({ selectTab }, dispatch)

// Após mapearmos e dispararmos os actionsCreators
// temos que conectar com o nosso componente
export default connect( mapStateToProps, mapDispatchToProps)(TabHeader)