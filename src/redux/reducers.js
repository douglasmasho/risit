import {combineReducers} from "redux";


const testReducer = (state = [],action)=>{
    switch (action.type){
        case "ADD_TEST": return [...state, action.item];
        default: return state;   
    }
}

const receiptReducer = (state = [],action)=>{
    switch (action.type){
        case "ADD_ITEM": return [...state, action.item];
        default: return state;   
    }  
}

const rootReducer = combineReducers({
    test: testReducer,
    receiptItems: receiptReducer
})

export default rootReducer