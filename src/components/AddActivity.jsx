import React, {useEffect,Fragment} from "react";
import  { Card,Typography,Button,TextField } from '@mui/material';
import { useParams, } from "react-router-dom";
import { getAddActivity } from "../data-requests";


const AddActivity = (props) => {
    const { id } = useParams();
    console.log(id)
    const{
        navigate,
        activities,
        addActivityId,
        getActivities,
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
        getActivities();
    },[]);
    return(
        <>
        <br></br>
    <Typography variant="h4" color='black' >ADD ACTIVITIES TO YOUR GLOBO ROUTINE</Typography>
    <br></br>
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
     <br></br>
      <Typography variant="h4" color='black'>Activities:</Typography>
      <br></br>
      <Card style={{backgroundColor: "purple", border: "5px solid black",
      width: '600px',overflow: 'auto', height: '400px', margin: '8px'}}>
            <Typography variant="h5" color='black'>{activities.map((activity) =>(
             <Fragment key={activity.id}> 
              <Typography variant="h5" color='black' > Name:{ activity.name}</Typography>
              <Typography variant="h6" color='black' > Description:  { activity.description}</Typography>
              <Typography variant="h6" color='black' > ID:  { activity.id}</Typography>
            </Fragment>
            ))}</Typography></Card>
        </>
    )
};


export default AddActivity;