import React from "react";
import  { Typography,Button,TextField,Checkbox } from '@mui/material';
import { Link, useParams } from "react-router-dom";
import {getSingleActivityWithRoutines} from '../data-requests'



const SingleActivity = (props) => {
  const { id } = useParams();
  console.log(id)
  const{
    routines,
    singleActivity,
    setSingleActivity,
    navigate
  } = props;


    return(
        <>
         <h1>Single Activity Render</h1>
         <div id="activityCard">
      <h1>{singleActivity.name}</h1> 
       <p>Goal: {singleActivity.goal}</p>
      <p>Creator: {singleActivity.creatorName}</p>
      <p>CreatorId: {singleActivity.creatorId}</p>
      </div>

      <Link to={`/add-activity/${singleRoutine.id}`} >
              <Button  type='submit' variant='contained'size='small' >Add to Routine
              </Button></Link>
      <ul>
            {
        //     activities.map((activity) =>(
        //     <li key={activity.id} > <div> Id: {activity.id}</div> <div>Name: {activity.name}</div>  
        //   Description: {activity.description}
        //   <Link to={`/edit-activity/${activity.id}`} >
        //       <Button  type='submit' variant='contained'size='small' >Edit Activity
        //       </Button></Link>

        //       <Link to={`/add-activity/${activity.id}`} >
        //       <Button  type='submit' variant='contained'size='small' >Add to Routine
        //       </Button></Link>
             
        //   </li>))
            }
        </ul>
        </>
    )
};


export default SingleActivity;