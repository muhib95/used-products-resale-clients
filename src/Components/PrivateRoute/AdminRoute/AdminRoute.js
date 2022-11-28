import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { UserContext } from '../../AuthContext/AuthContext';
import UseAdmin from '../../Hooks/UseAdmin';

const AdminRoute = ({children}) => {
    const {user,loader}=useContext(UserContext);
    const [isAdmin,isAdminLoading]=UseAdmin(user?.email);
  let location = useLocation();
console.log(isAdmin);
  if(loader || isAdminLoading){
    return<div>Loading...</div>

  }

  if (user && isAdmin) {
   
    return children ;
  }

  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default AdminRoute;