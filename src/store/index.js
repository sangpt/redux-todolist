import {createStore} from 'redux';
import reducers from '../reducers';

const initializeState = {
  input: '',
  list: []
}

const store = createStore(reducers, initializeState);

export {store};