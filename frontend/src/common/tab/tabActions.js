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