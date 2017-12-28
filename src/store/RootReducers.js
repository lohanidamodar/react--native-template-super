import { combineReducers } from 'redux';
import homeReducer from '../screens/home/reducer';
import authReducer from './reducers/authReducer';


const rootReducer = combineReducers({
  homeState: homeReducer,
  authState: authReducer
});

export default rootReducer;
