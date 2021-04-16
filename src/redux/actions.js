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
export const addInfo = (iObject)=>{
    return {
        type: "ADD_INFO",
        info: iObject
    }
}

export  const removeRItem = (uid)=>{
    return {
        type: "REMOVE_ITEM",
        uid
    }
}

export  const editRItem = (type, payload ,uid)=>{
    return {
        type: "EDIT_ITEM",
        info: {type, payload, uid}
    }
}