import React from "react";
import  { Card,Typography,Button,TextField} from '@mui/material';
import {  useParams } from "react-router-dom";
import {getUpdateRoutine} from '../data-requests'


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
        navigate
    }= props;

    const updateRoutine = async (ev) => {
        ev.preventDefault();
        console.log(userRoutines)
        console.log(id) 
      try{
          const result = await getUpdateRoutine(id,editRoutineName,editRoutineGoal)
          console.log(result)
          navigate('/userprofile');
        }catch(err){
          console.error('problem in updateRoutine in EditRoutines!', err);
        }
      };
    return(
      <>
      <br>
     </br>
     <Typography variant="h4" color='black'>
      EDIT YOUR GLOBO ROUTINE</Typography>
          <form onSubmit={updateRoutine} >
                <TextField id="filled-basic"  variant="standard"
                 type="text"
                 placeholder="Routine Name"
                 onChange={(ev)=>{setEditRoutineName(ev.target.value)}}
                 />
                 <TextField id="filled-basic"  variant="standard" 
                 type="text"
                 placeholder='Routine Goal'
                 onChange={(ev)=>{setEditRoutineGoal(ev.target.value)}}
                 />
              <Button  type='submit' variant='contained'size='small'>SUBMIT</Button>   
          </form>
              <br>
              </br>
          <Card style={{backgroundColor: "purple",
            border: "5px solid black", width: '600px',
             height: '400px', margin: '8px'}}>
            <Typography variant="h4" color='black'>
               Name: {singleRoutine.name}
            </Typography>
            <Typography variant="h4" color='black'>
               Creator: {singleRoutine.creatorName}
            </Typography>
            <Typography variant="h4" color='black'>
               Goal: {singleRoutine.goal}
            </Typography>
            <Typography variant="h4" color='black'>
               CreatorId: {singleRoutine.creatorId}
            </Typography>
          </Card>
      </>
    )
};

export default EditRoutine;