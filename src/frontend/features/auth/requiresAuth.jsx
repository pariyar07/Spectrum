import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

export function RequiresAuth() {
  const { isLogged } = useSelector((store) => store.auth);
  return isLogged === true ? <Outlet /> : <Navigate to="/login" replace />;
}
