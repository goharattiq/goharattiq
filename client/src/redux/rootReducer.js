import { combineReducers } from 'redux';
import workReducer from './work/workReducer';

export default combineReducers({
  work:workReducer
});
