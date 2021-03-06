//to run > node redux-basics.js
const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
        counter: 0
}

//Reducer
//if state is null state will be initial state
const rootReducer = (state = initialState, action) =>{
    if(action.type === 'INC_COUNTER'){
        return {
            ...state,
            counter: state.counter + 1
        };
    }
    if(action.type === 'ADD_COUNTER'){
        return {
            ...state,
            counter: state.counter + action.value
        };
    }
    return state;
} 

//Store
const store = createStore(rootReducer);
console.log(store.getState());


//Subscription
//store triggers subscription on any change in state/whenver action is dispactched
//{ counter: 0 }
//Subscription  { counter: 1 }
//Subscription  { counter: 11 }
//{ counter: 11 }
store.subscribe(()=>{
    console.log('Subscription ',store.getState());
});

//Dispatching Action
store.dispatch({type:'INC_COUNTER'});
store.dispatch({type:'ADD_COUNTER', value: 10});
console.log(store.getState());

