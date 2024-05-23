import {
    setAccountQueue,
    setFolders,
    setIsLoading,
    setSelectedFolder,
} from "./slice";

import { createAsyncThunk } from "@reduxjs/toolkit";
import { Folder, AccountQueue } from "../util_types";
import { RootState } from "../main";


// Global Variables used for dummy data
const folders: Folder[] = [
    { name: "Folder 1", lastModified: "2021-01-01" },
    { name: "Folder 2", lastModified: "2021-01-01" },
    { name: "Folder 3", lastModified: "2021-01-01" },
];

const accounts: AccountQueue[] = [
    {
        lastName: "Doe",
        firstName: "John",
        email: "johndoe@gmail.com",
        city: "New York",
        state: "NY",
        utility: "ConEd",
        date: "2021-01-01",
        folder: "Folder 1",
        zip: "10001",
    },
    {
        lastName: "Smith",
        firstName: "Jane",
        email: "janesmith@gmail.com",
        city: "Los Angeles",
        state: "CA",
        utility: "LADWP",
        date: "2021-01-01",
        folder: "Folder 2",
        zip: "10001",
    },
    {
        lastName: "Johnson",
        firstName: "James",
        email: "jamesjohnson@gmail.com",
        city: "Chicago",
        state: "IL",
        utility: "ComEd",
        date: "2021-01-01",
        folder: "Folder 3",
        zip: "10001",
    },
];

export const fetchFolders = createAsyncThunk(
    'retrieval/fetchFolders',
    async (_, { dispatch }) => {
      dispatch(setIsLoading(true));
      // Fetch folders here and assign it to the `folders` variable
      dispatch(setFolders(folders));
      dispatch(setIsLoading(false));
    }
);

export const addAccountToQueue = createAsyncThunk(
    'retrieval/addAccountToQueue',
    async (account: AccountQueue, { dispatch, getState }) => {
        const retrieval = (getState() as RootState).retrieval;
        const acc: AccountQueue[] = [...retrieval.accountQueue, account];
        accounts.push(account);
        dispatch(setAccountQueue(acc));
    }
);

export const selectFolder = createAsyncThunk(
    'retrieval/selectFolder',
    async (folder: Folder, { dispatch, getState }) => {
        const retrieval = (getState() as RootState).retrieval;

        if(retrieval.selectedFolder.name === folder.name) {
            dispatch(setSelectedFolder({ name: '', lastModified: '' }));
            dispatch(setAccountQueue([]))
            console.log(retrieval.selectedFolder)
            return;
        }
        dispatch(setSelectedFolder(folder));
        // Use the retrieval state as needed
        dispatch(setIsLoading(true))

        const acc: AccountQueue[] = []
        
        accounts.forEach((account) => {
            if (account.folder === folder.name) {
                acc.push(account)
            }
        })

        dispatch(setIsLoading(false))
        dispatch(setAccountQueue(acc))
    }
);

