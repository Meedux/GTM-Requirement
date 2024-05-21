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
        folder: "Folder 1",
    },
    {
        lastName: "Smith",
        firstName: "Jane",
        city: "Los Angeles",
        state: "CA",
        utility: "LADWP",
        folder: "Folder 2",
    },
    {
        lastName: "Johnson",
        firstName: "James",
        city: "Chicago",
        state: "IL",
        utility: "ComEd",
        folder: "Folder 3",
    },
];

export const fetchFolders = createAsyncThunk(
    'retrieval/fetchFolders',
    async () => {
        await setIsLoading(true)

        
        await setIsLoading(false)
        await setFolders(folders)
    }
);

export const selectFolder = createAsyncThunk(
    'retrieval/selectFolder',
    async (folder: Folder) => {
        await setSelectedFolder(folder)
        await setIsLoading(true)

        const acc: AccountQueue[] = []
        
        accounts.forEach((account) => {
            if (account.folder === folder.name) {
                acc.push(account)
            }
        })

        await setIsLoading(false)
        await setAccountQueue(acc)
    }
);

