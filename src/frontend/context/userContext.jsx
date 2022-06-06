import { useState, useEffect, createContext, useContext} from 'react'
import axios from "axios";

const UserContext = createContext(null);

const UserProvider = ({children}) => {
    const [userData, setUserData] = useState([]);
    const loggedUserData = JSON.parse(JSON.stringify({...userData[0]}));
    
    const fetchUserData = async () => {
        const fetchedUserData = await axios.get(`/api/users/`);
        setUserData(fetchedUserData.data.users);
    };
    
    useEffect(() => {
        fetchUserData()
    }, []);
    
    
    return (
        <UserContext.Provider value={{loggedUserData}}>
            {children}
        </UserContext.Provider>
    )
}

const useUser = () => useContext(UserContext);

export {UserProvider, useUser}