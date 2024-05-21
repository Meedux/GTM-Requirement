import { Folder, AccountQueue } from "../util_types";

export interface RetrievalType {
    folders: Folder[],
    accountQueue: AccountQueue[],
    selectedFolder: Folder,
    is_loading: boolean,
}   

