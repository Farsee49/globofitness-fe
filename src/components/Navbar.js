import React from "react";

import  { Button } from '@mui/material';
import { Link } from "react-router-dom";

const Nav = (props) => {
  const {
    navigate,
    isLoggedIn,
    user,
    setIsLoggedIn} = props

    async function logout(){

      
       setIsLoggedIn(false);
      
         window.localStorage.removeItem('token')
        console.log(isLoggedIn)
        navigate('/login')
      
       
    
        };
        return (
        <header>
            <h1>Globo Gym App</h1>
            {isLoggedIn ?(<>
             <Button variant="contained" size="small" onClick={logout}>LogOut</Button>
             <Link to='/routines'><Button variant="contained" size="small">
                Routines</Button></Link>
             <Link to='/activities'><Button variant="contained" size="small">
               Activities</Button></Link>
             <Link to='/routine-activities'><Button variant="contained" size="small">
               Routine Activities</Button></Link>
             <Link to='/userprofile'><Button variant="contained" size="small">
               User Profile</Button></Link>
            <Link to={`/edit-routine/`} >
              <Button  type='submit' variant='contained'size='small' >Edit Post
              </Button></Link>
        </>):(<>
            <Link to='/login'><Button variant="contained" size="small">
                Login</Button></Link>
            <Link to='/register'><Button  type='submit' variant='contained'size='small'>
                Register</Button></Link>
            <Link to='/routines'><Button variant="contained" size="small">
                Routines</Button></Link>
            <Link to='/activities'><Button  type='submit' variant='contained'size='small'>
                Activities</Button></Link></>)}
        </header>
      )
};

export default Nav;