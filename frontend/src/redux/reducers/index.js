import { combineReducers } from 'redux';
import PersonReducer from './Persons-reducer';
import { reducer as formReducer } from 'redux-form';

const reducers = {
  personStore: PersonReducer,
  form: formReducer
}

const rootReducer = combineReducers(reducers);

export default rootReducer;
