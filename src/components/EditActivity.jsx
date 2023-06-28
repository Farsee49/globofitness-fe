import React, {useEffect} from "react";
import { Typography, Button, TextField, Checkbox, Card } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import { getUpdateActivity } from "../data-requests";

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
  console.log(activityRoutines)
  
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
      navigate('/userprofile')
    } catch (err) {
      console.error("problem in updateActivity in EditActivity!", err);
    }
  };

  useEffect(()=>{
	
    fetchActivityWithRoutines();
},[]);

  return (
    <>
      <h1>Edit Activity Render</h1>
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

    </>
  );
};

export default EditActivity;
