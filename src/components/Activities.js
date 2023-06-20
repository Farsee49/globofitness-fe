import React, { useState, useEffect } from "react";
import  { Typography,Button,TextField,Checkbox } from '@mui/material';
import { fetchActivities, createActivity } from "../data-requests";



const Activities = (props) =>  {
        const [newActivityName, setNewActivityName] = useState([]);
        const [newActivityDescription, setNewActivityDescription] = useState([]);
        const {
            setActivities,
            activities,
            token
             } = props

        const getActivities = async () => {
            try{const result = await fetchActivities(token);
                //console.log(result)
             setActivities(result); 
            }catch(err){
                console.error('problem getting activities in Activities!', err);
            } 
        };
        const handleSubmit = async (ev) => {
            ev.preventDefault()
            console.log(newActivityName, newActivityDescription)
            try{
                const result = await createActivity(newActivityName, newActivityDescription)
            }catch(err){
                console.error('problem in the handlesubmit in creating a activity!', err);
            }
        };

useEffect(()=>{
    getActivities()
},[]);
 

    return(
 <>
   <h1>Activities Render</h1>
      <h2>Create a new Activity</h2>
      <form onSubmit={handleSubmit}>
         <TextField id="filled-basic"  variant="standard"
         type="text"
         placeholder='Activity Name'
         value={newActivityName}
         onChange={(ev)=>{setNewActivityName(ev.target.value)}} />
           </form>
           <form onSubmit={handleSubmit}>
         <TextField id="filled-basic"  variant="standard"
         type="text"
         placeholder='Activity Description'
         value={newActivityDescription}
         onChange={(ev)=>{setNewActivityDescription(ev.target.value)}}
         />
         <Button  type='submit' variant='contained'size='small'>SUBMIT</Button>
     </form>
        <ul>
            {
            activities.map((activity) =>(
            <li key={activity.id} > <div> Id: {activity.id}</div> <div>Name: {activity.name}</div>  
          Description: {activity.description}</li>))
            }
        </ul>
 </>
    )
};

export default Activities;