import {combineReducers } from 'redux';
import logonReducer from './logonReducer';
import registerReducer from './registerReducer';

const rootReducer = combineReducers({ logonReducer, registerReducer });

export default rootReducer;