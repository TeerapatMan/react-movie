const cktype = ( state = [], action ) => {
    switch (action.type){
        case "API":
        return [...action.data]
        default:
        return state
    }
}

export default cktype;