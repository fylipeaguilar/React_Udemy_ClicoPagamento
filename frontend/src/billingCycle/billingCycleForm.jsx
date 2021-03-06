import React, { Component } from 'react'

// Botão "cancelar": Ligando o componente ao Redux
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// A funcao "reduxForm" é similar ao connect fo "redux"
// Ligando o formulário ao estado do redux
// "Field" é a tag que será usada para controlar os campos do formulário
// "formValueSelector" é responsável por pegar um valor que está dentro do formulário
import { reduxForm, Field, formValueSelector } from 'redux-form'

import { init } from './billingCycleActions'
// Importando o componente para melhorar o layout da tabela
import LabelAndInput from '../common/form/labelAndInput'

// Importano o componete da Grid Crédito
import ItemList from './itemList'

// Importando o componente summário (ValueBox dos consolidados: créditos, débitos e resultante)
import Summary from './summary'

class BillingCycleForm extends Component {

    calculateSummary(){

        const sum = (totalizer, currentValue) => totalizer + currentValue
        //const sum = (t, v) => t + v

        return{
            // credits: é um objeto que tem 2 atributos (nome e valor)
            // o "map" transforma o array de objteos para um array de valores numéricos
            // o "+" é converte o valor da string em um valor numérico
            // "reduce" reduz o valor do array em apenas um valor
            sumOfCredits: this.props.credits.map(c => +c.value || 0).reduce(sum),
            sumOfDebts: this.props.debts.map(d => +d.value || 0).reduce(sum)
        }

    }

    render() {

        // Metodo "handleSubmit" está "decorado" com o reduxForm
        // readOnly: é para deixar somente leitura ou não
        // readOnly: se passar a propriedade o valor é true se não o valor é false
        const { handleSubmit, readOnly, credits, debts } = this.props
        // console.log( handleSubmit )

        const { sumOfCredits, sumOfDebts } = this.calculateSummary()

        return (

            
            <form role='form' onSubmit={ handleSubmit }>
             
                <div className='box-body'>
                    <Field name='name' component={LabelAndInput} readOnly={readOnly}
                        label='Nome' cols='12 4' placeholder='Informe o nome'/>
                    <Field name='month' component={LabelAndInput} type='number' readOnly={readOnly}
                        label='Mês' cols='12 4' placeholder='Informe o mês'/>
                    <Field name='year' component={LabelAndInput} type='number' readOnly={readOnly}
                        label='Ano' cols='12 4' placeholder='Informe o ano'/>
                    <Summary credit={sumOfCredits} debt={sumOfDebts}></Summary>
                    <ItemList cols='12 6' list={credits} readOnly={readOnly}
                        field='credits' legend='Créditos'></ItemList>
                    <ItemList cols='12 6' list={debts} readOnly={readOnly}
                        field='debts' legend='Débitos' showStatus={true}></ItemList>
                </div>
                <div className='box-footer'>
                    <button type='submit' className={`btn btn-${this.props.submitClass}`}>
                        {this.props.submitLabel}
                    </button>
                    <button type='button' className='btn btn-default'
                            onClick={this.props.init}>Cancelar</button>
                </div>

            </form>

       )

   }

}

// "decorando o componente" // Fazendo a conexao com o Redux-Form
BillingCycleForm = reduxForm({form: 'billingCycleForm', destroyOnUnmount: false})(BillingCycleForm)
const selector = formValueSelector('billingCycleForm')

const mapStateToProps = state => ({
    credits: selector(state, 'credits'),
    debts: selector(state, 'debts')
})
const mapDispatchToProps = dispatch => bindActionCreators({init}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleForm)