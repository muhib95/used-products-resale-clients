import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { UserContext } from '../../AuthContext/AuthContext';
import UseBuyer from '../../Hooks/UseBuyer';

const BuyerRoute = ({Children}) => {
    const {user,loader}=useContext(UserContext);
    const [isBuyer,isBuyerLoading]=UseBuyer(user?.email);
  let location = useLocation();
console.log(isBuyer);
  if(loader || isBuyerLoading){
    return<div>Loading...</div>

  }

  if (user && isBuyer) {
   
    return Children ;
  }

  return <Navigate to="/login" state={{ from: location }} replace />;
};


export default BuyerRoute;