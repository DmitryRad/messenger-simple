import React, {useContext} from 'react';
import {BrowserRouter} from "react-router-dom";
import Navbar from "./components/Navbar";
import AppRouter from "./components/AppRouter";
import './App.css';
import {useAuthState} from "react-firebase-hooks/auth";
import Loader from "./components/Loader";
import {Context} from "./index";
import Login from "./components/Login";


const App = () => {
    const {auth} = useContext(Context)
    const [user, loading, error] = useAuthState(auth)

    if (loading) {
        return <Loader/>
    }

    return (
        <BrowserRouter>
            <Navbar/>
            {/*<Login/>*/}
            <AppRouter/>
        </BrowserRouter>
    );
};

export default App;