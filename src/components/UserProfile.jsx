import React, {useEffect, Fragment} from "react";
import {routinesByUsername, createRoutine} from '../data-requests'
import  { Button, Card, Typography,TextField } from '@mui/material';
import { Link, useParams} from "react-router-dom";

const UserProfile = (props) => {
  const { id } = useParams();
  console.log(id)
    const {
    user,
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
        setNewRoutineName('');
        setNewRoutineGoal('')
        navigate('/userprofile')
        getRoutinesByUsername(user.username)
      } catch (err) {
        console.error("problem in the handlesubmit in creating a routine!", err);
      }
    };
    
    useEffect(()=>{
      getRoutines();
      getRoutinesByUsername(user.username)
      
  },[]);

    return(
    <>
          <Typography sx={{ fontSize: 30 }} color="purple"
            gutterBottom>Create A GLOBO Routine</Typography>
      <form onSubmit={createNewRoutine}>
        <TextField
          id="filled-basic"
          variant="standard"
          type="text"
          placeholder="Routine Name"
          value={newRoutineName}
          onChange={(ev) => {
            setNewRoutineName(ev.target.value);
            "document.getElementById('myInput').value = ''"
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
    
    <Typography sx={{ fontSize: 30 }} color="blue" gutterBottom> {user.username}'s Globo Profile</Typography>
    <Fragment>
        {
         userRoutines && userRoutines.map((userRoutine) =>(
            <Typography key={userRoutine.id}> 
    <Card style={{backgroundColor: "purple", border: "5px solid black",
      width: '600px',overflow: 'auto', height: '400px', margin: '8px'}}>
            <Typography variant="h4" color='black'>Name: {userRoutine.name}</Typography>
            <Typography  variant="h4" color='black' > Id: {userRoutine.id}</Typography>
            <Typography variant="h4" color='black'>Goal: {userRoutine.goal}</Typography>
            <Typography variant="h4" color='black'>Creator: {userRoutine.creatorName}</Typography>
            <Typography variant="h4" color='black'>CreatorId: {userRoutine.creatorId}</Typography>
            <br></br>
            {userRoutine.activities.length > 0 ?( <Typography variant="h5" color='black'>Attached Activities:</Typography>):(null) }
        <br></br><Fragment> {userRoutine.activities.map((activity) =>(
          <Fragment key={activity.id}>{console.log(activity)}
            <Typography variant="h6" color='black'>Name: {activity.name}</Typography>
           
            <Typography variant="h7" color='black'>Description: {activity.description}</Typography>
            <br></br>
            <Typography variant="h7" color='black'>Count: {activity.count}</Typography>
            <br></br>
            <Typography variant="h7" color='black'>Duration: {activity.duration}</Typography>
            <br></br>
            <Typography variant="h7" color='black'>ID: {activity.id}</Typography><br></br>
              <Button  type='submit' variant='contained'size='small'  onClick={() => {
                setRoutineActivity(activity);
                navigate(`/routine-activities/${activity.routineActivityId}`);
                }}>Edit Activity
              </Button>   
          </Fragment>
         ))}
        </Fragment>
    </Card>
             

              <Button  type='submit' variant='contained'size='small'
               onClick={() => {
                setSingleRoutine(userRoutine);
               navigate(`/single-routine/${userRoutine.id}`);
              }}>
            
                Edit Your GLOBO ROUTINE
              </Button>
          </Typography>))
        } </Fragment>
    </>

  )
};

export default UserProfile;


