import {useContext} from 'react'
import { UserContext } from '../context/User/context'
import useNotification from './useNotification'

const useSignin = () : any => {


    const { showNotification } = useNotification()
    const { state, dispatch } = useContext(UserContext)

    const signin = (email:string, password:string) => {
        if(!email || !password) showNotification("Email and Password fields are required!")
        dispatch({type: 'SIGNIN'})
    }

    const signout = () => {
        dispatch({type: 'SIGNOUT'})
    }

    const setUsername = (username:string) => {
        dispatch({type: "SET_USERNAME", payload: username})
    }

    return {
        signin,
        signout,
        setUsername,
        user: state
    }
}

export default useSignin