import React from 'react';
import styles from './styles/LoginPage.module.css';
import { Link, navigate } from '@reach/router';

const Login = () => {
    const navSignIn = () => {
        navigate("/signin");
    }
    const navSignUp = () => {
        navigate("/signup");
    }

    return (
        <div className={styles.overlay}>
            <h3 className={styles.redText}>Please login or create an account to order Sushi!</h3>
            <Link to="/">Return to Home Page</Link>
            <Link to="/account">Account Home Page</Link>
            <p>Login to existing account email and password here that opens on click after button pressed...</p>
            <p>have email address be the username</p>
            <p>Create account button that opens on click (try to make it a form that stays on this page)...</p>
            <button onClick={navSignIn}>Take me to Sign In</button>
            <button onClick={navSignUp}>Take me to Sign Up</button>
        </div>
    )
}

export default Login;