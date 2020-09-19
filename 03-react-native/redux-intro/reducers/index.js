import { combineReducers } from 'redux';

import spinnerReducer from './spinnerReducer';
import calculatorReducer from './calculatorReducer';

const rootReducer = combineReducers({
    spinnerState : spinnerReducer,
    calculatorState : calculatorReducer
});

export default rootReducer;