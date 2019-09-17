import { applyMiddleware, createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import rootReducer from '../Reducers';
import { REDUX_PERSIST_CONFIG } from './config';

const persistedReducer = persistReducer(REDUX_PERSIST_CONFIG, rootReducer);

export const configureStore = (initialState) => {
  let store = createStore(
    persistedReducer,
    initialState,
    applyMiddleware(thunk),
  );
  let persistor = persistStore(store);

  return { persistor, store };
}
