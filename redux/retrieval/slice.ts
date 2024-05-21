import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RetrievalType } from './types';

const initialState: RetrievalType = {
    folders: [],
    accountQueue: [],
    selectedFolder: {
        name: '',
        lastModified: '',
    },
    is_loading: false,
};

const retrievalSlice = createSlice({
    name: 'retrieval',
    initialState,
    reducers: {
        setFolders: (state, action: PayloadAction<RetrievalType['folders']>) => {
            state.folders = action.payload;
        },
        setAccountQueue: (state, action: PayloadAction<RetrievalType['accountQueue']>) => {
            state.accountQueue = action.payload;
        },
        setSelectedFolder: (state, action: PayloadAction<RetrievalType['selectedFolder']>) => {
            state.selectedFolder = action.payload;
        },
        setIsLoading: (state, action: PayloadAction<RetrievalType['is_loading']>) => {
            state.is_loading = action.payload;
        },
    },
});

export const { setFolders, setAccountQueue, setIsLoading, setSelectedFolder } = retrievalSlice.actions;
export default retrievalSlice.reducer;