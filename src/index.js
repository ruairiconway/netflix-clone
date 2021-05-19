import React from 'react'
import ReactDOM from 'react-dom'
import { GlobalStyles } from './global-styles'
import { App } from './App'
import { FirebaseContext } from './context/firebase'

// import { seedDatabase } from './seed'

const firebaseConfig = {
    apiKey: "AIzaSyDd2s6sa3CutMfupTTQi3EbVrAS24siBxQ",
    authDomain: "ruairiconway-notflix.firebaseapp.com",
    databaseURL: "https://ruairiconway-notflix-default-rtdb.firebaseio.com",
    projectId: "ruairiconway-notflix",
    storageBucket: "ruairiconway-notflix.appspot.com",
    messagingSenderId: "321275710894",
    appId: "1:321275710894:web:24bd25e742536a52820c3f"
}

window.firebase.initializeApp(firebaseConfig)

// const firebase = window.firebase.initializeApp(firebaseConfig)
// seedDatabase(firebase)

ReactDOM.render(
    <FirebaseContext.Provider value={{ firebase: window.firebase }}>
        <GlobalStyles />
        <App />
    </FirebaseContext.Provider>, 
    document.getElementById('root')
)