import React, {useEffect, Fragment} from "react";
import {routinesByUsername, createRoutine} from '../data-requests'
import  { Button, Card, Typography,TextField } from '@mui/material';
import { Link, useParams} from "react-router-dom";

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
    newRoutineName,
    setNewRoutineName,
    newRoutineGoal,
    setNewRoutineGoal,
    getRoutinesByUsername,
    setRoutineActivity
    } = props;    
  console.log(userRoutines)
    console.log(user.id)

    const createNewRoutine = async (ev) => {
      ev.preventDefault();
      console.log(newRoutineName, newRoutineGoal);
      try {
        const result = await createRoutine(newRoutineName, newRoutineGoal);
      } catch (err) {
        console.error("problem in the handlesubmit in creating a routine!", err);
      }
    };
    
    useEffect(()=>{
      getRoutines()
      getRoutinesByUsername()
     //navigate('/activities')
  },[]);
    return(
    
    <>
    <h1>Create Routines</h1>
      <form onSubmit={createNewRoutine}>
        <TextField
          id="filled-basic"
          variant="standard"
          type="text"
          placeholder="Routine Name"
          value={newRoutineName}
          onChange={(ev) => {
            setNewRoutineName(ev.target.value);
          }}
        />
        <TextField
          id="filled"
          variant="standard"
          type="text"
          placeholder="Routine Goal"
          value={newRoutineGoal}
          onChange={(ev) => {
            setNewRoutineGoal(ev.target.value);
          }}
        />
        <Button type="submit" variant="contained" size="small">
          SUBMIT
        </Button>
      </form>
    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom><h1>Render User Profile</h1></Typography>
    <Typography sx={{ fontSize: 20 }} color="blue" gutterBottom> <h1>{user.username}'s Globo Profile</h1></Typography>
    <ul>
        {
         userRoutines && userRoutines.map((userRoutine) =>(
          <Typography key={userRoutine.id}> 
          <Card style={{backgroundColor: "purple", border: "5px solid black" }}>
            <Typography  variant="h4" color='black' > Id: {userRoutine.id}</Typography>
            <Typography variant="h4" color='black'>Name: {userRoutine.name}</Typography>
            <Typography variant="h4" color='black'>Goal: {userRoutine.goal}</Typography>
            <Typography variant="h4" color='black'>Creator: {userRoutine.creatorName}</Typography>
            <Typography variant="h4" color='black'>CreatorId: {userRoutine.creatorId}</Typography>
            {userRoutine.activities.length > 0 ?( <Typography variant="h5" color='black'>Attached Activities:</Typography>):(null) }
            <> {userRoutine.activities.map((activity) =>(
             <Fragment key={activity.id}>
             <Typography variant="h6" color='black'>Name: {activity.name}</Typography>
                 <Typography variant="h7" color='black'>Description: {activity.description}</Typography>
                  <></>
                 <Typography variant="h7" color='black'>Count: {activity.count}</Typography>
              

                 <Typography variant="h7" color='black'>ID: {activity.id}</Typography>


                 <Typography variant="h7" color='black'>Routine Activity ID: {activity.routineActivityId}</Typography>
              <p>Activity Id: {activity.routineActivityId}</p>
              </Fragment>

            ))}</>
            
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
              </Button></Card>
          </Typography>))
        } </ul>
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