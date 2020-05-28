// Importando o componente do React
import React, { Component } from 'react'
// Importando o componente de Grid
import Grid from '../common/layout/grid'
// Importando o componente Row
import Row from '../common/layout/row'
// Importando o componente do ValueBox
// ValueBox é a caixa dos valores consolidados
import ValueBox from '../common/widget/valueBox'

export default ({credit, debt}) => (

    <Grid cols='12'>
        <fieldset>
            <legend>Resumo</legend>
            <Row>
                {/* ValeuBox consolidado dos créditos */}
                <ValueBox cols='12 4' color='green' icon='bank' value={`R$ ${credit}`}
                        text='Total de Créditos'></ValueBox>
                {/* ValeuBox consolidado dos débitos */}
                <ValueBox cols='12 4' color='red' icon='credit-card' value={`R$ ${debt}`}
                        text='Total de Débitos'></ValueBox>
                {/* ValeuBox consolidado dos resultante */}
                <ValueBox cols='12 4' color='blue' icon='money' value={`R$ ${credit - debt}`}
                        text='Valor consolidado'></ValueBox>
            </Row>
        </fieldset>
    </Grid>

)

    