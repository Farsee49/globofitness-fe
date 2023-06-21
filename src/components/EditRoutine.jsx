import React from "react";
import  { Typography,Button,TextField,Checkbox } from '@mui/material';
import { Link, useParams } from "react-router-dom";
import {getUpdateRoutine} from '../data-requests'

const EditRoutine = (props) => {
  const { id } = useParams();
  console.log(id)
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
        console.log(userRoutines)
      try{ console.log(id) 
          const result = await getUpdateRoutine(id,editRoutineName, editRoutineGoal)
          console.log(result)
        }catch(err){
          console.error('problem in updateRoutine in EditRoutines!', err);
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