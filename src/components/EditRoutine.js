import React from "react";
import  { Typography,Button,TextField,Checkbox } from '@mui/material';
import { Link, useParams } from "react-router-dom";
import {getUpdateRoutine} from '../data-requests'

const EditRoutine = (props) => 
{
    const{
        editRoutineName,
        setEditRoutineName,
        editRoutineGoal,
        setEditRoutineGoal,
        userRoutines,
        routines
    
    }= props;


    const updateRoutine = async (ev) => {
       
        ev.preventDefault();
        userRoutines.filter((routine) => {
       if (routine.id=  routine.id){
           // console.log(routineId)
             return routine.id
           }  
       })//
        console.log(userRoutines)
       
        console.log(id, name)
        
        try{
            
       //const result = await getUpdateRoutine(routineId,editRoutineName, editRoutineGoal)
        }catch(err){
          console.error('problem in updateRoutine in Routines!', err);
        }
      };
    return(
      <>
         <form onSubmit={updateRoutine}>
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
             </form>
      </>
    )
};

export default EditRoutine;