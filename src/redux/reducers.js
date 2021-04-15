import {combineReducers} from "redux";
import {persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig  = {
    key: "root",
    storage,
    whiteList: ["receiptItems", "donorInfo"]
}

const testReducer = (state = [],action)=>{
    switch (action.type){
        case "ADD_TEST": return [...state, action.item];
        default: return state;   
    }
}

const receiptReducer = (state = [],action)=>{
    switch (action.type){
        case "ADD_ITEM": 
        return [...state, action.item];
        case "REMOVE_ITEM":
            //find the index of the element with the uid that matches with the one to be deleted
            const toBeRemoved = state.findIndex((el)=>el.uid === action.uid);
            console.log(toBeRemoved);
            //remove from state
            state.splice(toBeRemoved, 1);
            console.log(state);
            //return the state
            return [...state]
           default: return state;   

    }  
}

const donorInfoReducer = (state = {},action)=>{
    switch (action.type){
        case "ADD_INFO": return action.info;
        default: return state;   
    }  
}

const rootReducer = combineReducers({
    test: testReducer,
    receiptItems: receiptReducer,
    donorInfo: donorInfoReducer
})

export default persistReducer(persistConfig, rootReducer);