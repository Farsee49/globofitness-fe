import React, {useEffect} from "react";
import {routinesByUsername} from '../data-requests'
import  { Button } from '@mui/material';
import { Link, useParams } from "react-router-dom";

const UserProfile = (props) => {
  const { id } = useParams();
  console.log(id)
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
    getRoutines,
    getRoutinesByUsername,
    setRoutineActivity
    } = props;    
  console.log(userRoutines)
    console.log(user.id)
    
    useEffect(()=>{
      getRoutines()
      getRoutinesByUsername()
     //navigate('/activities')
  },[]);
    return(
    <>
        <h1>Render User Profile</h1>
        <h1>{user.username}'s Globo Profile</h1>
        {
         userRoutines && userRoutines.map((userRoutine) =>(
          <li key={userRoutine.id}>
            <p>Id: {userRoutine.id}</p>
            <p >Name: {userRoutine.name}</p>
            <p>Goal: {userRoutine.goal}</p>
            <p>Creator: {userRoutine.creatorName}</p>
            <p>CreatorId: {userRoutine.creatorId}</p>
            <ul>Attached Activities: {userRoutine.activities.map((activity) =>(
             <li key={activity.id}>Activity Name:{activity.name}
              <Link to={`/routine-activities/${activity.id}`} >
              <Button  type='submit' variant='contained'size='small' >Edit Routine Activity
              </Button></Link>
              <p>Activity Id: {activity.routineActivityId}</p></li>
             

            ))}</ul>
            
              <Button  type='submit' variant='contained'size='small'  onClick={() => {
  setSingleRoutine(userRoutine);
    navigate(`/edit-routine/${userRoutine.id}`);
    }}>Edit Routine</Button>
              
              <Button  type='submit' variant='contained'size='small'
                onClick={() => {
                setSingleRoutine(userRoutine);
                  navigate(`/single-routine/${userRoutine.id}`);
                }}
              >
                {userRoutine.name}
              </Button>
          </li>))
        } 
    </>
  )
};

export default UserProfile;


// onClick={() => {
//   setSingleRoutine(userRoutine);
//     navigate(`/edit-routine/${userRoutine.id}`);
//   }}

// onClick={() => {
//   setRoutineActivity(activity);
//     navigate(`/routine-activities/${activity.id}`)
//   }}