import { createWrapper } from 'next-redux-wrapper';
import { configureStore } from '@reduxjs/toolkit';
import RetrievalReducer from './retrieval/slice';


const mainStore = configureStore({
    reducer: {
        retrieval: RetrievalReducer,
    },
})

export type RootState = ReturnType<typeof mainStore.getState>;
export type AppDispatch = typeof mainStore.dispatch;
export default mainStore;
