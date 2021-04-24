const INITIAL_STATE = {
    count: 0
}

// REDUCER
function counterApp(state = INITIAL_STATE, action) {
    let nextState = {
        count: state.count
    }
    switch (action.type) {
        case 'ADD':
            nextState.count = state.count + 1
            return nextState
            break;
        case 'MINUS':
            nextState.count = state.count - 1
            return nextState
        case 'RESET':
            nextState.count = 0
            return nextState
        default:
            console.log('In Default');
            return state
    }
}

const store = Redux.createStore(counterApp, INITIAL_STATE);

console.log(store);

const contador = document.getElementById("counter")
const decrementar = document.getElementById("minus")
const incrementar = document.getElementById("add")
const reset = document.getElementById("reset")


function render() {
    console.log('In Render');
    console.log(store.getState());
    var state = store.getState();
    contador.innerHTML = state.count.toString();
}

store.subscribe(render);


// ACTIONS
// incrementar.addEventListener('click', () => {
//     store.dispatch({type: 'ADD'})
// })
document.getElementById('add')
    .addEventListener('click',  () => {
        console.log("ADD");
        store.dispatch({ type: 'ADD' })
    })

// decrementar.addEventListener('click', () => {
//     store.dispatch({type: 'MINUS'})
// })
document.getElementById('minus')
    .addEventListener('click', function () {
        console.log("MINUS");
        store.dispatch({type: 'MINUS'})
    })

// reset.addEventListener('click', () => {
//     console.log("RESET");
//     store.dispatch({type: 'RESET'})
// })
document.getElementById('reset')
    .addEventListener('click', function () {
        store.dispatch({type: 'RESET'})
    })
