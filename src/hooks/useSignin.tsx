import {useContext} from 'react'
import { UserContext } from '../context/User/context'

const useSignin = () : any => {

    const { state, dispatch } = useContext(UserContext)

    const signin = () => {
        dispatch({type: 'SIGNIN'})
    }

    const signout = () => {
        return null
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