import {combineReducers} from 'redux';
import {utils} from './utils';
import {user} from './user';
import {api} from './api';
import {routerReducer} from 'react-router-redux';

export default combineReducers({
    routing : routerReducer,
    user,
    api,
    utils
});
