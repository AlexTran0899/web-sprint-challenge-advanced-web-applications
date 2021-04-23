import React, { useEffect, useState } from "react";
import {axiosWithAuth}from"../helpers/axiosWithAuth";
import {useHistory}from"react-router-dom";
import axios from"axios";
const Login = () => {

  const {push } = useHistory();
  const [credentials,setCredentials] =useState({
      username:'',
      password:''
  })

  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  useEffect(()=>{
    // make a post request to retrieve a token from the api
    // when you have handled the token, navigate to the BubblePage route
  });
  
  const error = "";
  //replace with error state


  const handleChange =(e)=>{
    setCredentials({
         ...credentials,
        [e.target.name]:e.target.value
    })
  }
  const handleSubmit = e =>{
    e.preventDefault();
    axios
    .post('http://localhost:5000/api/login', credentials)
    .then(res =>{ 
      window.localStorage.setItem("token", JSON.stringify(res.data.payload))
      push('/colors')
      console.log("done")})
      .catch(err =>{console.log(err)})
    }
      

  return (
    <div>
   <form onSubmit={handleSubmit}>
     <input
      data-testid="username"
      placeHolder="username"
      type="text"
      name="username"
      value={credentials.username}
      onChange={handleChange}
      >
     </input>
     <input
       data-testid="password"
      placeHolder="password"
      type="password"
      name="password"
      value={credentials.password}
      onChange={handleChange}
      >
     </input>
     <button>login</button>
   </form>
    </div>
  );
};

export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state nessiary for form functioning.
//3. MAKE SURE YOUR USERNAME AND PASSWORD INPUTS INCLUDE cand data-testid="password"
//4. If either the username or password is not entered, display the following words with the p tag provided: Username or Password not valid.
//5. If the username / password is equal to Lambda School / i<3Lambd4, save that token to localStorage.