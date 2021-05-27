import React from 'react'

import { CountContextProvider } from './Count/context'
import { UserContextProvider } from './User/context'

const GlobalContext:React.FC = ({children}) => {
    return (
        <CountContextProvider>
            <UserContextProvider>
                {children}
            </UserContextProvider>
        </CountContextProvider>
    )
}

export default GlobalContext