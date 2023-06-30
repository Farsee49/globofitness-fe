import React, {Fragment, useEffect} from "react";
import { Typography, Button, TextField, Checkbox, Card } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import { getActivityWithRoutines, getUpdateActivity } from "../data-requests";

const EditActivity = (props) => {
  const { id } = useParams();
  console.log(id);
  const {
    activities,
    navigate,
    editActivityName,
    setEditActivityName,
    editActivityDescription,
    setEditActivityDescription,
    fetchActivityWithRoutines,
    activityRoutines
  } = props;

  console.log("editActivityName", editActivityName);
 
  
  const updateActivity = async (ev) => {
    ev.preventDefault();
    console.log(activities);
    try {
      console.log(id);
      const result = await getUpdateActivity(
        id,
        editActivityName,
        editActivityDescription
      );
      console.log(result);
      navigate('/activities')
    } catch (err) {
      console.error("problem in updateActivity in EditActivity!", err);
    }
  };

  useEffect(()=>{
    fetchActivityWithRoutines();
},[]);

  return (
  <>
    <br></br>
    <Typography  variant="h4" color='black'>
      EDIT A GLOBO ACTIVITY</Typography>
      <br></br>
      <form onSubmit={updateActivity}>
        <TextField
          id="filled-basic"
          variant="standard"
          type="text"
          placeholder="Name"
          value={editActivityName}
          onChange={(ev) => {
            setEditActivityName(ev.target.value);
          }}
        />
        <TextField
          id="filled"
          variant="standard"
          type="text"
          placeholder="Description"
          value={editActivityDescription}
          onChange={(ev) => {
            setEditActivityDescription(ev.target.value);
          }}
        />
        <Button type="submit" variant="contained" size="small">
          SUBMIT
        </Button>
      </form>
      <br></br>
      <Card style={{backgroundColor: "purple", border: "5px solid black",
         width: '600px',overflow: 'auto', height: '400px', margin: '8px'}}>
          <Typography  variant="h4" color='black' >
             Name: {editActivityName}
          </Typography>
           <br></br>
          <Typography variant="h4" color='black'>
            Description: {editActivityDescription}
          </Typography>
      </Card>
    </>
    
  );
};

export default EditActivity;
