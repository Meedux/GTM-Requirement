"use client";
import React, { createContext, useState } from 'react';

interface AuthContextProps {
    email: string;
    set: (email: string) => void;
}

export const AuthContext = createContext<AuthContextProps>({
    email: '',
    set: () => {},
});

export const AuthProvider = ({ children }: {
    children: React.ReactNode;
}) => {
    const [email, set] = useState('');

    return (
        <AuthContext.Provider value={{ email, set }}>
            {children}
        </AuthContext.Provider>
    );
};