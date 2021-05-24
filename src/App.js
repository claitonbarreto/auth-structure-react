import React from "react"
import Name from './components/Name'

function App() {
    return (<div>
        <h2>Welcome to React App</h2>
        <h3>Date : {new Date().toDateString()}</h3>
        <Name />
    </div>)
}

export default App