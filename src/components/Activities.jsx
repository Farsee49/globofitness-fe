import React, { useEffect,Fragment } from "react";
import { Link, Navigate ,useParams} from "react-router-dom";
import { Typography, Button, TextField, Card } from "@mui/material";
import { createActivity} from "../data-requests";

const Activities = (props) => {
  const { id } = useParams();
    console.log(id);
  const {
    newActivityDescription,
    setNewActivityDescription,
    setNewActivityName,
    newActivityName,
    getActivities,
    activities,
    isLoggedIn,
    navigate,
    setEditActivityName,
    setEditActivityDescription,
    fetchActivityWithRoutines
  } = props;

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    getActivities()
    console.log(newActivityName, newActivityDescription);
    try {
        const result = await createActivity(
        newActivityName,
        newActivityDescription
      );
      navigate('/activities')
      setNewActivityName('')
      setNewActivityDescription('')
    } catch (err) {
      console.error("problem in the handlesubmit in creating a activity!", err);
    }
  };

  useEffect(()=>{
		getActivities();
},[]);

  return (
    <>
    <br></br>
      {isLoggedIn?(
        <Fragment>
          <Typography variant="h3" color='black'>Create a new GLOBO Activity</Typography>
          <form onSubmit={handleSubmit}>
           <TextField
            id="filled-basic"
            variant="standard"
            type="text"
            placeholder="Activity Name"
            value={newActivityName}
            onChange={(ev) => {
            setNewActivityName(ev.target.value);
            }}
            />
          </form>
          <form onSubmit={handleSubmit}>
            <TextField
            id="filled"
            variant="standard"
            type="text"
            placeholder="Activity Description"
            value={newActivityDescription}
            onChange={(ev) => {
            setNewActivityDescription(ev.target.value);
            }}
            />
        <Button type="submit" variant="contained" size="small">
          SUBMIT
        </Button>
           </form>
           <br></br>
      </Fragment>):(null)}
      <br></br>
      <Typography variant="h3" color='black'> GLOBO ACTIVITIES</Typography>
        {activities.map((activity) => (
          <Fragment key={activity.id}>
          <Card style={{backgroundColor: "purple", border: "5px solid black", width: '600px',overflow: 'auto', height: '200px', margin: '8px'}}>
            <Typography variant="h5" color='black'>Name: {activity.name}</Typography>
            <Typography variant="h5" color='black'>Description: {activity.description}</Typography>
            <Typography variant="h5" color='black' > Id:{ activity.id}</Typography>
           {isLoggedIn?(
           <>
            <Link to={`/edit-activity/${activity.id}`}>
              <Button
                type="submit"
                variant="contained"
                size="small"
                onClick={() => {
                  setEditActivityName(activity.name),
                    setEditActivityDescription(activity.description);}}>
                Edit Activity
              </Button> 
              </Link>

               <Link to={`/activity-routines/${activity.id}`}>
                 <Button
                type="submit"
                variant="contained"
                size="small"
                onClick={() => {
                 fetchActivityWithRoutines(activity.id);}}>
                Routines
              </Button>
              </Link>
            </> 
          ):(null)}
         </Card>
          {" "}</Fragment>
        ))}
      </>
  
  );
};

export default Activities;
