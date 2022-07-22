import React, { useEffect, useState, useContext } from 'react';

import {useNavigate} from 'react-router-dom'

import classes from './Login.module.css';
import Button from '../UI/Button';
import AuthContext from '../store/auth-context';

const Login = () => {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [emailIsValid, setEmailIsValid] = useState();
  const [enteredPassword, setEnteredPassword] = useState('');
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);
  const [userIsValid, setUserIsValid] = useState(true)

  const ctx = useContext(AuthContext)
  const navigate = useNavigate()

useEffect(()=>{
  const identifier = setTimeout(()=>{
    setFormIsValid(
      enteredEmail.includes('@') && enteredPassword.trim().length > 6
    );
  }, 1000)
  return ()=>{
    clearTimeout(identifier) 
  }
},[enteredEmail, enteredPassword])

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
    setUserIsValid(true)
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  const validateEmailHandler = () => {
    setEmailIsValid(enteredEmail.includes('@'));
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(enteredEmail,enteredPassword)
    if(enteredEmail === "example@mail.com" && +enteredPassword === 12345678){
        localStorage.setItem("auth", 1)
        ctx.onLogin()
        navigate("/home")
    }
    else {
      setUserIsValid(false)
    }
  };

  return (
    <div className={`${classes.card} ${classes.login}`}>
    <h1 className={classes.title}>Login to Contacts App</h1>
    <hr className={classes.seprator} />
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailIsValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={enteredEmail}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordIsValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={enteredPassword}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
        {!userIsValid && <div style={{color: "red"}}>Invalid Credentials!</div>}
      </form>
    </div>
  );
};

export default Login;
