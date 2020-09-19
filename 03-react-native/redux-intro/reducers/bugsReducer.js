function bugsReducer(currentState = [], action){
    if (action.type === "INIT_BUGS") 
        return action.payload;
        
    return currentState;
}

export default bugsReducer;