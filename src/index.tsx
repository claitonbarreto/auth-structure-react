import React from "react"
import ReactDom from "react-dom"
import App from "./App"
import GlobalContext from './context'
import GlobalStyles from './config/GlobalStyles'
import AuthNotification from './components/AuthNotification'
import Server from './config/mirageserver'

if(process.env.NODE_ENV === 'development')
    Server

ReactDom.render(
    <GlobalContext>
        <GlobalStyles />
        <AuthNotification />
        <App />
    </GlobalContext>
, document.getElementById('app'))