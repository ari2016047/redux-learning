const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
        counter: 0
}

//Reducer
//if state is null state will be initial state
const rootReducer = (state = initialState, action) =>{
    return state;
} 

//Store
const store = createStore(rootReducer);
console.log(store.getState());

//Dispatching Action

//Subscription