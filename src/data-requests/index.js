//const BASE_URL = 'https://fitnessbe-6yvx.onrender.com/api/'
const BASE_URL = 'http://fitnesstrac-kr.herokuapp.com/api/';

//===================================USER DATA REQUESTS=============//
export const registerUser = async (user) => {
   console.log(user)
 // const {username, password} =user
    try {
      const response = await fetch(
        `${BASE_URL}/users/register`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
        username: user.username,
        password: user.password
        })
      });
      const result = await response.json();
     
      console.log(result)
      return result
    } catch (err) {
      console.error(err);
    }
  };

  export const login = async (user) => {
    console.log(user)
   // const {username, password} =user
    try {
      const response = await fetch(`${BASE_URL}/users/login`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: user.username,
          password: user.password
        })
      });
      const result = await response.json();
      console.log(result);
      return result
    } catch (err) {
      console.error(err);
    }
};


 export const getUser = async () => {
    const token = localStorage.getItem("token");
    try {
      const response = await fetch(`${BASE_URL}/users/me`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
      });
      const result = await response.json();
      //passed:console.log(result);
      return result
    } catch (err) {
      console.error('ERROR Getting the User Info!!!!',err);
    }
  };

  export const routinesByUsername = async (username) => {
    const token = localStorage.getItem("token");
    try {
      const response = await fetch(`${BASE_URL}/users/${username}/routines`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
      });
      const result = await response.json();
      //console.log(result);
      return result
    } catch (err) {
      console.error('ERROR Getting Routines by Username!!!!', err);
    }
  };
        

//===================================ACTIVITIES DATA REQUESTS=============//
export const fetchActivities = async () => {
    try {
      const response = await fetch(`${BASE_URL}/activities`, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      const result = await response.json();
  
      //passed:console.log(result);
      return result
    } catch (err) {
      console.error(err);
    }
  };

  export const createActivity = async (
    newActivityName,
    newActivityDescription,
  ) => {
    console.log(' create act call')
    console.log(newActivityName, newActivityDescription)
    const token = localStorage.getItem("token");
    try {
      const response = await fetch(`${BASE_URL}/activities`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          name: newActivityName,
          description: newActivityDescription,
        }),
      });
  
      const result = await response.json();
  
      console.log(result);
      return result;
    } catch (err) {
      console.error('ERROR Creating User in Data-requests!!!!',err);
    }
  };
  
  export const routinesWithActivity = async (routine) => {
    try {
      const response = await fetch(`${BASE_URL}/activities/${routine}/routines`, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const result = await response.json();
      console.log(result);
      return result
    } catch (err) {
      console.error(err);
    }
  };


//===================================ROUTINES DATA REQUESTS=============//
  export const fetchRoutines = async () => {
    try {
    const response = await fetch(`${BASE_URL}/routines`, {
      headers: {
      'Content-Type': 'application/json',
      },
    });
    
    const result = await response.json();
    //passed:console.log(result);
    return result
    } catch (err) {
    console.error(err);
    }
    };

    export const createRoutine= async (newRoutineName, newRoutineGoal) => {
      const token = localStorage.getItem("token");
      try {
        const response = await fetch(`${BASE_URL}/routines`, {
          method: "POST",
          headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify({
            name: newRoutineName,
            goal: newRoutineGoal,
            isPublic: true
          })
        });
        const result = await response.json();
        console.log(result);
        return result
      } catch (err) {
        console.error(err);
      }
    };

    export const getUpdateRoutine = async (routineId) => {
      const token = localStorage.getItem("token");
      try {
        const response = await fetch(`${BASE_URL}/routines/${routineId}`, {
          method: "PATCH",
          headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${TOKEN_STRING_HERE}`
          },
          body: JSON.stringify({
            name: 'Long Cardio Day',
            goal: 'To get your heart pumping!'
          })
        });
        const result = await response.json();
        console.log(result);
        return result
      } catch (err) {
        console.error(err);
      }
    };
        


    