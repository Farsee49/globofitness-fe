import React from "react";

import  { Button, Typography } from '@mui/material';
import { Link } from "react-router-dom";

const Nav = (props) => {
  const {
    navigate,
    isLoggedIn,
    user,
    setIsLoggedIn} = props

    async function logout(){
       try{
       setIsLoggedIn(false);
         window.localStorage.removeItem('token')
        console.log(isLoggedIn)
        navigate('/login')
       }catch(err){
        console.error('problem in login!', err)
      }
       
    
        };
        return (
        <header>
             <Typography variant="h2" color='black' >GLOBO GYM APP</Typography>
            {isLoggedIn ?(<>
             <Button className="Button" variant="contained" size="small" onClick={logout}>LogOut</Button>
             <Link to='/routines'><Button variant="contained" size="small">
                Routines</Button ></Link>
             <Link to='/activities'><Button variant="contained" size="small">
               Activities</Button></Link>
             <Link to='/userprofile'><Button variant="contained" size="small">
               User Profile</Button></Link>
           
        </>):(<>
            <Link to='/login'><Button variant="contained" size="small"  >
                Login</Button></Link>
            <Link to='/register'><Button  type='submit' variant='contained'size='small'>
                Register</Button></Link>
            <Link to='/routines'><Button variant="contained" size="small">
                Routines</Button></Link>
            <Link to='/activities'><Button variant="contained" size="small" >
                Activities</Button></Link></>)}
        </header>
      )
};

export default Nav;