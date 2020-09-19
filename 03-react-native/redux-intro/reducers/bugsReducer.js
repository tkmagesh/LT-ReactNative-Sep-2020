function bugsReducer(currentState = [], action){
    if (action.type === "INIT_BUGS") 
        return action.payload;
    if (action.type === 'ADD_BUG')
        return [...currentState, action.payload];
    return currentState;
}

export default bugsReducer;