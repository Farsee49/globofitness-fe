import React from "react";
import  { Typography,Button,TextField,Checkbox } from '@mui/material';
import { Link, useParams } from "react-router-dom";
import {getUpdateRoutine} from '../data-requests'
import SingleRoutine from "./SingleRoutine";

const EditRoutine = (props) => {
  const { id } = useParams();
  console.log(id)
    const{
        editRoutineName,
        setEditRoutineName,
        editRoutineGoal,
        setEditRoutineGoal,
        singleRoutine,
        userRoutines,
        navigate,
        routines
    }= props;

    const updateRoutine = async (ev) => {

        ev.preventDefault();
        console.log(userRoutines)
        console.log(id) 
      try{
          const result = await getUpdateRoutine(id,editRoutineName, editRoutineGoal)
          console.log(result)
          navigate('/userprofile');
        }catch(err){
          console.error('problem in updateRoutine in EditRoutines!', err);
        }
      };
    return(
      <>
         <form onSubmit={updateRoutine}>
                <TextField id="filled-basic"  variant="standard"
                 type="text"
                 //placeholder='Routine Name'
                 placeholder="Name"
                 onChange={(ev)=>{setEditRoutineName(ev.target.value)}}
                 />
                 <TextField id="filled-basi<>c"  variant="standard"
                 type="text"
                 placeholder='Routine Goal'
                
                 onChange={(ev)=>{setEditRoutineGoal(ev.target.value)}}
                 />
                 <Button  type='submit' variant='contained'size='small'>SUBMIT</Button>
             </form>
             <h1>Edit Routine Render</h1>
         <div id="routineCard">
      <h1>{singleRoutine.name}</h1> 
       <p>Goal: {singleRoutine.goal}</p>
      <p>Creator: {singleRoutine.creatorName}</p>
      <p>CreatorId: {singleRoutine.creatorId}</p>
      </div>
      </>
    )
};

export default EditRoutine;