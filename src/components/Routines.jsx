import React, { useState, useEffect } from "react";
import { Typography, Button, TextField, Checkbox } from "@mui/material";
import {
  fetchRoutines,
  createRoutine,
  getUpdateRoutine,
} from "../data-requests";
import { Link, useParams, useNavigate } from "react-router-dom";

const Routines = (props) => {
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id);

  const {
    routines,
    setRoutines,
    //getRoutines,
    activities,
    user,
    token,
    newRoutineGoal,
    newRoutineName,
    setNewRoutineName,
    setNewRoutineGoal,
    setSingleRoutine,
  } = props;

  console.log(user);

  const createNewRoutine = async (ev) => {
    ev.preventDefault();
    console.log(newRoutineName, newRoutineGoal);
    try {
      const result = await createRoutine(newRoutineName, newRoutineGoal);
    } catch (err) {
      console.error("problem in the handlesubmit in creating a routine!", err);
    }
  };

  //   useEffect(()=>{
  //     getRoutines();
  // },[]);

  return (
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

      <h2>Routines</h2>
      <ol>
        {routines &&
          routines.map((routine) => (
            <li key={routine.id}>
              <p>Id: {routine.id}</p>
              <p>Name: {routine.name}</p>
              <p>Goal: {routine.goal}</p>
              <p>Creator: {routine.creatorName}</p>
              <p>CreatorId: {routine.creatorId}</p>
              <h2
                onClick={() => {
                  setSingleRoutine(routine);
                  navigate(`/single-routine/${routine.id}`);
                }}
              >
                {routine.name}
              </h2>
              <ul>
                Attached Activities:{" "}
                {routine.activities.map((activity) => (
                  <li key={activity.id}>{activity.name}</li>
                ))}
              </ul>
              {routine.creatorId === user.id ? (
                <>
                  <h1>Edit Routine</h1>
                  <Button
                    type="submit"
                    variant="contained"
                    size="small"
                    onClick={() => {
                      setSingleRoutine(routine);
                      navigate(`/edit-routine/${routine.id}`);
                    }}
                  >
                    Edit Routine
                  </Button>
                </>
              ) : null}

              {/* <Link to={`/add-activity/${activity.id}`} >
              <Button  type='submit' variant='contained'size='small' >Add to Routine
              </Button></Link> */}

              {/* <Checkbox
              label= 'Deliver'
              checked={updatedWillDeliver}
              onChange={() => setWillDeliver(!updatedWillDeliver)}
            /><>Available for Delivery     </> */}
            </li>
          ))}
      </ol>
    </>
  );
};

export default Routines;
