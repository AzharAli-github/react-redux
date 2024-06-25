import {createStore} from 'redux';
import BookReducer from './Reducer';

const store = createStore(BookReducer)

export default store;