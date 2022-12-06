import React from 'react';
import {AppBar, Button, Grid, Toolbar} from "@mui/material";
import {NavLink} from "react-router-dom";

import {LOGIN_ROUTE} from "../utils/const";
import {useAuthState} from "react-firebase-hooks/auth";
import { getAuth, signOut } from "firebase/auth";


const Navbar = () => {
    const auth = getAuth();
    const [user] = useAuthState(auth);

    return (
        <AppBar position="static">
            <Toolbar variant={"dense"}>
                <Grid container  justifyContent={"flex-end"}>
                    {user ?
                        <Button onClick={() => signOut(auth)} color={"secondary"} variant={"outlined"}>Выйти</Button>
                        :
                        <NavLink to={LOGIN_ROUTE}>
                            <Button color={"secondary"} variant={"outlined"}>Логин</Button>
                        </NavLink>
                    }
                </Grid>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;