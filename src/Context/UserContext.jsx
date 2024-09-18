import {createContext, useEffect, useState} from "react";
import axios from "axios";
import Cookies from "js-cookie"; 


export const UserContext = createContext({});

export const UserContextProvider = ({children}) => {
  const [user,setUser] = useState(null);
  const [ready,setReady] = useState(false);

   // Fetch profile if user is null
   useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = Cookies.get('token'); // Get the token from cookies
        if (!token) {
          setReady(true);
          return; // No token, skip fetching profile
        }
        const { data } = await axios.get('/profile');
        setUser(data);
      } catch (error) {
        if (error.response && error.response.status !== 403) {
        console.error("Failed to fetch profile:", error);
        }
      } finally {
        setReady(true);
      }
    };

    if (!user) {
      fetchProfile();
    } else {
      setReady(true);
    }
  }, [user]);
  return (
    <UserContext.Provider value={{user,setUser,ready}}>
      {children}
    </UserContext.Provider>
  );
}




