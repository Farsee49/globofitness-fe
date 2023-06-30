import React from "react";
import  { Card,Typography,Button,TextField,Checkbox } from '@mui/material';
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
     
         <form onSubmit={updateRoutine} >
                <TextField style={{backgroundColor: "purple", border: "5px solid black", width: '600px', height: '100px'}}id="filled-basic"  variant="standard"
                 type="text"
                 //placeholder='Routine Name'
                 placeholder="Name"
                 onChange={(ev)=>{setEditRoutineName(ev.target.value)}}
                 />
                 <TextField style={{backgroundColor: "purple", border: "5px solid black", width: '600px', height: '50px', margin: '8px'}}id="filled-basic"  variant="standard" 
                 type="text"
                 placeholder='Routine Goal'
                
                 onChange={(ev)=>{setEditRoutineGoal(ev.target.value)}}
                 />
                 <>
                 </>
              <Button  type='submit' variant='contained'size='small'>SUBMIT</Button>   
             </form>
          <Card style={{backgroundColor: "purple", border: "5px solid black", width: '600px', height: '400px', margin: '8px'}}>
      <Typography variant="h4" color='black'> Name: {singleRoutine.name}</Typography>
            <Typography variant="h4" color='black'> Creator: {singleRoutine.creatorName}</Typography>
            <Typography variant="h4" color='black'> Goal: {singleRoutine.goal}</Typography>
            <Typography variant="h4" color='black'> CreatorId: {singleRoutine.creatorId}</Typography>
     
     
      </Card>
      </>
    )
};

export default EditRoutine;