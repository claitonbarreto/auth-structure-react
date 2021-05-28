import React, {useReducer, createContext, Dispatch} from 'react'
import { UserAction, userReducer } from './reducer'

type UserContextType = {
    state: User
    dispatch: Dispatch<UserAction>
}

const initialState:UserContextType = {
    state: {
        email: '',
        isLogged: false,
        level: 0,
        name: ''
    },
    dispatch: () => null
}

const UserContext = createContext(initialState)

const UserContextProvider:React.FC = ({children}) => {
    
    const [state, dispatch] = useReducer(userReducer, initialState.state) 

    return (
        <UserContext.Provider value={{state, dispatch}}>
            {children}
        </UserContext.Provider>
    )
}

export {UserContext, UserContextProvider}