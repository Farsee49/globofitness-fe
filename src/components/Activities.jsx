import React, { useState, useEffect,Fragment } from "react";
import { Link, Navigate } from "react-router-dom";
import { Typography, Button, TextField, Checkbox,Card } from "@mui/material";
import { createActivity } from "../data-requests";

const Activities = (props) => {
  const {
    newActivityDescription,
    setNewActivityDescription,
    setNewActivityName,
    newActivityName,
    getActivities,
    setActivities,
    activities,
    isLoggedIn,
    navigate,
    setEditActivityName,
    setEditActivityDescription,
  } = props;

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    getActivities()
    console.log(newActivityName, newActivityDescription);
    try {
      const result = await createActivity(
        newActivityName,
        newActivityDescription
      );
      navigate('/activities')
      setNewActivityName('')
      setNewActivityDescription('')
    } catch (err) {
      console.error("problem in the handlesubmit in creating a activity!", err);
    }
  };

  useEffect(()=>{
		getActivities();
},[]);

  //     Promise.all([
  //         //getRoutines(),
  //         getActivities(),
  //         //getCurrentUser(),
  //         //getRoutinesByUsername()
  //         ])
  //       .then(([user,
  //               result,
  //               activities,
  //               routines,
  //               userRoutines]) => {
  //          // setUser(user)
  //           setActivities(activities)
  //           //setRoutines(routines);
  //          // setUserRoutines(userRoutines)
  //       })
  //       .catch ((error) => {
  //         return (
  //           console.error(error)
  //         );
  //       })

  //   }, []);
  return (
    <>
      {isLoggedIn?(<Fragment>
      <h1>Activities Render</h1>
      <h2>Create a new Activity</h2>
      <form onSubmit={handleSubmit}>
        <TextField
          id="filled-basic"
          variant="standard"
          type="text"
          placeholder="Activity Name"
          value={newActivityName}
          onChange={(ev) => {
            setNewActivityName(ev.target.value);
          }}
        />
      </form>
      <form onSubmit={handleSubmit}>
        <TextField
          id="filled"
          variant="standard"
          type="text"
          placeholder="Activity Description"
          value={newActivityDescription}
          onChange={(ev) => {
            setNewActivityDescription(ev.target.value);
          }}
        />
        <Button type="submit" variant="contained" size="small">
          SUBMIT
        </Button>
      </form></Fragment>):(null)}
      <>
        {activities.map((activity) => (
          <Fragment key={activity.id}>
          
          <Card style={{backgroundColor: "purple", border: "5px solid black", width: '600px',overflow: 'auto', height: '200px', margin: '8px'}}>
            <Typography variant="h5" color='black'>Name: {activity.name}</Typography>
            <Typography variant="h5" color='black'>Description: {activity.description}</Typography>
            <Typography variant="h5" color='black' > Id:{ activity.id}</Typography>
           
           {isLoggedIn?( <Link to={`/edit-activity/${activity.id}`}>
              <Button
                type="submit"
                variant="contained"
                size="small"
                onClick={() => {
                  setEditActivityName(activity.name),
                    setEditActivityDescription(activity.description);
                }}
              >
                Edit Activity
              </Button>
            </Link>):(null)}</Card>
            {/* <Link to={`/add-activity/${activity.id}`} >
              <Button  type='submit' variant='contained'size='small' >Add to Routine
              </Button></Link> */}  
          {" "}</Fragment>
        ))}
      </>
    </>
  );
};

export default Activities;
