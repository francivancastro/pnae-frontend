import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default reducers => {
  const persistedReducer = persistReducer(
    {
      key: 'doquintal',
      storage,
      whitelist: ['auth', 'cart'],
    },
    reducers
  );

  return persistedReducer;
};
