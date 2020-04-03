// Componente para criarmos as nossas Actions Creates

// Ação de selecionar ABAS
export function selectTab(tabId) {

    // ***** DEBUG *****//
    // console.log(tabId)

    // Como é uma função do tipo Action Creator
    // Vamos retornar retornar um objeto, que tem type, playload
    return {

        type: 'TAB_SELECTED',
        payload: tabId

    }

}

// Exemplificando.
// Vamos receber um método com vários parâmetros, como no exemplo abaixo
// showTabs('tabList', 'tabCreate')

// Usando o spread (showTabs(...tabIds)) = ele vai colocano os valores num array

export function showTabs(...tabIds) {

    // Criando um objeto para informa os atributos de cada aba
    const tabsToShow = {}
    tabIds.forEach( e => tabsToShow[e] = true)

    // Lembrando que toda action tem que ter um atributo "type"
    return {

        type: 'TAB_SHOWED', 
        payload: tabsToShow

    }

}