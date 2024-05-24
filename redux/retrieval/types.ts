import { Folder, AccountQueue, AuthorizedAccount } from "../util_types";

export interface RetrievalType {
    folders: Folder[],
    accountQueue: AccountQueue[],
    accounts: AuthorizedAccount[],
    selectedFolder: Folder,
    is_loading: boolean,
}   

