import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getAuth } from "firebase/auth";


import App from './App';

firebase.initializeApp({
    apiKey: "AIzaSyBL2nyYDpVaEgfZ9wvlbneTdGyiuuDbYlk",
    authDomain: "messenger-simple-5da3a.firebaseapp.com",
    projectId: "messenger-simple-5da3a",
    storageBucket: "messenger-simple-5da3a.appspot.com",
    messagingSenderId: "143395676662",
    appId: "1:143395676662:web:0eda9f61691479f34127d7",
    measurementId: "G-QECR43DT3V"
});

export const Context = createContext(null);

const auth = getAuth();
const firestore = firebase.firestore();


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <Context.Provider value={{
          firebase,
          auth,
          firestore
      }}>
          <App />
      </Context.Provider>,
    initializeApp);

