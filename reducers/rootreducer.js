import claimReducer from './claimlistReducer'
import {combineReducers} from 'redux';

export default combineReducers({
    claim: claimReducer
  });