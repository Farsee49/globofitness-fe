import React, {useEffect,Fragment} from "react";
import  { Typography,Button,TextField,Checkbox } from '@mui/material';
import { Link, useParams, useNavigate} from "react-router-dom";
import { getAddActivity } from "../data-requests";


const AddActivity = (props) => {
    const { id } = useParams();
    console.log(id)
    const{
        navigate,
        activities,
        addActivityId,
        setAddActivityId,
        addActivityCount,
        setAddActivityCount,
        addActivityDuration,
        setAddActivityDuration,
    } = props;

    const addActivity = async (ev) => {

        ev.preventDefault();
        console.log(id, addActivityId, addActivityCount, addActivityDuration)
        console.log(activities)
      try{ console.log(id) 
       const result = await getAddActivity(id, addActivityId, addActivityCount, addActivityDuration)
          //console.log(result)
          navigate('/userprofile');
        }catch(err){
          console.error('problem in updateActivity in EditActivity!', err);
        }
      };
      useEffect(()=>{
        
    },[]);
    return(
        <>
         <h1>Render Add Activity</h1>
         <form onSubmit={addActivity}>
         <TextField id="filled-basic"  variant="standard"
         type="text"
         placeholder='Activity Id'
         value={addActivityId}
         onChange={(ev)=>{setAddActivityId(ev.target.value)}} />
          
         <TextField id="filled"  variant="standard"
         type="text"
         placeholder='Activity Count'
         value={addActivityCount}
         onChange={(ev)=>{setAddActivityCount(ev.target.value)}}
         />
         <TextField id="filled"  variant="standard"
         type="text"
         placeholder='Activity Duration'
         value={addActivityDuration}
         onChange={(ev)=>{setAddActivityDuration(ev.target.value)}}
         />
         <Button  type='submit' variant='contained'size='small'>SUBMIT</Button>
     </form>
      <Typography variant="h4" color='black'>Activities:</Typography>

            <Typography variant="h5" color='black'>{activities.map((activity) =>(
             <Fragment key={activity.id}> 
              <Typography variant="h5" color='black' > Name:{ activity.name}</Typography>
              <Typography variant="h6" color='black' > Description:  { activity.description}</Typography>
              <Typography variant="h6" color='black' > ID:  { activity.id}</Typography>
              </Fragment>
    
            ))}</Typography>
        </>
    )
};


export default AddActivity;