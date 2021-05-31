import React from "react"
import ReactDom from "react-dom"
import App from "./App"
import GlobalContext from './context'
import GlobalStyles from './config/GlobalStyles'
import AuthNotification from './components/AuthNotification'
import { makeServer } from './config/mirageserver'

if(process.env.NODE_ENV === 'development')
    makeServer()

ReactDom.render(
    <GlobalContext>
        <GlobalStyles />
        <AuthNotification />
        <App />
    </GlobalContext>
, document.getElementById('app'))