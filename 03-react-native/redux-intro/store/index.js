import { createStore } from 'redux';
import spinnerReducer from '../reducers/spinnerReducer';

const appStore = createStore(spinnerReducer);

export default appStore;