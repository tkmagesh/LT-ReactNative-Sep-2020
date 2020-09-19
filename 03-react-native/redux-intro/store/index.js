import { createStore } from 'redux';
//import spinnerReducer from '../reducers/spinnerReducer';
import rootReducer from '../reducers';


//const appStore = createStore(spinnerReducer);
const appStore = createStore(rootReducer);

console.log(appStore.getState());
export default appStore;