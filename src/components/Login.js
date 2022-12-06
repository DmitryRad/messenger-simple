import React, {useContext} from 'react';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

import {Box, Button, Container, Grid} from "@mui/material";
import {Context} from "../index";

const Login = () => {
    const {auth} = useContext(Context);

    const login = async () => {
        const provider = new GoogleAuthProvider()
        const {user} = await signInWithPopup(auth, provider);
        console.log(user);
    }

    return (
        <Container>
            <Grid container
                  style={{marginTop: 50}}
                  alignItems={"center"}
                  justifyContent={"center"}
            >
                <Grid style={{width:400, background: 'lightgray'}}
                      container
                      alignItems={"center"}
                      direction={"column"}
                      >
                    <Box p={5}>
                        <Button onClick={login} variant={"outlined"}>Войти с помощью Google</Button>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};


export default Login;