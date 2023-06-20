import React, {useEffect} from "react";
import {routinesByUsername} from '../data-requests'


const UserProfile = (props) => {
    const { user, token, isLoggedIn,setUserRoutines} = props
     console.log(user,token,isLoggedIn)
     
     const getRoutinesByUsername = async (token) => {
        console.log(user)
        const username = user.username
        const result = await routinesByUsername(username)
        setUserRoutines();
        console.log(result);
        
    };   
    
    
useEffect(()=>{
getRoutinesByUsername();
},[token]);
    return(
        <>
        <h1>Render User Profile</h1>
        </>
    )
};

export default UserProfile;


       