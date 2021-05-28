import React from 'react'

import { NotificationContextProvider } from './Notification/context'
import { UserContextProvider } from './User/context'

const GlobalContext:React.FC = ({children}) => {
    return (
        <NotificationContextProvider>
            <UserContextProvider>
                {children}
            </UserContextProvider>
        </NotificationContextProvider>
    )
}

export default GlobalContext