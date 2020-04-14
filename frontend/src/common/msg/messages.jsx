import React from 'react'

// Importando o ReduxToastr para apresentar as mensagens de erro
import ReduxToastr from 'react-redux-toastr'

// Referência ao css
import 'modules/react-redux-toastr/lib/css/react-redux-toastr.css'

export default props => (

    <ReduxToastr 
        timeOut={4000}
        newestOnTop={false}
        preventDuplicates={true}
        position='top-right'
        transitionIn='fadeIn'
        transitionOut='fadeOut'
        progressBar 
    />

)