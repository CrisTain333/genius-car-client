import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import UserContext from "../Contexts/Context";

const ProtectedRoute = ({ children }) => {
  let location = useLocation();
  const { user, loading } = useContext(UserContext);

  if (loading) {
    return (
      <>
        <p>Loadign.....</p>
      </>
    );
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
};

export default ProtectedRoute;
