import React, { useState } from "react";
import { Typography, Button, TextField, Checkbox } from "@mui/material";
import { login } from "../data-requests";
function Login({
  setToken,
  navigate,
  username,
  password,
  setUsername,
  setPassword,
  setIsLoggedIn,
  setTempUser,
  isLoggedIn,
}) {
  async function userLogin(ev) {
    try {
      ev.preventDefault();
      const user = { username, password };
      setTempUser(user);
      const result = await login(user);
      console.log(result);
      if (!result.error) {
        console.log("passed Login Error");
        setIsLoggedIn(true);
        setUsername("");
        setPassword("");
        setToken(result.token);
        console.log(result.token);
        console.log(isLoggedIn);
        window.localStorage.setItem("token", result.token);
        setTimeout(() => {
          navigate("/activities");
        }, 1000);
      }
    } catch (err) {
      console.error("problem in userLogin in Login!", err);
    }
  }

  return (
    <>
    <br></br>
     <Typography variant="h4" color='black'>GLOBO LOGIN</Typography>
     <br></br>
      <form onSubmit={userLogin}>
        <TextField
          id="filled-basic"
          variant="standard"
          type="text"
          placeholder="UserName"
          onChange={(ev) => setUsername(ev.target.value)}
        />
        <TextField
          id="filled-basic"
          variant="standard"
          type="password"
          placeholder="PassWord"
          onChange={(ev) => setPassword(ev.target.value)}
        />
        <Button type="submit" variant="contained" size="small">
          Login
        </Button>
      </form>
      {isLoggedIn ? <h2>Log In Successful!</h2> : null}
    </>
  );
}

export default Login;
