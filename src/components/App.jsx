import React, {useState, useEffect} from "react";
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

import {
	routinesByUsername,
	routinesWithActivity, 
	fetchActivities,
	fetchRoutines,
	getUser
	 } from "../data-requests";

const App = () => {

const [username, setUsername] = useState('');
const [password, setPassword] = useState('');
const [isLoggedIn, setIsLoggedIn] = useState(false);   
const [user, setUser] = useState({});
const [token, setToken] = useState('');
const [activities, setActivities] = useState([]);
const [routines, setRoutines] = useState([]);
const [userRoutines, setUserRoutines] = useState([]);
const [routineActivities, setRoutineActivities] = useState([]);
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
const navigate = useNavigate();


 const tokenCheck = () => {
   if(window.localStorage.getItem('token')) {
    setToken(window.localStorage.getItem('token'));
   }
   console.log(token)
};

   const getRoutines = async (routines) => {
	try{
	  const result =await fetchRoutines(token);
		  //console.log(result)
	  setRoutines(result)
	}catch(err){
	   console.error('problem getting routines inside Routines!', err);
	}   
   };

   const getRoutinesByUsername = async (token) => {     
    try{
        //console.log(user)
        const username = user.username
        const result = await routinesByUsername(username)
        setUserRoutines(result);
        //console.log(result);
    }catch(err){
        console.error('problem in getRoutinesByUsername in UserProfile!', err);
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


    useEffect(()=>{
        tokenCheck();
    },[token]);

    useEffect(()=>{
    	getRoutines
    	getCurrentUser();
    	getRoutinesByUsername();
     	// navigate('/myprofile')
    },[token]);


  return( 
    <>
      <h1>Felix ==== GoodBoy</h1>
			<Nav 
			 isLoggedIn={isLoggedIn}
			 setIsLoggedIn={setIsLoggedIn}
			 navigate={navigate}
			 setToken={setToken}
			 setUser={setUser}
			 user={user}/>

			<Routes>
				
				<Route path= '/register'
				 element={<Register 
					username={username}
					password={password}
					setUsername={setUsername}
					setPassword={setPassword}
					navigate={navigate}
					setToken={setToken}/>
				}/>

			    <Route path= '/login'
				 element={<Login
					username={username}
					password={password}
					setIsLoggedIn={setIsLoggedIn}
					isLoggedIn={isLoggedIn}
					setUsername={setUsername}
					setPassword={setPassword}
					navigate={navigate}
					setToken={setToken}
					setUser={setUser}/>
				}/>
				  
				<Route path= '/activities'
				 element={<Activities
					activities={activities}
					setActivities={setActivities}
					newActivityName={newActivityName}
					setNewActivityName={setNewActivityName}
					newActivityDescription={newActivityDescription}
					setNewActivityDescription={setNewActivityDescription}
					isLoggedIn={isLoggedIn}
					routines={routines}
					user={user} />
				}/>

				<Route path= '/routines'
				 element={<Routines
					newRoutineGoal={newRoutineGoal}
					setNewRoutineGoal={setNewRoutineGoal}
					newRoutineName={newRoutineName}
					setNewRoutineName={setNewRoutineName}
					singleRoutine={singleRoutine}
					setSingleRoutine={setSingleRoutine}
				    setRoutines={setRoutines}
					routines={routines}
					activities={activities}
					isLoggedIn={isLoggedIn}
					navigate={navigate}
					user={user} />
				}/>

			    <Route path= '/routine-activities'
				 element={<RoutineActivities
					routines={routines}
					activities={activities}
					isLoggedIn={isLoggedIn}
					user={user} />
			    }/>

				<Route path= '/userprofile'
				 element={<UserProfile 
					isLoggedIn={isLoggedIn}
			 		setIsLoggedIn={setIsLoggedIn}
					userRoutines={userRoutines}
					setUserRoutines={setUserRoutines}
					setSingleRoutine={setSingleRoutine}
					navigate={navigate}
				 	user={user}
					token={token}/>
				 }/>

				<Route path= '/edit-routine/:id'
				 element={<EditRoutine
					routines={routines}
					editRoutineName={editRoutineName}
					setEditRoutineName={setEditRoutineName}
					editRoutineGoal={editRoutineGoal}
					setEditRoutineGoal={setEditRoutineGoal}
					userRoutines={userRoutines}
			 	/>}/>

				<Route path ='/edit-activity/:id'
				 element={<EditActivity
					activities={activities}
					editActivityName={editActivityName}
					setEditActivityName={setEditActivityName}
					editActivityDescription={editActivityDescription}
					setEditActivityDescription={setEditActivityDescription}
				 />}/>

				<Route path = '/add-activity/:id'
				 element={<AddActivity
					activities={activities}
					addActivityId={addActivityId}
					setAddActivityId={setAddActivityId}
					addActivityCount={addActivityCount} 
					setAddActivityCount={setAddActivityCount}
					addActivityDuration={addActivityDuration}
					setAddActivityDuration={setAddActivityDuration}
				 />}/>

				<Route path = '/single-routine/:id'
				 element={<SingleRoutine
				    activities={activities}
					singleRoutine={singleRoutine} 
					setSingleRoutine={setSingleRoutine}
					navigate={navigate}
				 />}/>



			</Routes>
		</>
    )
};


export default App;