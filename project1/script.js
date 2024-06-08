// Select DOM elements
const counterEl = document.getElementById('Counter');
const incrementEl = document.getElementById('Increment');
const decrementEl = document.getElementById('Decrement');

// Initial state
const initialState = {
    value: 0,
};

// Create reducer function
function counterReducer(state = initialState, action) {
    if (action.type === 'increment') {
        return {
            ...state,
            value: state.value + 1,
        };
    } else if (action.type === 'decrement') {
        return {
            ...state,
            value: state.value - 1,
        };
    } else {
        return state;
    }
}

// Create Redux store
const store = Redux.createStore(counterReducer);

// Render function
const render = () => {
    const state = store.getState();
    counterEl.innerText = state.value.toString();
};

// Subscribe to store updates
store.subscribe(render);

// Initial render
render();

// Button click listeners
incrementEl.addEventListener('click', () => {
    store.dispatch({
        type: 'increment',
    });
});

decrementEl.addEventListener('click', () => {
    store.dispatch({
        type: 'decrement',
    });
});
