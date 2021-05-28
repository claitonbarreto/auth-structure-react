import styled from 'styled-components'

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
`

export const FormularyContainer = styled.div`
    width: 60%;
    max-width: 400px;
    height: 60%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background-color: #eee;
    padding: 1rem;
    box-shadow: 1px 1px 4px #777;
    border-radius: 1.6rem;
`

export const TextInput = styled.input`
    height: 2.2rem;
    width: 80%;
    border-radius: .5rem;
    border: none;
    outline: none;
    box-shadow: 1px 1px 3px #999;
    padding: 1rem;
    text-align: center;
`