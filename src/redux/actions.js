export const addTest = (obj)=>{
    return {
        type: "ADD_TEST",
        item: obj
    }
}

export const addRItem = (rObject)=>{
    return {
        type: "ADD_ITEM",
        item: rObject
    }
}
