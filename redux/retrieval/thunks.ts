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




export const fetchFolders = createAsyncThunk(
    'retrieval/fetchFolders',
    async (_, { dispatch, getState }) => {
      const user = (getState() as RootState).user;
      dispatch(setIsLoading(true));

      try{
        if(user.username === "") throw new Error("User not logged in");
        const response = await fetch('http://127.0.0.1:8000/folder', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username: user.username }),
        });

        const data: Folder[] = await response.json();
        dispatch(setFolders(data));
      }catch(e: any){
        console.error(e);
      }

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
            dispatch(setSelectedFolder({ name: '', lastModified: '', id: ''}));
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

