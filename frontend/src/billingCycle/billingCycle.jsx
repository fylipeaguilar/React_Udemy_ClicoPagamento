import React, { Component } from 'react'

// Importando os componentes do Redux
// Para deixar a aba "lista" como padrão de exibição
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

// Importando o ComponetHeader (para o cabecalho)
import ComponetHeader from '../common/template/contentHeader'
// Importando o Content (onde estará o conteúdo do ciclo de cadastro)
import Content from '../common/template/content'

//Importando os componentes "TABS"
import Tabs from '../common/tab/tabs'
import TabsHeader from '../common/tab/tabsHeader'
import TabsContent from '../common/tab/tabsContent'
import TabHeader from '../common/tab/tabHeader'
import TabContent from '../common/tab/tabContent'

// Para deixar a aba "lista" como padrão de exibição
//import { selectTab, showTabs } from '../common/tab/tabActions'

// Declarando as actions do BillingCycles
import { init, create, update, remove } from './billingCycleActions'


// Importando a componente com os dados da tabela da lista
import List from './billingCycleList'
// Importando o componente de formulário (Redux-Form)
import Form from './billingCycleForm'

class BillingCycle extends Component { 

    // Vamos chamar o método do ciclo de vida do component
    componentWillMount() {

        // this.props.selectTab('tabList')
        // this.props.showTabs('tabList', 'tabCreate')
        this.props.init()

    }

    render() {

        return (

            <div>
                <ComponetHeader title='Ciclos de pagamentos' small='Cadastro (React-Redux)'/>
                <Content>
                    <Tabs>
                        <TabsHeader>
                            {/* Vamos chamar 4 TabHeader. Um para cada "aba" */}
                            <TabHeader label='Listar' icon='bars' target='tabList' />
                            <TabHeader label='Inclir' icon='plus' target='tabCreate' />
                            <TabHeader label='Alterar' icon='pencil' target='tabUpdate' />
                            <TabHeader label='Excluir' icon='trash-o' target='taDelete' />
                        </TabsHeader>
                        <TabsContent>
                            {/* Vamos chamar 4 TabContent. Um para cada "aba" */}
                            <TabContent id='tabList'>
                                <List />                     
                            </TabContent>
                            <TabContent id='tabCreate'>
                                <Form 
                                    onSubmit={this.props.create}
                                    submitClass='primary'
                                    submitLabel='Incluir'
                                />
                            </TabContent>
                            <TabContent id='tabUpdate'>
                                <Form onSubmit={this.props.update}
                                    submitClass='info'
                                    submitLabel='Alterar'
                                />
                            </TabContent>
                            <TabContent id='tabDelete'>
                                <Form onSubmit={this.props.remove} readOnly={true}
                                    submitClass='danger'
                                    submitLabel='Excluir'
                                />
                            </TabContent>
                        </TabsContent>
                    </Tabs>
                </Content>
            </div>

        )

    }

}


const mapDispatchToProps = dispatch => bindActionCreators({ 
    init, create, update, remove
    // selectTab, showTabs
}, dispatch)

export default connect(null, mapDispatchToProps)(BillingCycle)
