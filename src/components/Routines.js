import React, {useState, useEffect} from 'react';
import  { Typography,Button,TextField,Checkbox } from '@mui/material';
import { fetchRoutines, createRoutine, getUpdateRoutine} from '../data-requests';
import { Link, useParams } from "react-router-dom";



const Routines =  (props) => {
    const {
      routines,
      setRoutines,
      activities,
      user,
      token,
      editRoutineName,
      setEditRoutineName,
      editRoutineGoal,
      setEditRoutineGoal,
      newRoutineGoal,
      newRoutineName,
      setNewRoutineName,
      setNewRoutineGoal
    } = props

  
      const getRoutines = async (routines) => {
      
       try{
         const result =await fetchRoutines(token);
		     //console.log(result)
         setRoutines(result)
        }catch(err){
          console.error('problem getting routines inside Routines!', err);
        }   
      };

      //  const updateRoutine = async (ev) => {
      //   const{routineId} = useParams();
      //   console.log(routineId)
      //   console.log(routines)
         
   
      //   ev.preventDefault()
      //   console.log(editRoutineName, editRoutineGoal)
      //   try{
      //    // const result = await getUpdateRoutine(routineId,editRoutineName, editRoutineGoal)
      //   }catch(err){
      //     console.error('problem in updateRoutine in Routines!', err);
      //   }
      // };


    const createNewRoutine = async (ev) => {
      ev.preventDefault()
      console.log(newRoutineName, newRoutineGoal)
      try{
        //const result = await createRoutine(newRoutineName, newRoutineGoal);
    }catch(err){
        console.error('problem in the handlesubmit in creating a routine!', err);
    }
  };

    useEffect(()=>{
      getRoutines();
  },[token]);
  
  return(
    <>
      <h1>Create Routines</h1>
      <form onSubmit={createNewRoutine}>
        <TextField id="filled-basic"  variant="standard"
         type="text"
         placeholder='Routine Name'
         value={newRoutineName}
         onChange={(ev)=>{setNewRoutineName(ev.target.value)}}
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
             
            ))}</ul><h1>Edit Routine</h1>

              <Link to={`/edit-routine/${routine.id}`} >
              <Button  type='submit' variant='contained'size='small' >Edit Routine
              </Button></Link>
             {/* <form onSubmit={updateRoutine}>
                <TextField id="filled-basic"  variant="standard"
                 type="text"
                 placeholder='Routine Name'
                 value={editRoutineName}
                 onChange={(ev)=>{setEditRoutineName(ev.target.value)}}
                 />
                 <TextField id="filled-basi<>c"  variant="standard"
                 type="text"
                 placeholder='Routine Goal'
                 value={editRoutineGoal}
                 onChange={(ev)=>{setEditRoutineGoal(ev.target.value)}}
                 />
                 <Button  type='submit' variant='contained'size='small'>SUBMIT</Button>
             </form> */}
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