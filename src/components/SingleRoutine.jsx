import React, {useEffect} from "react";
import  { Typography,Button,TextField,Checkbox } from '@mui/material';
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
         <h1>SingleRoutine Render</h1>
         <div id="routineCard">
      <h1>{singleRoutine.name}</h1> 
       <p>Goal: {singleRoutine.goal}</p>
      <p>Creator: {singleRoutine.creatorName}</p>
      <p>CreatorId: {singleRoutine.creatorId}</p>
      <ul>Attached Activities: {singleRoutine.activities.map((activity) =>(
             <li key={activity.id} onClick={() => {
              setRoutineActivity(activity);
                navigate(`/routine-activities/${activity.routineActivityId}`);
              }}>Activity Name:  {activity.name}
              <Link to={`/routine-activities/${activity.routineActivityId}`} >
              <Button  type='submit' variant='contained'size='small' >Edit Routine Activity
              </Button></Link>
                <p>RoutineActivity Id: {activity.routineActivityId}</p></li>

            ))}</ul>
      </div>

      <Link to={`/add-activity/${singleRoutine.id}`} >
              <Button  type='submit' variant='contained'size='small' >Add Activity
              </Button></Link>

              <Button  type='submit' variant='contained'size='small'  onClick={() => {
  setSingleRoutine(singleRoutine);
    navigate(`/edit-routine/${singleRoutine.id}`);
    }}>Edit Routine</Button>

              <Button  type='submit' variant='contained'size='small'  onClick={() => {
    destroyRoutine(id)
    //navigate('/userprofile');
              }}>Delete Routine</Button>

<>
         <h1>Routine Activity Render</h1>
      

      {/* <Link to={`/add-activity/${activity.id}`} >
              <Button  type='submit' variant='contained'size='small' >Add to Routine
              </Button></Link> */}

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
      {/* <ul>
            {
            activities.map((activity) =>(
            <li key={activity.id} > <div> Id: {activity.id}</div> <div>Name: {activity.name}</div>  
          Description: {activity.description}
          <Link to={`/edit-activity/${activity.id}`} >
              <Button  type='submit' variant='contained'size='small' >Edit Activity
              </Button></Link>

              <Link to={`/add-activity/${activity.id}`} >
              <Button 
               type='submit' variant='contained'size='small' >Add to Routine
              </Button></Link>

              <Button  type='submit' variant='contained'size='small'
                onClick={() => {
                  setRoutineActivity(activity);
                  navigate(`/routine-activities/${activity.id}`);
                }}
              >
                {activity.name}
              </Button>
             
          </li>))
            }
        </ul> */}
     
        </>
    )
};


export default SingleRoutine;