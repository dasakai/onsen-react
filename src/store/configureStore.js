import reducer from '../reducers/reducer';
import {createStore} from 'redux';

export function configureStore() {
    return createStore(reducer, {});
}
