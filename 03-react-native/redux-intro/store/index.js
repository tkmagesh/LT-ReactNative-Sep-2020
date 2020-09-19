import { createStore, applyMiddleware } from 'redux';
//import spinnerReducer from '../reducers/spinnerReducer';
import rootReducer from '../reducers';


/* 
function loggerMiddleware(store){
    return function(next){
        return function(action){
            console.log(action.type);
            next(action);
        }
    }
} 
*/

const loggerMiddleware = (store) => (next) => (action) => {
    console.log(action.type);
    console.log('Before -> ', store.getState())
    console.log(action);
    next(action);
    console.log("After -> ", store.getState());
}

const asyncMiddleware = store => next => action => {
    if (typeof action === 'function'){
        return action(store.dispatch)
    }
    return next(action);
}

//const appStore = createStore(spinnerReducer);
const appStore = createStore(
  rootReducer,
  applyMiddleware(loggerMiddleware, asyncMiddleware)
);


export default appStore;