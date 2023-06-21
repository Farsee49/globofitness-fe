import React, {useEffect} from "react";
import {routinesByUsername} from '../data-requests'
import  { Button } from '@mui/material';
import { Link, useParams } from "react-router-dom";




const UserProfile = (props) => {
  
    const {
    user,
    token,
    isLoggedIn,
    editRoutine,
    setEditRoutine,
    userRoutines,
    setUserRoutines
    } = props;    
  console.log(userRoutines)
//   const getRoutinesByUsername = async (token) => {     
//     try{
//         //console.log(user)
//         const username = user.username
//         const result = await routinesByUsername(username)
//         setUserRoutines(result);
//         //console.log(result);
//     }catch(err){
//         console.error('problem in getRoutinesByUsername in UserProfile!', err);
//     } 
//  };   


    //console.log(userRoutines)
    


    return(
    <>
        <h1>Render User Profile</h1>
        <h1>{user.username}'s Globo Profile</h1>
        {
         userRoutines && userRoutines.map((userRoutine) =>(
          <li key={userRoutine.id}>
            <p>Id: {userRoutine.id}</p>
            <p>Name: {userRoutine.name}</p>
            <p>Goal: {userRoutine.goal}</p>
            <p>Creator: {userRoutine.creatorName}</p>
            <p>CreatorId: {userRoutine.creatorId}</p>
            <ul>Attached Activities: {userRoutine.activities.map((activity) =>(
             <li key={activity.id}>{activity.name}
              <Link to={`/edit-activity/${activity.id}`} >
              <Button  type='submit' variant='contained'size='small' >Edit Routine
              </Button></Link></li>

            ))}</ul>
              <Link to={`/edit-routine/${userRoutine.id}`} >
              <Button  type='submit' variant='contained'size='small' >Edit Routine
              </Button></Link>
             
             
              
          </li>))
        }
        
    </>
  )
};

export default UserProfile;


       