import { createWrapper } from 'next-redux-wrapper';
import { configureStore } from '@reduxjs/toolkit';
import RetrievalReducer from './retrieval/slice';


const mainStore = configureStore({
    reducer: {
        retrieval: RetrievalReducer,
    },
})

export default mainStore;
