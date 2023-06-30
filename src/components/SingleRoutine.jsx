import React, {Fragment, useEffect} from "react";
import  { Typography,Button, Card } from '@mui/material';
import { Link, useParams } from "react-router-dom";
import {destroyRoutine,getUpdateRoutineActivity} from '../data-requests'


const SingleRoutine = (props) => {
  const { id } = useParams();
  console.log(id)
  const{
    singleRoutine,
    setSingleRoutine,
    getRoutinesByUsername,
    activityGoal,
    activityDuration,
    getCurrentUser,
    getRoutines,
    navigate
    } = props;

    const updateRoutineActivity = async (ev) => {
      ev.preventDefault();
      console.log(id,activityGoal,activityDuration)
      try{  
      const result = await getUpdateRoutineActivity(id,activityGoal,activityDuration)
      navigate('/userprofile');
      }catch(err){
        console.error('problem in updateRoutineActivity in App!', err);
      }
      };
  
    useEffect(()=>{
    	getRoutines()
    	getCurrentUser();
    	getRoutinesByUsername();
    },[]);

    return(
        <>
        <br></br>
        <Fragment>
        <br></br>
         <Typography variant="h4" color='black'> EDIT GLOBO ROUTINE: {singleRoutine.name}</Typography>
         <Card style={{backgroundColor: "purple", border: "5px solid black", width: '600px', height: '400px', margin: '8px'}}>
            <Typography variant="h5" color='black'> Name: {singleRoutine.name}</Typography>
            <Typography variant="h5" color='black'> Creator: {singleRoutine.creatorName}</Typography>
            <Typography variant="h5" color='black'> Goal: {singleRoutine.goal}</Typography>
            <Typography variant="h5" color='black'> CreatorId: {singleRoutine.creatorId}</Typography>
            {singleRoutine.activities.length > 0 ?( <Typography variant="h5" color='black'>Attached Activities:</Typography>):(null) }
            <Typography variant="h5" color='black'>{singleRoutine.activities.map((activity) =>(
             <Fragment key={activity.id}> 
              <Typography variant="h6" color='black' > Name:{ activity.name}</Typography>
              </Fragment>
            ))}
            </Typography>
         </Card>
              <Link to={`/add-activity/${singleRoutine.id}`} >
              <Button  type='submit' variant='contained'size='small' >Add a GLOBO Activity
              </Button></Link>
            <Button  type='submit' variant='contained'size='small'  onClick={() => {
              setSingleRoutine(singleRoutine);
              navigate(`/edit-routine/${singleRoutine.id}`);
                      }}>Update GLOBO Routine
            </Button>
              <Button  type='submit' variant='contained'size='small'  onClick={() => {
              destroyRoutine(id)
               navigate('/userprofile');
              }}>Trash Routine
              </Button>
          </Fragment>
        </>
    )
};


export default SingleRoutine;