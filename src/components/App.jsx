import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate, useParams } from "react-router-dom";
import Activities from "./Activities";
import Login from "./Login";
import Register from "./Register";
import Routines from "./Routines";
import Nav from "./Navbar";
import RoutineActivities from "./RoutineActivities";
import UserProfile from "./UserProfile";
import EditRoutine from "./EditRoutine";
import EditActivity from "./EditActivity";
import AddActivity from "./AddActivity";
import SingleRoutine from "./SingleRoutine";
import SingleActivity from "./Single Activity";
import ActivtyWithRoutines from "./ActivityWithRoutines";


import {
	getUpdateRoutineActivity,
	routinesByUsername,
	routinesWithActivity, 
	fetchActivities,
	fetchRoutines,
	getUser,
	destroyRoutine
	 } from "../data-requests";


const App = () => {
	// const { id } = useParams();
	// console.log(id)
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');
const [isLoggedIn, setIsLoggedIn] = useState(false);   
const [user, setUser] = useState({});
const [token, setToken] = useState('');
const [activities, setActivities] = useState([]);
const [routines, setRoutines] = useState([]);
const [userRoutines, setUserRoutines] = useState([]);
const [routineActivity, setRoutineActivity] = useState([]);
const [editRoutineName, setEditRoutineName] = useState([]);
const [editRoutineGoal, setEditRoutineGoal] = useState([]);
const [newRoutineName, setNewRoutineName] = useState([]);
const [newRoutineGoal, setNewRoutineGoal] = useState([]);
const [newActivityName, setNewActivityName] = useState([]);
const [newActivityDescription, setNewActivityDescription] = useState([]);
const [editActivityName, setEditActivityName] = useState([]);
const [editActivityDescription, setEditActivityDescription] = useState([]);
const [singleRoutine, setSingleRoutine] = useState([]);
const [addActivityCount, setAddActivityCount] = useState([]);
const [addActivityDuration, setAddActivityDuration] = useState([]);
const [addActivityId, setAddActivityId] = useState([]);
const [singleActivity, setSingleActivity] = useState([])
const [activityGoal, setActivityGoal] = useState([]);
const [activityDuration, setActivityDuration] = useState([]);
const [activityId, setActivityId] = useState([]);
const navigate = useNavigate();

  const tokenCheck = () => {
    if (window.localStorage.getItem("token")) {
      setToken(window.localStorage.getItem("token"));
    }
    console.log(token);
  };

  const getActivities = async () => {
    try {
      const result = await fetchActivities(token);
      //console.log(result)
      setActivities(result);
    } catch (err) {
      console.error("problem getActivities in App!", err);
    }
  };

  const getRoutines = async (routines) => {
    try {
      const result = await fetchRoutines(token);
      //console.log(result)
      setRoutines(result);
    } catch (err) {
      console.error("problem with getRoutines inside App!", err);
    }
  };

  const getRoutinesByUsername = async (token) => {
    try {
      //console.log(user)
      const username = user.username;
      const result = await routinesByUsername(username);
      setUserRoutines(result);
      //console.log(result);
    } catch (err) {
      console.error("problem in getRoutinesByUsername in App!", err);
    }
  };

   
   const getCurrentUser = async (token) => {
	try{
	const result = await getUser(token);
    console.log(result);
	setUser(result)
	console.log(user)
    }catch(err){
		console.error('problem at getUser in App!', err)
	}
   };

  const deleteRoutine = async () => {
    console.log(id);
    //console.log(activities)
    try {
      //console.log(id)
      const result = await destroyRoutine(id);
      //console.log(result)
      //navigate('/userprofile');
    } catch (err) {
      console.error("problem in Delete Routine in App!", err);
    }
  };

   

//    useEffect(() => {
//     Promise.all([
// 		getRoutines(),
// 		console.log(9900),
// 		getActivities(),
//     	getCurrentUser(),
//     	getRoutinesByUsername()])
//       .then(([user,
//               activities,
//               routines,
//               userRoutines]) => {
//           setUser(user)
//           setActivities(activities)
//           setRoutines(routines);
//           setUserRoutines(userRoutines)
//       })
//       .catch ((error) => {
//         return (
//           console.error(error)
//         );
//       })

//   }, []);

useEffect(()=>{
	const getActivities = async () => {
	const result = await fetchActivities(token)
	setActivities(result)
	};

	const getRoutines = async (routines) => {
	const result =await fetchRoutines(token);
	//console.log(result)
	setRoutines(result)
	};	
	   
	const getCurrentUser = async (token) => {
    const result = await getUser(token);
    console.log(result);
    setUser(result)
    console.log(user)
	};

	const getRoutinesByUsername = async (token) => {     
		//console.log(user)
		const username = user.username
		const result = await routinesByUsername(username)
		setUserRoutines(result);
		//console.log(result);
	   }; 
	

	getCurrentUser();
	getRoutines();
	getActivities();
    getRoutinesByUsername();
  }, [token]);


    useEffect(()=>{
		
        tokenCheck();
    },[,token]);

    // useEffect(()=>{
    // 	getRoutines()
    // 	getCurrentUser();
    // 	getRoutinesByUsername();
    //  	// navigate('/myprofile')
    // },[token]);

  return (
    <>
      <h1>Felix ==== GoodBoy</h1>
      <Nav
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
        navigate={navigate}
        setToken={setToken}
        setUser={setUser}
        user={user}
      />

      <Routes>
        <Route
          path="/register"
          element={
            <Register
              username={username}
              password={password}
              setUsername={setUsername}
              setPassword={setPassword}
              navigate={navigate}
              setToken={setToken}
            />
          }
        />

        <Route
          path="/login"
          element={
            <Login
              username={username}
              password={password}
              setIsLoggedIn={setIsLoggedIn}
              isLoggedIn={isLoggedIn}
              setUsername={setUsername}
              setPassword={setPassword}
              navigate={navigate}
              setToken={setToken}
              setUser={setUser}
            />
          }
        />

        <Route
          path="/activities"
          element={
            <Activities
              activities={activities}
			  getActivities={getActivities}
              setActivities={setActivities}
              newActivityName={newActivityName}
              setNewActivityName={setNewActivityName}
              newActivityDescription={newActivityDescription}
              setNewActivityDescription={setNewActivityDescription}
              //getActivities={getActivities}
              isLoggedIn={isLoggedIn}
              routines={routines}
			  navigate={navigate}
              user={user}
              setEditActivityDescription={setEditActivityDescription}
              setEditActivityName={setEditActivityName}
            />
          }
        />

        <Route
          path="/routines"
          element={
            <Routines
              newRoutineGoal={newRoutineGoal}
              setNewRoutineGoal={setNewRoutineGoal}
              newRoutineName={newRoutineName}
              setNewRoutineName={setNewRoutineName}
              singleRoutine={singleRoutine}
              setSingleRoutine={setSingleRoutine}
              setRoutines={setRoutines}
              routines={routines}
              getRoutines={getRoutines}
              activities={activities}
              isLoggedIn={isLoggedIn}
              navigate={navigate}
              user={user}
            />
          }
        />

        <Route
          path="/routine-activities/:id"
          element={
            <RoutineActivities
              routines={routines}
              activities={activities}
              isLoggedIn={isLoggedIn}
              routineActivity={routineActivity}
              setRoutineActivity={setRoutineActivity}
              activityId={activityId}
              setActivityId={setActivityId}
              activityGoal={activityGoal}
              setActivityGoal={setActivityGoal}
              activityDuration={activityDuration}
              setActivityDuration={setActivityDuration}
              user={user}
            />
          }
        />

        <Route
          path="/userprofile"
          element={
            <UserProfile
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn}
              getRoutines={getRoutines}
              routineActivity={routineActivity}
			  newRoutineGoal={newRoutineGoal}
              setNewRoutineGoal={setNewRoutineGoal}
              newRoutineName={newRoutineName}
              setNewRoutineName={setNewRoutineName}
              setRoutineActivity={setRoutineActivity}
              getRoutinesByUsername={getRoutinesByUsername}
              userRoutines={userRoutines}
              setUserRoutines={setUserRoutines}
              setSingleRoutine={setSingleRoutine}
              navigate={navigate}
              user={user}
              token={token}
            />
          }
        />

        <Route
          path="/edit-routine/:id"
          element={
            <EditRoutine
              routines={routines}
              singleRoutine={singleRoutine}
              setSingleRoutine={setSingleRoutine}
              editRoutineName={editRoutineName}
              setEditRoutineName={setEditRoutineName}
              editRoutineGoal={editRoutineGoal}
              setEditRoutineGoal={setEditRoutineGoal}
              userRoutines={userRoutines}
              navigate={navigate}
            />
          }
        />

        <Route
          path="/edit-activity/:id"
          element={
            <EditActivity
              activities={activities}
			  navigate={navigate}
              editActivityName={editActivityName}
              setEditActivityName={setEditActivityName}
              editActivityDescription={editActivityDescription}
              setEditActivityDescription={setEditActivityDescription}
            />
          }
        />

        <Route
          path="/add-activity/:id"
          element={
            <AddActivity
              activities={activities}
              navigate={navigate}
              addActivityId={addActivityId}
              setAddActivityId={setAddActivityId}
              addActivityCount={addActivityCount}
              setAddActivityCount={setAddActivityCount}
              addActivityDuration={addActivityDuration}
              setAddActivityDuration={setAddActivityDuration}
            />
          }
        />

				<Route path = '/single-routine/:id'
				 element={<SingleRoutine
				    activities={activities}
					deleteRoutine={deleteRoutine}
					singleRoutine={singleRoutine} 
					getRoutines={getRoutines}
					getCurrentUser={getCurrentUser}
					getRoutinesByUsername={getRoutinesByUsername}
					setSingleRoutine={setSingleRoutine}
					setRoutineActivity={setRoutineActivity}
					activityGoal={activityGoal}
					setActivityGoal={setActivityGoal}
					activityDuration={activityDuration}
					setActivityDuration={setActivityDuration}
					userRoutines={userRoutines}
					navigate={navigate}
				 />}/>
				
				<Route path = '/single-activity/:id'
				 element={ <SingleActivity 
					singleActivity={singleActivity}
					setSingleActivity={setSingleActivity}
					activities={activities}
					navigate={navigate}
				 />}/>


			</Routes>
		</>
    )
};

export default App;
