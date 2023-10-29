import {combineReducers, configureStore} from '@reduxjs/toolkit';
import authReducer from './slices/auth';
import {api} from '../services/auth';

// Redux Persist imports
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import {reduxStorage} from './storage';

// Persist configuration
const persistConfig = {
  key: 'root',
  storage: reduxStorage,
  blacklist: [api.reducerPath],
};

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    [api.reducerPath]: api.reducer,
    auth: authReducer,
  }),
);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(api.middleware),
});

export const persistor = persistStore(store);
