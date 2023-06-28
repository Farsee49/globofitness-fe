import React, {useState} from "react";
import  { Typography,Button,TextField,Checkbox } from '@mui/material';
import {login} from '../data-requests'
function Login ({
  setToken,
  navigate,
  username,
  password,
  setUsername,
  setPassword,
  setIsLoggedIn,
  setTempUser,
  isLoggedIn
  }) {

    async function userLogin(ev) {
    try{
      ev.preventDefault()
      //console.log(9900)
      const user = {username, password}
      setTempUser(user)
      const result = await login(user);
      console.log(result)
      if(!result.error) {
        console.log('passed Login Error')
          setIsLoggedIn(true)
          setUsername('');
          setPassword('');
          setToken(result.token);
          console.log(result.token);
          console.log(isLoggedIn)
          window.localStorage.setItem('token', result.token);
          navigate('/activities');
      };
     }catch(err){
      console.error('problem in userLogin in Login!', err)
     }
    };

  return(
		<>
			<h1>Login Render</h1>

      <form onSubmit={userLogin}>
        <TextField id="filled-basic"  variant="standard"
            type ='text'
            placeholder="UserName"
            onChange={(ev)=> setUsername(ev.target.value)}
          />
          <TextField id="filled-basic"  variant="standard"
            type ='text'
            placeholder="PassWord"
            onChange={(ev)=> setPassword(ev.target.value)}
          />
             <Button  type='submit' variant='contained'size='small'>Login</Button>
        </form>
		</>
	)
};

export default Login;