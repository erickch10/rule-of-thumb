import { combineReducers } from 'redux';
import { reducers as featured } from '../Ducks/Featured';
import { reducers as people } from '../Ducks/People';

const rootReducer = combineReducers({
  featured,
  people,
});

export default rootReducer;
