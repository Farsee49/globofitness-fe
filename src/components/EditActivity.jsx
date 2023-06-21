import React from "react";
import  { Typography,Button,TextField,Checkbox } from '@mui/material';
import { Link, useParams } from "react-router-dom";
import { getUpdateActivity } from '../data-requests'


const EditActivity = (props) => {
    const { id } = useParams();
    console.log(id)
    const {
        activities,
        editActivityName,
        setEditActivityName,
        editActivityDescription,
        setEditActivityDescription  
    } = props;

    const updateActivity = async (ev) => {

        ev.preventDefault();
        console.log(activities)
      try{ console.log(id) 
          const result = await getUpdateActivity(id,editActivityName, editActivityDescription)
          console.log(result)
        }catch(err){
          console.error('problem in updateActivity in EditActivity!', err);
        }
      };
    return(
        <>
            <h1>Edit Activity Render</h1>
            <form onSubmit={updateActivity}>
                <TextField id="filled-basic"  variant="standard"
                 type="text"
                 placeholder='Routine Name'
                 value={editActivityName}
                 onChange={(ev)=>{setEditActivityName(ev.target.value)}}
                 />
                 <TextField id="filled-basi<>c"  variant="standard"
                 type="text"
                 placeholder='Routine Goal'
                 value={editActivityDescription}
                 onChange={(ev)=>{setEditActivityDescription(ev.target.value)}}
                 />
                 <Button  type='submit' variant='contained'size='small'>SUBMIT</Button>
             </form>
        </>
    )
};

export default EditActivity;