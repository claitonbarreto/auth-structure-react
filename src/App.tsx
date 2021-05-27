import React, { useRef } from "react"
import useSignin from './hooks/useSignin'

const App: React.FC = () => {

    const usernameInputRef = useRef<HTMLInputElement>(null) 
    const { user, signin, signout,setUsername } = useSignin()

    return (
          
        <div>
            {user.name} <br />
            {user.isLogged ? "Logged" : "Deslogged"}
            <div style={{

            }}>
                <input ref={usernameInputRef} />
                <button onClick={() => setUsername(usernameInputRef.current!.value)}>Set Username</button>
            </div>
            <button onClick={() => signin()}>
                Login
            </button>
            <button onClick={() => signout()}>
                Logout
            </button>
        </div>
        
    )
}

export default App