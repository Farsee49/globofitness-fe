import React, { useState } from "react";
import { Typography, Button, TextField, Checkbox } from "@mui/material";
import { registerUser, login } from "../data-requests";

export default function Register({
  setToken,
  navigate,
  username,
  password,
  setUsername,
  setPassword,
  setIsLoggedIn,
  isLoggedIn,
}) {
  const [error, setError] = useState("");

  async function handleSubmit(ev) {
    ev.preventDefault();
    console.log(9900);
    const user = { username, password };
    const result = await registerUser(user);
    console.log(result.token);
    if (!result.error) {
      const loginResult = await login(user);
      if (!loginResult.error) {
        setIsLoggedIn(true);
        setUsername("");
        setPassword("");
        setToken(loginResult.token);
        window.localStorage.setItem("token", result.token);
        setTimeout(() => {
          navigate("/activities");
        }, 1000);
      }
      
    } else if (result.error) {
      setError(result.error);
    }
  }
  return (
    <>
    <br></br>
     <Typography variant="h4" color='black'>REGISTER YOUR GLOBO EXPERIENCE</Typography>
      <br></br>
      <form onSubmit={handleSubmit}>
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
          SUBMIT
        </Button>
        {error ? <h2>{error}</h2> : null}
        {isLoggedIn ? <h2>Registration Successful!</h2> : null}
      </form>
    </>
  );
}
