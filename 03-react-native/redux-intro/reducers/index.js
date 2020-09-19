import { combineReducers } from 'redux';

import spinnerReducer from './spinnerReducer';
import calculatorReducer from './calculatorReducer';
import bugsReducer from './bugsReducer';

const rootReducer = combineReducers({
    spinnerState : spinnerReducer,
    calculatorState : calculatorReducer, 
    bugsState : bugsReducer
});

export default rootReducer;