const INITIAL_STATE = { list: [] }

export default (state = INITIAL_STATE, action) => {

    switch(action.type) {

        case 'BILLING_CYCLES_FETCHED':
            // Essa action retorna o type (BILLING_CYCLES_FETCHED)
            // E o atributo .data (dados do atributo)
            // Nós gente não mexe no valor do atributo e sim no estado
            return { ...state, list: action.payload.data }

        default:
            return state

    }

}