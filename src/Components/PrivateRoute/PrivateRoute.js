import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { UserContext } from '../AuthContext/AuthContext';

const PrivateRoute = ({children}) => {
  const {user,loader}=useContext(UserContext);
  let location = useLocation();

  if(loader){
    return<div>Loading...</div>

  }

  if (user) {
   
    return children ;
  }

  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;