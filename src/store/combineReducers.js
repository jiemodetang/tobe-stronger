import { combineReducers } from 'redux';
import _assign from 'lodash/assign';
import {
    isLogin
} from './initData/initData';

let reducers = _assign({
    isLogin
});
export default combineReducers(reducers);
