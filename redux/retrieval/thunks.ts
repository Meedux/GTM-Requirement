import {
    setAccountQueue,
    setFolders,
    setIsLoading,
    setSelectedFolder,
} from "./slice";

import { createAsyncThunk } from "@reduxjs/toolkit";
import { Folder, AccountQueue } from "../util_types";


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
        city: "New York",
        state: "NY",
        utility: "ConEd",
        date: "2021-01-01",
        folder: "Folder 1",
    },
    {
        lastName: "Smith",
        firstName: "Jane",
        city: "Los Angeles",
        state: "CA",
        utility: "LADWP",
        date: "2021-01-01",
        folder: "Folder 2",
    },
    {
        lastName: "Johnson",
        firstName: "James",
        city: "Chicago",
        state: "IL",
        utility: "ComEd",
        date: "2021-01-01",
        folder: "Folder 3",
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

export const selectFolder = createAsyncThunk(
    'retrieval/selectFolder',
    async (folder: Folder, { dispatch }) => {
        dispatch(setSelectedFolder(folder))
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

