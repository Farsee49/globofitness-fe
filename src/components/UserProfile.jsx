import React, {useEffect} from "react";
import {routinesByUsername} from '../data-requests'
import  { Button } from '@mui/material';
import { Link, useParams } from "react-router-dom";

const UserProfile = (props) => {
    const {
    user,
    token,
    navigate,
    isLoggedIn,
    editRoutine,
    setEditRoutine,
    userRoutines,
    setUserRoutines,
    setSingleRoutine,
    getRoutinesByUsername
    } = props;    
    //console.log(userRoutines)
    //console.log(userRoutines)
    
    useEffect(()=>{
      getRoutinesByUsername();
  },[]);
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
              <h2
                onClick={() => {
                setSingleRoutine(userRoutine);
                  navigate(`/single-routine/${userRoutine.id}`);
                }}
              >
                {userRoutine.name}
              </h2> 
          </li>))
        }
        
    </>
  )
};

export default UserProfile;


       