import React, {useState, useEffect} from 'react';
import  { Typography,Button,TextField,Checkbox } from '@mui/material';
import { fetchRoutines, createRoutine } from '../data-requests';


const Routines = (props) => {
  const [newRoutineName, SetNewRoutineName] = useState([]);
  const [newRoutineGoal, setNewRoutineGoal] = useState([]);
    const {
      routines,
      setRoutines,
      activities,
      user,
      token
    } = props

  
  const getRoutines = async () => {
    try{const result =await fetchRoutines(token);
		     //console.log(result)
         setRoutines(result)
        }catch(err){
          console.error('problem getting routines inside Routines!', err)
        }   
      };
    const handleSubmit = async (ev) => {
      ev.preventDefault()
      console.log(newRoutineName, newRoutineGoal)
      try{
        const result = await createRoutine(newRoutineName, newRoutineGoal);
    }catch(err){
        console.error('problem in the handlesubmit in creating a routine!', err);
    }
  };

    useEffect(()=>{
      getRoutines();
  },[token]);
  
  return(
    <>
      <h1>Render Routines</h1>
      <form onSubmit={handleSubmit}>
        <TextField id="filled-basic"  variant="standard"
         type="text"
         placeholder='Routine Name'
         value={newRoutineName}
         onChange={(ev)=>{SetNewRoutineName(ev.target.value)}}
         />
         <TextField id="filled-basic"  variant="standard"
         type="text"
         placeholder='Routine Goal'
         value={newRoutineGoal}
         onChange={(ev)=>{setNewRoutineGoal(ev.target.value)}}
         />
         <Button  type='submit' variant='contained'size='small'>SUBMIT</Button>
     </form>
        <h2>Routines</h2>
      <ol>
        {
         routines && routines.map((routine) =>(
          <li key={routine.id}>
            <p>Id: {routine.id}</p>
            <p>Name: {routine.name}</p>
            <p>Goal: {routine.goal}</p>
            <p>Creator: {routine.creatorName}</p>
            <p>CreatorId: {routine.creatorId}</p>
            <ul>Attached Activities: {routine.activities.map((activity) =>(
             <li key={activity.id}>{activity.name}</li>
            ))}</ul>
           </li>))
        }
      </ol>
      <h2>Activities</h2>
      <ul>
        {/* {
          activities && activities.map((activity) =>(
          <li key={activity.id} >{activity.name}</li>))
        } */}
      </ul>
    </>
  )
};

export default Routines;