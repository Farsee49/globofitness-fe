import React from "react";
import  { Typography,Button,TextField,Checkbox } from '@mui/material';
import { Link, useParams } from "react-router-dom";
import {} from '../data-requests'



const SingleRoutine = (props) => {
  const { id } = useParams();
  console.log(id)
  const{
    activities,
    singleRoutine,
    setSingleRoutine,
    navigate
  } = props;


    return(
        <>
         <h1>SingleRoutine Render</h1>
         <div id="routineCard">
      <h1>{singleRoutine.name}</h1> 
       <p>Goal: {singleRoutine.goal}</p>
      <p>Creator: {singleRoutine.creatorName}</p>
      <p>CreatorId: {singleRoutine.creatorId}</p>
      </div>

      <Link to={`/add-activity/${singleRoutine.id}`} >
              <Button  type='submit' variant='contained'size='small' >Add to Routine
              </Button></Link>
      <ul>
            {
            activities.map((activity) =>(
            <li key={activity.id} > <div> Id: {activity.id}</div> <div>Name: {activity.name}</div>  
          Description: {activity.description}
          <Link to={`/edit-activity/${activity.id}`} >
              <Button  type='submit' variant='contained'size='small' >Edit Activity
              </Button></Link>

              <Link to={`/add-activity/${activity.id}`} >
              <Button  type='submit' variant='contained'size='small' >Add to Routine
              </Button></Link>
             
          </li>))
            }
        </ul>
        </>
    )
};


export default SingleRoutine;