import {combineReducers } from 'redux';
import logonReducer from './logonReducer';

const rootReducer = combineReducers({ logonReducer });

export default rootReducer;