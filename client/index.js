import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import FirebaseProvider from './firebase/firebase'
<FirebaseProvider><App /></FirebaseProvider>

ReactDOM.render(<FirebaseProvider><App /></FirebaseProvider>
    , document.querySelector("#root"))