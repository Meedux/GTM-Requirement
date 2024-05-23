import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RetrievalType } from './types';
import { AccountQueue, Folder } from '../util_types';

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
        setFolders: (state, action: PayloadAction<Folder[]>) => {
            state.folders = action.payload;
        },
        setAccountQueue: (state, action: PayloadAction<AccountQueue[]>) => {
            state.accountQueue = action.payload;
        },
        setSelectedFolder: (state, action: PayloadAction<Folder>) => {
            state.selectedFolder = action.payload;
        },
        setIsLoading: (state, action: PayloadAction<boolean>) => {
            state.is_loading = action.payload;
        },
    },
});

export const { setFolders, setAccountQueue, setIsLoading, setSelectedFolder } = retrievalSlice.actions;
export default retrievalSlice.reducer;