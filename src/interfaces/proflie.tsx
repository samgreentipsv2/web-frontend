import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";

export interface profile {
    id: string,
    email: string,
    firstName: string,
    lastName: string,
    isStaff: boolean,
    isVip: boolean,
    authToken?: string
};

export interface UserContextInterface{
    user: profile;
    setUser: Dispatch<SetStateAction<profile>>;

}


export const UserContext = createContext<Partial<UserContextInterface>>({})

interface UserProvideProps{
    children: ReactNode;
}


export default function UserProvider({children}: UserProvideProps)
{
    const [user, setUser] = useState<profile>({
        id: '',
        email: '',
        firstName: '',
        lastName: '',
        isStaff: false,
        isVip: false,
        authToken: '',
    })
    return (
        <UserContext.Provider value ={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )

}