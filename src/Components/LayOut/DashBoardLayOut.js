import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { UserContext } from '../AuthContext/AuthContext';
import UseAdmin from '../Hooks/UseAdmin';
import UseSeller from '../Hooks/UseSeller';
import UseBuyer from '../Hooks/UseBuyer';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';

const DashBoardLayOut = () => {
  const {user}=useContext(UserContext);
  const [isAdmin]=UseAdmin(user?.email);
  const [isSeller]=UseSeller(user?.email);
  const [isBuyer]=UseBuyer(user?.email);
  console.log(isAdmin,isSeller,isBuyer);
  // console.log(isAdmin,isBuyer,isSeller);


    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    <Outlet></Outlet>
    {/* <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label> */}
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
    
    {
    isBuyer && <li><Link to='/dashboard/myorder'>My orders</Link></li>
  }

{
  isSeller && 
  <>
  <li><Link to='/dashboard/addproduct'>Add A product</Link></li>
   <li><Link to='/dashboard/myproducts'>My products</Link></li>
  </>
 }
   

{
  isAdmin &&
  <>
    <li><Link to='/dashboard/allseller'>All Seller</Link></li>
      <li><Link to='/dashboard/allbuyers'>All Buyers</Link></li>
<li><Link to='/dashboard/reporttoadmin'>Report to admin</Link></li>
  </>
}
  

  

 

  
  

 

  
 



      


      
      
    </ul>
  
  </div>
</div>
            <Footer></Footer>
        </div>
    );
};

export default DashBoardLayOut;