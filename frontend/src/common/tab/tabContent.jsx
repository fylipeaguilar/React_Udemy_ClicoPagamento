import React, { Component } from 'react'

// Ligando o component para ao estado do redux
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import If from '../operador/if'

class TabContent extends Component {

    render () {

        const selected = this.props.tab.selected === this.props.id
        const visible = this.props.tab.visible[this.props.id]

        return(

            // Para escolher as abas/conteúdos que serão exibidas
            <If test = { visible }>
                <div id={this.props.id} className={`tab-pane ${selected ? 'active' : ''}`}>
                    {this.props.children}
                </div>
            </If>

        )

    }

}

const mapStateToProps = state => ({ tab: state.tab })

export default connect(mapStateToProps)(TabContent)