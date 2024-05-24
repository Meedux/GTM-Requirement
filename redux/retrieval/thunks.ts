import {
    setAccountQueue,
    setAccounts,
    setFolders,
    setIsLoading,
    setSelectedFolder,
} from "./slice";

import { createAsyncThunk } from "@reduxjs/toolkit";
import { Folder, AccountQueue, AuthorizedAccount } from "../util_types";
import { RootState } from "../main";


// Global Variables used for dummy data
const folders: Folder[] = [
    { name: "Folder 1", lastModified: "2021-01-01" },
    { name: "Folder 2", lastModified: "2021-01-01" },
    { name: "Folder 3", lastModified: "2021-01-01" },
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

export const sendAuthorization = createAsyncThunk(
    'retrieval/sendAuthorization',
    async (_, { dispatch }) => {
        dispatch(setAccountQueue([]));
    }
);

export const addAccountToQueue = createAsyncThunk(
    'retrieval/addAccountToQueue',
    async (account: AccountQueue, { dispatch, getState }) => {
        const retrieval = (getState() as RootState).retrieval;
        const acc: AccountQueue[] = [...retrieval.accountQueue, account];

        const data = [
            account
        ]

        const res = await fetch('http://127.0.0.1:8000/api/customer/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        const results = await res.json()
        console.log(results)

        dispatch(setAccountQueue(acc));
    }
);


export const selectFolder = createAsyncThunk(
    'retrieval/selectFolder',
    async ({folder, accountType}: {
        folder: Folder,
        accountType: string
    }, { dispatch, getState }) => {
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

        // fetch the data from localhost:8000/api/customer
        const response = await fetch('http://127.0.0.1:8000/api/customer', {
            method: 'GET',
            headers: {
            'Content-Type': 'application/json'
            }
        });
        const accounts = await response.json();
        console.log(accounts);

        if(accountType === 'queue') {
            const acc: AccountQueue[] = []
        
            accounts.forEach((account: AccountQueue) => {
                if (account.folder === folder.name) {
                    acc.push(account)
                }
            })

            dispatch(setIsLoading(false))
            dispatch(setAccountQueue(acc))
        }else if(accountType == "authorized"){
            const acc: AuthorizedAccount[] = []
        
            accounts.forEach((account: AuthorizedAccount) => {
                if (account.folder === folder.name) {
                    acc.push(account)
                }
            })

            dispatch(setIsLoading(false))
            dispatch(setAccounts(acc))
        }
        
    }
);

