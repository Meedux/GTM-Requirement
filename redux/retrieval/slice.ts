import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RetrievalType } from './types';
import { AccountQueue, AuthorizedAccount, Folder } from '../util_types';

const initialState: RetrievalType = {
    folders: [],
    accountQueue: [],
    accounts: [],
    selectedFolder: {
        id: '',
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
        setAccounts: (state, action: PayloadAction<AuthorizedAccount[]>) => {
            state.accounts = action.payload;
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

export const { setFolders, setAccountQueue, setIsLoading, setSelectedFolder, setAccounts } = retrievalSlice.actions;
export default retrievalSlice.reducer;