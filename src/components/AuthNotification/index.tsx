import React from 'react'
import useNotification from '../../hooks/useNotification'

const AuthNotification:React.FC = () => {
    
    const { notificationState, closeNotification } = useNotification()
    
    return (
        <>
        {notificationState.show && (
            <div>
                {notificationState.text}
                <button onClick={closeNotification} >close</button>
            </div>
        )}
        </>
    )
}

export default AuthNotification