import React from "react"
import ReactDom from "react-dom"
import App from "./App"
import GlobalContext from './context'
import GlobalStyles from './config/GlobalStyles'
import AuthNotification from './components/AuthNotification'

ReactDom.render(
    <GlobalContext>
        <GlobalStyles />
        <AuthNotification />
        <App />
    </GlobalContext>
, document.getElementById('app'))