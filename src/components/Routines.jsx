import React, { useEffect, Fragment } from "react";
import { Typography, Button, TextField, Checkbox,Card } from "@mui/material";
import {createRoutine} from "../data-requests";
import {useParams, useNavigate } from "react-router-dom";

const Routines = (props) => {
  const { id } = useParams();
  console.log(id);
 
  const {
    routines,
    getRoutines,
    newRoutineGoal,
    isLoggedIn,
    newRoutineName,
    setNewRoutineName,
    setNewRoutineGoal,
  } = props;

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
      getRoutines();
  },[]);
 
  return (
    <>
          <br></br>
    {isLoggedIn?(<Fragment>
      <Typography variant="h3" color='black'>Create a new GLOBO ROUTINE</Typography>
      <br></br>
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
    </Fragment>):(null)}
    <br></br>
    <Typography variant="h3" color='black'>GLOBO ROUTINES</Typography>
      <Fragment>
      <Card style={{backgroundColor: "purple", border: "5px solid black",
       width: '900px',overflow: 'auto', height: '700px', margin: '8px'}}>
        { 
        routines &&
          routines.map((routine) => (
            <Fragment key={routine.id}>
              <Card style={{backgroundColor: "purple", border: "5px solid black",
               width: '700px',overflow: 'auto', height: '500px', margin: '8px'}}> 
            <Typography variant="h4" color='black' > Name:{ routine.name}</Typography>
            <Typography variant="h4" color='black'>CreatorId: {routine.creatorId}</Typography>
            <Typography variant="h4" color='black'>Goal: {routine.goal}</Typography>
            <Typography variant="h4" color='black' > Creator:{ routine.creatorName}</Typography>
            <Typography variant="h4" color='black' > Id:{ routine.id}</Typography>
              <>
               {routine.activities.length > 0 ?( <Typography variant="h5" color='black'>
                Attached Activities:</Typography>):(null) }
               {routine.activities.map((activity) => (
                  <Fragment key={activity.id}>
                 <Typography variant="h6" color='black'>Name: {activity.name}</Typography>
                 <Typography variant="h5" color='black'>Description: {activity.description}</Typography>
                 <Typography variant="h5" color='black'>Count: {activity.count}</Typography>
                 <Typography variant="h5" color='black'>ID: {activity.id}</Typography></Fragment>
                ))}
                </> 
              </Card>
            </Fragment>
          ))}
     </Card> 
      </Fragment>
    </>
  );
};

export default Routines;
