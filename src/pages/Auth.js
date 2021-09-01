import React, { useState } from 'react'
import {
    Avatar,
    Box,
    Button,
    Checkbox,
    CircularProgress,
    Container,
    CssBaseline,
    FormControlLabel,
    Grid,
    Link,
    TextField,
    Typography,
} from '@material-ui/core';
import { LockOutlined } from '@material-ui/icons';
import { useHistory } from 'react-router-dom';
import AuthServices from '../services/AuthServices';
import { useDispatch, useSelector } from 'react-redux';
import { setLoading } from '../redux/ducks/loading';
import { useEffect } from 'react';

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

function Auth({ setToken, setUserData }) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const loading = useSelector(state => state.loading.loading);

    const history = useHistory();
    const dispatch = useDispatch();

    useEffect(() => {

        const focused = () => dispatch(setLoading(false));
        window.addEventListener('focus', focused)

        return () => {
            window.removeEventListener('focus', focused)
        }
    })

    const handleSubmit = async e => {
        dispatch(setLoading(true));
        e.preventDefault();

        try {
            const { userLogin } = AuthServices();
            const login = await userLogin({ email, password });
            setToken({ token: login.token });
            setUserData({ data: login.data });
            console.log(login.token);

            history.push('/');
        } catch (error) {
            console.error(error);
        }
        dispatch(setLoading(false));
    }

    console.log(loading);

    if (loading) {
        return (
            <Box className="w-full min-h-screen flex flex-row justify-center items-center">
                <CircularProgress />
            </Box>
        );
    }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className="mt-16 flex flex-col items-center">
                <Avatar className="sign-in-logo">
                    <LockOutlined />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <form className="w-full mt-1" onSubmit={handleSubmit} noValidate>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        onChange={e => setEmail(e.target.value)}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        onChange={e => setPassword(e.target.value)}
                    />
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className="mt-3 mx-0 mb-2"
                    >
                        Sign In
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link variant="body2">
                                Forgot password?
                            </Link>
                        </Grid>
                        {/* <Grid item>
                                <Link href="#" variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid> */}
                    </Grid>
                </form>
            </div>
            <Box mt={8}>
                <Copyright />
            </Box>
        </Container>
    )
}

export default Auth
