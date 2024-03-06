import React, { createContext, ReactNode, useState } from 'react';

interface UserContextType {
    user: null | string;
    setUser: React.Dispatch<React.SetStateAction<null | string>>;
}

const UserContext = createContext<UserContextType | null>(null);

interface UserProviderProps {
    children: ReactNode;
}

const UserProvider = ({ children } : UserProviderProps) => {
    const [user, setUser] = useState<null | string>(null);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}

export { UserContext, UserProvider };