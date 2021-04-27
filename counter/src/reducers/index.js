const INITIAL_STATE = {
    counter: 0
}
// REDUCER
export function counterApp(state = INITIAL_STATE, action) {
   console.log(state,action);

    switch (action.type) {
        case 'INCREMENT':
            return { counter: state.counter + 1}
        case 'DECREMENT':
            return { counter: state.counter - 1}
        case 'RESET':
            return { counter: 0}
        default:
            console.log('In Default');
            return state
    }
}
