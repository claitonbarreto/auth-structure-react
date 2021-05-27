import React from "react"
import ReactDom from "react-dom"
import App from "./App"
import GlobalContext from './context'

ReactDom.render(
    <GlobalContext>
        <App />
    </GlobalContext>
, document.getElementById('app'))