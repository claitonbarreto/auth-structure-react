import React, {createContext, useReducer, Dispatch} from 'react'
import { countReducer, CountAction} from './reducer'

interface Count {
    count: number
}

interface CountContextType {
    state: Count
    dispatch: Dispatch<CountAction>
}

const initialState = {
    state: {
        count: 0
    },
    dispatch: () => null
}

const CountContext = createContext<CountContextType>(initialState)

const CountContextProvider:React.FC = ({children}) => {

    const [state, dispatch] = useReducer(countReducer, initialState.state)

    return (
        <CountContext.Provider value={{state, dispatch}}>
            {children}
        </CountContext.Provider>
    )
}

export {CountContext, CountContextProvider}