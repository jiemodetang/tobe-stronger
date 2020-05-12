import { combineReducers } from 'redux';
import _assign from 'lodash/assign';
import {
    isLogin,
    reactHooks
} from './initData/initData';

let reducers = _assign({
    isLogin,
    reactHooks
});
export default combineReducers(reducers);
