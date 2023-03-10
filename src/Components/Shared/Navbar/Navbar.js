import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../AuthContext/AuthContext';

const Navbar = () => {
    const {user, logOut}=useContext(UserContext);
    const handleLogOut=()=>{
        logOut()
        .then(()=>{

        })
        .catch((error)=>{
            console.log(error);

        })

    }
    console.log(user);
    return (
        <div >
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><Link>Item 1</Link></li>
        <li tabIndex={0}>
          <Link className="justify-between">
            Parent
            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
          </Link>
          <ul className="p-2">
            <li><Link>Submenu 1</Link></li>
            <li><Link>Submenu 2</Link></li>
          </ul>
        </li>
        <li><Link>Item 3</Link></li>
      </ul>
    </div>
    <Link className="btn btn-ghost normal-case text-xl text-red-500">Buy and Sell Tv</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal p-0">
      <li><Link to='/'>Home</Link></li>
   {
    !user?.email?
    <>
      <li><Link to='/register'>Register</Link></li>
      <li><Link to='/login'>Login</Link></li>
    </>
    :
    <>
    <li><button onClick={handleLogOut}>LogOut</button></li>
    <li><Link to='/dashboard'>Dashboard</Link></li>
    </>

   }
    <li><Link to='/blogs'>Blogs</Link></li>
    
      
    </ul>
  </div>
  <div className="navbar-end">
  {/* <label htmlFor="my-drawer-2" className="drawer-overlay btn btn-info">Open drower</label>  */}
  <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
  </div>
</div>
        </div>
    );
};

export default Navbar;