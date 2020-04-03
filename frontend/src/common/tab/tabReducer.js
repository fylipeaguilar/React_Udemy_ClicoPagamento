// Esse componente é para redenciar o estado do componente
// do arquivo "tabActions"

// Teremos no stado inicial
const INITIAL_STATE = { select: '', visible: {} }


// Quando uma acao é chamada esse método é disparado
export default (state = INITIAL_STATE, action) => {

    switch (action.type) {

        case 'TAB_SELECTED':
            // Vai retornar o próprio estado e o atributo "action.payload"
            return { ...state, selected: action.payload }

        case 'TAB_SHOWED':
            // Vai retornar o próprio estado e o atributo "action.payload"
            // Vai retorar as abas que devem ser exibidas do arquivo "tabActions"
            return {...state, visible: action.payload}

        // Se ocorrer um outro evento que não seja esse
        default: 
            // É para retornar o estado dá forma que está
            return state
    }

}