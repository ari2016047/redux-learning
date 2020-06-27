import * as actionTypes from '../action';

const initialState = {
    results: []
}

const reducer = (state=initialState, action)=>{
    // in below return counter will overwrite the existing state immutably

    switch(action.type){
        case actionTypes.STORE_RESULT:
            return{
                ...state,
                results: state.results.concat({id: new Date(),value: action.result}) 
            }
        case actionTypes.DELETE_RESULT:
            // const id =2;
            // const newArray = [...state.results];
            // newArray.splice(id,1);
            //filter() returns a new array
            const updatedArray = state.results.filter( result=> result.id !== action.resultElId);
            return{
                ...state,
                results: updatedArray  
            }
        default:
            return state;
    }
}

export default reducer;