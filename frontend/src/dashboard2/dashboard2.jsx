//Alem do "react" temos que importar também o "componet"
import React, {Component} from 'react'


//*************************** SEM REDUX ******************************************//
// //Import para integrar esse componet ao stado gerencial do redux
// import { connect } from 'react-redux'
// //Import  método "bindActoinCreators" para ligar dentro do componet um actionCreator
// import { bindActionCreators } from 'redux'
// //Importando a acition
// import { getSummary } from './dashboardActions'

//Precisamos importar o axios que é nosso cliente HTTP
//É a partir dele que faremos as requisições no nosso backend
import axios from 'axios'

//Criando uma constante para acessar os dados do mongo atravez
//da nossa API (neste caso será um URL local)
const BASE_URL = 'http://localhost:3003/api'
//********************************************************************************//


//Importando os "content"
import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'

//Importando o component do ValueBox
import ValueBox from '../common/widget/valueBox'

//Importando o componente Row
import Row from '../common/layout/row'


// ************ ANTES - Usado para teste **********//
export default class Dashboard2 extends Component {

    //Criando o construtor do objeto
    constructor(props) {
        //Inicializar o estado do objeto
        //Obrigado a chamar o método super
        super(props)

        //Criando o estado com 2 atributos
        this.state = { 

        }


    }

    //Pra chamar a função getSummary, temos que chamar uma função
    //sempre que o componete for reenderizado
    //Componente do "ciclo de vida"
    componentWillMount(){
        //vamos chamar o método "then" da Promise
        axios.get(`${BASE_URL}/billingCycles/summary`)
            .then(resp => this.setState(resp.data))
    }

    render() {
        const { credit, debt } = this.state
        return (
            <div>
                <ContentHeader title='Dashboard' small='Versão 2.0 - Sem Redux'/>
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

// ******************* SEM O REDUX **********************************************//
// //Metodo (mapStateToProps)
// const mapStateToProps = state => ({summary: state.dashboard.summary})

// //bindActionCreators: Ligando a action create ao component dispatch
// const mapDispatchToProps = dispatch => bindActionCreators({getSummary}, dispatch)

// //Temos que exportar os dados para passar para outro component
// //Novo export usando o redux
// export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)


//********** ANTES de usar o Redux ******/
// export default Dashboard 

// ************ ANTES - Usado para teste **********//
// export default props => (
//     <div>
 
//         <h1>Dashboard</h1>
//     </div>
// )