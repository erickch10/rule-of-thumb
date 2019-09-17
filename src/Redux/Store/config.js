import storage from 'redux-persist/lib/storage';

export const REDUX_PERSIST_STORAGE_KEY = 'root';
export const REDUX_PERSIST_WHITELIST = [
  'people',
];

export const REDUX_PERSIST_CONFIG = {
  key: REDUX_PERSIST_STORAGE_KEY,
  storage,
  whitelist: REDUX_PERSIST_WHITELIST,
};
