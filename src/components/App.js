
import React, {useState, useEffect} from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Activities from "./Activities";
import Login from "./Login";
import Register from "./Register";
import Routines from "./Routines";
import Nav from "./Navbar";
import RoutineActivities from "./RoutineActivities";
import UserProfile from "./UserProfile";
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

const navigate = useNavigate();
   

const tokenCheck = () => {
	//console.log(window.localStorage.getItem('token'))
   if(window.localStorage.getItem('token')) {
    setToken(window.localStorage.getItem('token'));
   }
   console.log(token)
};

useEffect(()=>{
    tokenCheck();
},[token]);


// const getRoutinesByUsername = async (token) => {
// 	console.log(user)
// 	const username = user.username
// 	const result = await routinesByUsername(username)
// 	setUserRoutines();
// 	console.log(result);
	
// };

const getCurrentUser = async (token) => {
	const result = await getUser(token);
    console.log(result);
	setUser(result)
	console.log(user)
};


useEffect(()=>{
	getCurrentUser();
	//getRoutinesByUsername();
   
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
					isLoggedIn={isLoggedIn}
					routines={routines}
					user={user} />
				}/>

				<Route path= '/routines'
				 element={<Routines
				    setRoutines={setRoutines}
					routines={routines}
					activities={activities}
					isLoggedIn={isLoggedIn}
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
				 	user={user}
					token={token}/>
				 }/>

			</Routes>
		</>
    )
};


export default App;