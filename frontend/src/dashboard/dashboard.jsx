//Alem do "react" temos que importar também o "componet"
import React, {Component} from 'react'

//Import para integrar esse componet ao stado gerencial do redux
import { connect } from 'react-redux'

//Import  método "bindActoinCreators" para ligar dentro do componet um actionCreator
import { bindActionCreators } from 'redux'
//Importando a acition
import { getSummary } from './dashboardActions'


//Importando os "content"
import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'

//Importando o component do ValueBox
import ValueBox from '../common/widget/valueBox'

//Importando o componente Row
import Row from '../common/layout/row'


// ************ ANTES - Usado para teste **********//
class Dashboard extends Component {

    //Pra chamar a função getSummary, temos que chamar uma função
    //sempre que o componete for reenderizado
    //Componente do "ciclo de vida"
    componentWillMount(){
        this.props.getSummary()
    }

    render() {
        const { credit, debt } = this.props.summary
        return (
            <div>
                <ContentHeader title='Dashboard' small='Versão 1.0'/>
                <Content>
                    <Row>
                        <ValueBox cols='12 4' color='green' icon='bank'
                            value={`R$ ${credit}`} text='Total de Créditos'/>
                        <ValueBox cols='12 4' color='red' icon='credit-card'
                            value={`R$ ${debt}`} text='Total de Débitos'/>
                        <ValueBox cols='12 4' color='blue' icon='money'
                            value={`R$ ${debt - debt}`} text='Valor Consolidado'/>
                    </Row>
                </Content>
            </div>
        )
    }
}

//Metodo (mapStateToProps)
const mapStateToProps = state => ({summary: state.dashboard.summary})

//bindActionCreators: Ligando a action create ao component dispatch
const mapDispatchToProps = dispatch => bindActionCreators({getSummary}, dispatch)

//Temos que exportar os dados para passar para outro component
//Novo export usando o redux
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)


//********** ANTES de usar o Redux ******/
// export default Dashboard 

// ************ ANTES - Usado para teste **********//
// export default props => (
//     <div>
 
//         <h1>Dashboard</h1>
//     </div>
// )