import React, { useRef } from "react"
import useSignin from './hooks/useSignin'

import * as S from './App.styles'

const App: React.FC = () => {

    const passwordInputRef = useRef<HTMLInputElement>(null) 
    const emailInputRef = useRef<HTMLInputElement>(null)
    
    const { signin } = useSignin()

    return (
          
        <S.MainContainer>
            <S.FormularyContainer>
                <S.TextInput type="text" ref={emailInputRef} placeholder="you email"/>
                <S.TextInput type="password" ref={passwordInputRef} placeholder="you email"/>
                <button 
                    onClick={async () => 
                        await signin(emailInputRef.current?.value, passwordInputRef.current?.value)
                    }
                >
                    Login
                </button>
            </S.FormularyContainer>
        </S.MainContainer>
        
    )
}

export default App