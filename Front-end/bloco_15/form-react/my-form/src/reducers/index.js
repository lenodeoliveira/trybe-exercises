const INITIAL_STATE = {
    name: '',
}

function reducerForm(state = INITIAL_STATE, action) {

    switch (action.type) {
        case 'ADD_FORM':
            return {
                ...state, 
                name: action.name,
             };
    
        default:
            return state;
    }
}

export default reducerForm;
