import React from "react";
import  { Typography,Button,TextField,Checkbox } from '@mui/material';
import { Link, useParams } from "react-router-dom";
import {getSingleActivityWithRoutines, getUpdateRoutineActivity} from '../data-requests'



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
      //navigate('/userprofile');
    }catch(err){
      console.error('problem in updateRoutineActivity in App!', err);
    }
    };

        console.log(routineActivity);
    return(
        <>
         <h1>Routine Activity Render</h1>
         <div id="activityCard">
      <h1>{routineActivity.name}</h1> 
       <p>Count: {routineActivity.count}</p>
      <p>Duration {routineActivity.duration}</p>
      <p>Activity Id: {routineActivity.id}</p>
      </div>

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