import {createContext, useEffect, useState} from "react";
import axios from "axios";


export const UserContext = createContext({});

export const UserContextProvider = ({children}) => {
  const [user,setUser] = useState(null);
  const [ready,setReady] = useState(false);
  const [token, setToken] = useState(localStorage.getItem('token'));
  
   // Fetch profile if user is null
   useEffect(() => {
    const fetchProfile = async () => {
      try {
        
        if (!token) {
          setUser(null);
          setReady(true);
          return; // No token, skip fetching profile
        }
        // console.log("Fetching profile with token:", token);
        const { data } = await axios.get('/profile', {
          headers: { "content-type":"application/json",Authorization: `Bearer ${token}` },});
        setUser(data);
      } catch (error) {
        if (error.response) {
          if (error.response.status === 401) {
            localStorage.removeItem("token");  
            setToken(null);
            setUser(null);
          }
           else if (error.response.status === 403){
            setUser(null);
          }
          else {
            console.error("Failed to fetch profile:", error);
          }
        } else {
          console.error("An error occurred while fetching profile:", error);
        }
      } finally {
        setReady(true);
      }
    };

    fetchProfile();
  }, []);
  return (
    <UserContext.Provider value={{user,setUser,ready,token,setToken}}>
      {children}
    </UserContext.Provider>
  );
}




