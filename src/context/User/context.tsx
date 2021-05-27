import React, {useReducer, createContext, Dispatch} from 'react'
import { User, UserAction, userReducer } from './reducer'

type UserContextType = {
    state: User
    dispatch: Dispatch<UserAction>
}

const initialState:UserContextType = {
    state: {
        name: 'My username',
        isLogged: false
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