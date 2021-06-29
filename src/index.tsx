import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { Provider } from 'react-redux'
import { store } from 'store/store'

import firebase from 'firebase/app'
import 'firebase/firestore'

firebase.initializeApp({
    apiKey: 'AIzaSyAZQ1yHWR9uOM-FsEzGUQBHsJcXSTEs0YM',
    authDomain: 'fir-mindly.firebaseapp.com',
    projectId: 'fir-mindly',
    storageBucket: 'fir-mindly.appspot.com',
    messagingSenderId: '221527206499',
    appId: '1:221527206499:web:25661e0d3ad83e837aa656',
})

export const firestore = firebase.firestore()

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
)
