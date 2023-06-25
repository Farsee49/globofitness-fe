import React, { useState } from "react";
import { Typography, Button, TextField, Checkbox } from "@mui/material";
import { registerUser } from "../data-requests";

export default function Register({
  setToken,
  navigate,
  username,
  password,
  setUsername,
  setPassword,
}) {
  const [error, setError] = useState("");

  async function handleSubmit(ev) {
    ev.preventDefault();
    console.log(9900);
    const user = { username, password };
    const result = await registerUser(user);
    console.log(result.token);
    if (!result.error) {
      console.log("pass success");
      setToken(result.token);
      window.localStorage.setItem("token", result.token);
      navigate("/login");
    } else if (result.error) {
      setError(result.error);
    }
  }
  return (
    <>
      <h1>Register</h1>
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
          type="text"
          placeholder="PassWord"
          onChange={(ev) => setPassword(ev.target.value)}
        />
        <Button type="submit" variant="contained" size="small">
          SUBMIT
        </Button>
        {error ? <p>{error}</p> : null}
      </form>
    </>
  );
}
