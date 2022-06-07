import { Navigate } from "react-router-dom";
import { useAuth } from "frontend/context/authContext";

export function RequiresAuth({ children }) {
    const { isLoggedIn } = useAuth();
    return isLoggedIn ? (
        children
    ) : (
        <Navigate to="/login" replace />
    );
}
