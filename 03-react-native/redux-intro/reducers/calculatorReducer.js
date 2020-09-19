function calculatorReducer(currentState = 0, action){
    if (action.type === 'ADD') 
        return action.payload.value1 + action.payload.value2;
    if (action.type === "SUBTRACT")
        return action.payload.value1 - action.payload.value2;
    if (action.type === "MULTIPLY")
        return action.payload.value1 * action.payload.value2;
    if (action.type === "DIVIDE")
        return action.payload.value1 / action.payload.value2;
    return currentState;
}

export default calculatorReducer;