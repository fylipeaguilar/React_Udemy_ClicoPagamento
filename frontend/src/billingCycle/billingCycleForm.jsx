 import React, { Component } from 'react'

 // A funcao "reduxForm" é similar ao connect fo "redux"
 // Ligando o formulário ao estado do redux
 // "Field" é a tag que será usada para controlar os campos do formulário
 import { reduxForm, Field } from 'redux-form'

 class BillingCycleForm extends Component {

    render() {

        // Metodo "handleSubmit" está "decorado" com o reduxForm
        const { handleSubmit } = this.props
        // console.log( handleSubmit )

        return (

            <form role='form' onSubmit={ handleSubmit }>
                <div className='box-body'>
                    <Field name='name' component='input' />
                    <Field name='month' component='input' />
                    <Field name='year' component='input' />
                </div>
                <div className='box-footer'>
                    <button type='submit' className='btn btn-primary'>Submit</button>
                </div>

            </form>

        )

    }

 }

 // "decorando o componente" // Fazendo a conexao com o Redux-Form
 export default reduxForm({form: 'billingCycleForm'})(BillingCycleForm)