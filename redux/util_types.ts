export interface Folder {
    id: string,
    name: string,
    lastModified: string,
}

export interface AccountQueue {
    lastName: string
    firstName: string
    email: string
    folder: string
    phone: string
    isAuthorized: boolean
}


export interface Account {
    lastName: string
    firstName: string
    email: string
    city: string
    state: string
    utility: string
    date: string
    zip: string
    folder: string
}

export interface AuthorizedAccount {
    accountNumber: string
    lastName: string
    firstName: string
    email: string
    city: string
    state: string
    utility: string
    date: string
    folder: string
}