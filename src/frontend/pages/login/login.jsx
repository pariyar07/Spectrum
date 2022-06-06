import Login from "frontend/components/login";
import axios from "axios";
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from 'frontend/context/authContext';
import { useToast } from 'frontend/custom/useToast';

export default function LogIn() {
    const { setIsLoggedIn } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const { showToast } = useToast();

    const handleGuestLogin = async (e) => {
        e.preventDefault();
        try {
            let response = await axios.post("/api/auth/login", {
                username: "satyam",
                email: "satyam@spectrum.com",
                password: "satyam@spectrum123",
            });
            localStorage.setItem("token", response.data.encodedToken);
        } catch (error) {
            console.log(error);
        }
        setIsLoggedIn((isLoggedIn) => !isLoggedIn);
		showToast("Successfully Logged In", 'success');
        navigate(location?.state?.from?.pathname || "/", { replace: true });
    }

    return (
        <>
            <Login login={handleGuestLogin}/>
        </>
    );
}