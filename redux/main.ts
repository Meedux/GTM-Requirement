import { createWrapper } from 'next-redux-wrapper';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import RetrievalReducer from './retrieval/slice';
import UserReducer from './chora/slice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage,
}

const rootReducer = combineReducers({
    retrieval: RetrievalReducer,
    user: UserReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer);

const mainStore = configureStore({
    reducer: persistedReducer
})

export type RootState = ReturnType<typeof mainStore.getState>;
export type AppDispatch = typeof mainStore.dispatch;
export const persistor = persistStore(mainStore);
export default mainStore;
