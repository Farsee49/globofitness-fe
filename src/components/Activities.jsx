import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import  { Typography,Button,TextField,Checkbox } from '@mui/material';
import { createActivity } from "../data-requests";



const Activities = (props) =>  {
      
        const {
            newActivityDescription,
            setNewActivityDescription,
            setNewActivityName,
            newActivityName,
            getActivities,
            setActivities,
            activities,
            token
             } = props

        
        const handleSubmit = async (ev) => {
            ev.preventDefault()
         //getActivities()
            console.log(newActivityName, newActivityDescription)
            try{
                const result = await createActivity(newActivityName, newActivityDescription)
            }catch(err){
                console.error('problem in the handlesubmit in creating a activity!', err);
            }
        };

       
         
        //     Promise.all([
        //         //getRoutines(),
        //         getActivities(),
        //         //getCurrentUser(),
        //         //getRoutinesByUsername()
        //         ])
        //       .then(([user,
        //               result,
        //               activities,
        //               routines,
        //               userRoutines]) => {
        //          // setUser(user)
        //           setActivities(activities)
        //           //setRoutines(routines);
        //          // setUserRoutines(userRoutines)
        //       })
        //       .catch ((error) => {
        //         return (
        //           console.error(error)
        //         );
        //       })
        
        //   }, []);
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
         <TextField id="filled"  variant="standard"
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
          Description: {activity.description}
          <Link to={`/edit-activity/${activity.id}`} >
              <Button  type='submit' variant='contained'size='small' >Edit Activity
              </Button></Link>

              {/* <Link to={`/add-activity/${activity.id}`} >
              <Button  type='submit' variant='contained'size='small' >Add to Routine
              </Button></Link> */}
             
          </li>))
            }
        </ul>
 </>
    )
};

export default Activities;