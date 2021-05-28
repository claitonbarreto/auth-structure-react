import React, {createContext, useReducer, Dispatch} from 'react'
import { countReducer, NotificationAction} from './reducer'

interface NotificationContextType {
    state: AuthNotification
    dispatch: Dispatch<NotificationAction>
}

const initialState:NotificationContextType = {
    state: {
        text: '',
        show: false
    },
    dispatch: () => null
}

const NotificationContext = createContext<NotificationContextType>(initialState)

const NotificationContextProvider:React.FC = ({children}) => {

    const [state, dispatch] = useReducer(countReducer, initialState.state)

    return (
        <NotificationContext.Provider value={{state, dispatch}}>
            {children}
        </NotificationContext.Provider>
    )
}

export {NotificationContext, NotificationContextProvider}