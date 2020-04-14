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
        // console.log(this.props.list)

    }

    renderRows() {

        // Declarando a list para receber os parâmetros
        // ou cria um array vazio
        const list = this.props.list || []

        // O método "map" percorre cada um dos elementos do array
        // e retorna um array de mesmo tamanho (mapeando um array para outro)
        // Essa recebendo um array de objeto e retornando um array de jsx (linha da tabela) 
        return list.map(bc => (
            <tr key={bc._id}>
                <td>{bc.name}</td>
                <td>{bc.month}</td>
                <td>{bc.year}</td>
            </tr>
        ))

    }


    render () {

        console.log(this.props.list)
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
                    </thead>
                    <tbody>
                        {/* Colonado um chamada para renderizar 
                        as linhas dessa tabela */}
                        {this.renderRows()}
                    </tbody>
                </table>
            </div>


        )

    }

}

const mapStateToProps = state => ({ list: state.billingCycle.list })
const mapDispatchToProps = dispatch => bindActionCreators ( { getList }, dispatch )

export default connect(mapStateToProps, mapDispatchToProps) (BillingCycleList)