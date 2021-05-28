import {useContext} from 'react'
import { NotificationContext } from '../context/Notification/context'

const useNotification: any = () => {

    const { state, dispatch } = useContext(NotificationContext)

    const showNotification = (text:string) => {
        dispatch({type: "SHOW_NOTIFICATION", payload: text})
    }

    const closeNotification = () => {
        dispatch({type: "CLOSE_NOTIFICATION"})
    }


    return {
        notificationState: state, 
        showNotification,
        closeNotification
    }
}

export default useNotification