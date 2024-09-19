import { useContext, useState } from "react";
import { UserContext } from "../Context/UserContext.jsx";
import { Link, Navigate, useParams } from "react-router-dom";
import axios from "axios";
import PlacesPage from "../Pages/PlacesPage.jsx";
import AccountNav from "../Helpers/AccountNav.jsx";

const ProfilePage = () => {
    const [redirect, setRedirect] = useState(null);
    const { setToken, ready, user, setUser } = useContext(UserContext);
    let { subpage } = useParams();
    if (subpage === undefined) {
        subpage = 'profile';
    }

    const logout = async () => {
    
       

        try {
            // Clear token from local storage
            localStorage.removeItem('token');
        
            // Reset token in context
            setToken(null);
            
        
            // Show success toast
            alert("Logged out successfully");
        
          } catch (error) {
            console.error("Error during logout:", error);
            
          }
          setRedirect('/');
          setUser(null);
      
    }

    if (!ready) {
        return 'Loading...';
    }

    if (ready && !user && !redirect) {
        return <Navigate to={'/login'} />
    }

    if (redirect) {
        return <Navigate to={redirect} />
    }
    return (
        <div>
            <AccountNav />
            {subpage === 'profile' && (
                <div className="text-center max-w-lg mx-auto">
                    Logged in as {user.name} ({user.email})<br />
                    <button onClick={logout} className="primary max-w-sm mt-2">Logout</button>
                </div>
            )}
            {subpage === 'places' && (
                <PlacesPage />
            )}
        </div>
    );
}



export default ProfilePage