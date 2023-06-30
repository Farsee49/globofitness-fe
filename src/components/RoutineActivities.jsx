import React, {Fragment} from "react";
import  { Card,Typography,Button,TextField,Checkbox } from '@mui/material';
import { Link, useParams } from "react-router-dom";
import {destroyRoutineActivity, getUpdateRoutineActivity} from '../data-requests'



const RoutineActivities = (props) => {
  const { id } = useParams();
  console.log(id)
  const{
    routines,
    singleActivity,
    setSingleActivity,
    routineActivity,
		setRoutineActivity,
    activityId,
    setActivityId,
    activityGoal,
    setActivityGoal,
    activityDuration,
    setActivityDuration,
    navigate
  } = props;

  const updateRoutineActivity = async (ev) => {
    ev.preventDefault();
    console.log(id,activityGoal,activityDuration)
    //console.log(activities)
    try{ //console.log(id) 
    const result = await getUpdateRoutineActivity(id,activityGoal,activityDuration)
      //console.log(result)
      navigate('/userprofile');
    }catch(err){
      console.error('problem in updateRoutineActivity in App!', err);
    }
    };

        console.log(routineActivity);
    return(
        <>
         <Card style={{backgroundColor: "purple", 
         border: "5px solid black", 
         width: '600px', height: '400px',
         margin: '8px'}}>
         <Typography  variant="h4" color='black' >Edit Routine Activity </Typography>
        

      <Link to={`/add-activity/${routineActivity.id}`} >
              <Button  type='submit' variant='contained'size='small' >Add to Routine
              </Button></Link>

              <form onSubmit={updateRoutineActivity}>
                <TextField id="filled-basic"  variant="standard"
                 type="text"
                 placeholder='Count'
                 value={activityGoal}
                 onChange={(ev)=>{setActivityGoal(ev.target.value)}}
                 />
                 <TextField id="filled"  variant="standard"
                 type="text"
                 placeholder='Duration'
                 value={activityDuration}
                 onChange={(ev)=>{setActivityDuration(ev.target.value)}}
                 />
                
                 <Button  type='submit' variant='contained'size='small'>SUBMIT</Button>
             </form>

             <Typography  variant="h4" color='black' > Name: {routineActivity.name}</Typography>
             <Typography  variant="h4" color='black' > Id: {routineActivity.id}</Typography>
            <Typography variant="h4" color='black'>Count: {routineActivity.count}</Typography>
            <Typography variant="h4" color='black'>Duration: {routineActivity.duration}</Typography>
           

             <Button  type='submit' variant='contained'size='small'  onClick={() => {
   destroyRoutineActivity(id)
    console.log(id)
    navigate('/userprofile');
              }}>Delete Activity</Button></Card>
      {/* <ul>
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
        </ul> */}
        </>
    )
};


export default RoutineActivities;