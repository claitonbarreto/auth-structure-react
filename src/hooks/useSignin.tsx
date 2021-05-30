import {useContext} from 'react'
import AuthService from '../services/Auth'
import { UserContext } from '../context/User/context'
import useNotification from './useNotification'

const useSignin = () : any => {

    const { showNotification } = useNotification()
    const { state, dispatch } = useContext(UserContext)

    const signin = async (email:string, password:string) => {
        try {

            const auth = await AuthService.auth(email, password);

            if(auth) 
                return showNotification(`You is logged with email: ${auth.user.email}`)
        } catch (e) {
            console.log(e)
        }
    }

    const signout = () => {
        dispatch({type: 'SIGNOUT'})
    }

    const setUsername = (username:string) => {
        dispatch({type: "SET_USERNAME", payload: username})
    }

    // const setUser = (user:AuthUser) => {
    //     dispatch({type: 'SET_USER', payload: user})
    // }

    return {
        signin,
        signout,
        setUsername,
        user: state
    }
}

export default useSignin