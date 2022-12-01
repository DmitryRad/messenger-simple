import React, {useContext} from 'react';
import {BrowserRouter} from "react-router-dom";
import Navbar from "./components/Navbar";
import AppRouter from "./components/AppRouter";
import './App.css';
import Login from "./components/Login";
import {useAuthState} from "react-firebase-hooks/auth";
import Loader from "./components/Loader";
import {Context} from "./index";
import Chat from "./components/Chat";


const App = () => {

    const {auth} = useContext(Context);
    const [user, loading, error] = useAuthState(auth);

    if (loading) {
        return <Loader/>
    }

    return (
        <BrowserRouter>
          <Navbar />
            <AppRouter />
            <Login />
        </BrowserRouter>
    );
};

export default App;