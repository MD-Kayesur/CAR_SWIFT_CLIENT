import { Children, useContext, useEffect } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { AuthContext } from "../authentication/AuthProvider";
 

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
 
  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (user) {
    return children;

    // Redirect to home page if no user found
  } else {
    <Navigate to="/login" state={{ from: location }} replace />;
  }
};

export default PrivateRoute;
