// Esse componente vai ser usado/chamado no arquivo "BillingCycle.jsx"
import React, { Component } from 'react'

// O BillingCycleList precisa se tranformar no container
// Assim ele precisa estar conectado ao Redex através do React-Redux
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getList } from './billingCycleActions'


class BillingCycleList extends Component {

    // Criando o método do ciclo de vida do Reducer
    componentWillMount () {

        this.props.getList()
        console.log(this.props.list)

    }


    render () {

        // Retorna uma expressão com o nosso jsx
        return (

            <div>
                <table className='table'>
                    <thead>
                        <tr>
                            {/* Cabecalho */}
                            <th>Nome</th>
                            <th>Mes</th>
                            <th>Ano</th>
                        </tr>
                        <tbody>

                        </tbody>
                    </thead>
                </table>
            </div>


        )

    }

}

const mapStateToProps = state => ({ list: state.billingCycle.list })
const mapDispatchToProps = dispatch => bindActionCreators ( { getList }, dispatch )

export default connect(mapStateToProps, mapDispatchToProps) (BillingCycleList)