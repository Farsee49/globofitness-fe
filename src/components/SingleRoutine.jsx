import React, {Fragment, useEffect} from "react";
import  { Typography,Button,TextField,Checkbox, Card } from '@mui/material';
import { Link, useParams } from "react-router-dom";
import {destroyRoutine,getUpdateRoutineActivity, getActivityWithRoutines, routinesByUsername} from '../data-requests'
import Activities from "./Activities";



const SingleRoutine = (props) => {
  const { id } = useParams();
  console.log(id)
  const{
    activities,
    routines,
    deleteRoutine,
    singleRoutine,
    setSingleRoutine,
    getRoutinesByUsername,
    setRoutineActivity,
    activityGoal,
    setActivityGoal,
    activityDuration,
    setActivityDuration,
    getCurrentUser,
    getRoutines,
    userRoutines,
    navigate
    } = props;

    const updateRoutineActivity = async (ev) => {
      ev.preventDefault();
      console.log(id,activityGoal,activityDuration)
      //console.log(activities)
      try{ //console.log(id) 
      const result = await getUpdateRoutineActivity(id,activityGoal,activityDuration)
        //console.log(result)
        //navigate('/userprofile');
      }catch(err){
        console.error('problem in updateRoutineActivity in App!', err);
      }
      };
  
          console.log(singleRoutine);

  console.log(routines)
    useEffect(()=>{
    	getRoutines()
    	getCurrentUser();
    	getRoutinesByUsername();
     	// navigate('/myprofile')
    },[]);

    return(
        <>
        <Fragment>
         <h1>SingleRoutine Render</h1>
        <Card style={{backgroundColor: "purple", border: "5px solid black" }}>
            <Typography variant="h5" color='black'> Name: {singleRoutine.name}</Typography>
            <Typography variant="h5" color='black'> Creator: {singleRoutine.creatorName}</Typography>
            <Typography variant="h5" color='black'> Goal: {singleRoutine.goal}</Typography>
            <Typography variant="h5" color='black'> CreatorId: {singleRoutine.creatorId}</Typography>
     
            {singleRoutine.activities.length > 0 ?( <Typography variant="h5" color='black'>Attached Activities:</Typography>):(null) }
            <Typography variant="h5" color='black'>{singleRoutine.activities.map((activity) =>(
             <Fragment key={activity.id}> 
              <Typography variant="h6" color='black' > Name:{ activity.name}</Typography>
              </Fragment>
    
            ))}</Typography>
        </Card>
    
              <Link to={`/add-activity/${singleRoutine.id}`} >
              <Button  type='submit' variant='contained'size='small' >Add Activity
              </Button></Link>

            <Button  type='submit' variant='contained'size='small'  onClick={() => {
              setSingleRoutine(singleRoutine);
              navigate(`/edit-routine/${singleRoutine.id}`);
                      }}>Edit Routine
            </Button>

              <Button  type='submit' variant='contained'size='small'  onClick={() => {
    destroyRoutine(id)
    //navigate('/userprofile');
              }}>Delete Routine</Button></Fragment>

      
     
     
        </>
    )
};


export default SingleRoutine;