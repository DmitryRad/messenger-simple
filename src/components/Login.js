import React, {useContext} from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


import {Box, Button, Container, Grid} from "@mui/material";
import {Context} from "../index";

const Login = () => {
    const {auth} = useContext(Context);

    const login = async () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        const {user} = await auth.signInWithPopup(provider)
        console.log(user);
    }

    return (
        <Container>
            <Grid container
                  style={{height: window.innerHeight - 50}}
                  alignItems={"center"}
                  justifyContent={"center"}
            >
                <Grid style={{width:300, background: 'lightgray'}}
                      containter
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