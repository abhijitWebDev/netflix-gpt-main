import React, { useState, useRef } from 'react';
import Header from './Header';
import { checkValidData } from '../utils/validate';
import authService from '../appwrite/auth';
import {login, logout} from '../store/authSlice';
import { useDispatch } from 'react-redux';


const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const dispatch = useDispatch();

  const handleButtonClick = async(e) => {
    e.preventDefault();
    // validate the form data
    
    const message = checkValidData(email.current.value, password.current.value);

    const user = {
      email: email.current.value,
      password: password.current.value,
      name: name.current?.value ,
    }

    setErrorMessage(message);
    if(message) return;

    if(!isSignInForm) {
      // signup logic
      authService.createAccount(user)

    }
    else {
      // signin logic
      const session = await authService.login(user);
      if(session) {
        const userData = await authService.getCurrentUser();
        dispatch(login(userData));
      }
    }
    


  }
  return (
    <>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/ab180a27-b661-44d7-a6d9-940cb32f2f4a/7fb62e44-31fd-4e1f-b6ad-0b5c8c2a20ef/IN-en-20231009-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="logo"
        />
      </div>
      <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-70">
        <h1 className="font-bold text-4xl py-4">
          {isSignInForm ? 'Sign in' : 'Sign up'}
        </h1>
        {!isSignInForm && (
          <input
          ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-800"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email or phone number"
          className="p-4 my-4 w-full bg-gray-800"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <p className="text-red-600 font-bold text-lg pt-2 pb-2">{errorMessage}</p>
        <button className="p-4 my-6 bg-red-700 w-full rounded-lg" onClick={handleButtonClick}>
          {isSignInForm ? 'Sign in' : 'Sign up'}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? 'New to netflix ? Sign up now'
            : 'Already register? Sign in now'}
        </p>
      </form>
    </>
  );
};

export default Login;
