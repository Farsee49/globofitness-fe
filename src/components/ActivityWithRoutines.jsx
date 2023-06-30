import React, { Fragment,useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import  { Card, Typography,Button,TextField,Checkbox } from '@mui/material';
import { createActivity } from "../data-requests";



const ActivtyWithRoutines = (props) => {
    const { id } = useParams();
    console.log(id);
    const{
        activityRoutines,
        fetchActivityWithRoutines
    } = props;

    console.log(activityRoutines)
    useEffect(()=>{
    fetchActivityWithRoutines(id)	
      
    },[]);




    return(
        <>
        <h1>Render Activity With Routines</h1>

        <Typography variant="h4" color='black'>Activities:</Typography>
        {activityRoutines &&
        activityRoutines.map((routine) => (
           
            <Fragment key={routine.id}>
      <Card style={{backgroundColor: "purple", border: "5px solid black",
      width: '600px',overflow: 'auto', height: '400px', margin: '8px'}}>
      <Typography variant="h4" color='black'>Name: {routine.name}</Typography>
      
            <Typography  variant="h4" color='black' > Id: {routine.id}</Typography>
            
            <Typography variant="h4" color='black'>Goal: {routine.goal}</Typography>
            
            <>
               {routine.activities.length > 0 ?( <Typography variant="h5" color='black'>Attached Activities:</Typography>):(null) }
               {routine.activities.map((activity) => (
                  <Fragment key={activity.id}>
                 
                 <Typography variant="h5" color='black'>Name: {activity.name}</Typography>
                 <Typography variant="h5" color='black'>Description: {activity.description}</Typography>
                 <Typography variant="h6" color='black'>Count: {activity.count}</Typography>
                 <Typography variant="h6" color='black'>ID: {activity.id}</Typography></Fragment>
                ))}
                </> 
            </Card></Fragment>     
     ))}


        </>
    )
};

export default ActivtyWithRoutines;