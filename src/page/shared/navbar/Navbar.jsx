import { Link, NavLink } from "react-router-dom";
import profile from '../../../assets/user.png'
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
const Navbar = () => {
  const{user,logOut,loading}=useContext(AuthContext)
  const handleLogout=()=>{
    logOut()
    .then(console.log('Log Out Successfully'))
    .catch(error =>console.log(error))
  }
  if(loading){
    return <span className="loading loading-bars loading-lg"></span>
  }
    const navLink = <>
    <li><NavLink to='/'>Home</NavLink></li>
    <li><NavLink to='/about'>About</NavLink></li>
    <li><NavLink to='/career'>Career</NavLink></li>
    <li><NavLink to='/addict'>Addict</NavLink></li>
    <li><NavLink to='/login'>Login</NavLink></li>
    </>
    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      {navLink}
      </ul>
    </div>
   
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {navLink}
    </ul>
  </div>
 
  <div className="navbar-end">
  <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS Navbar component" src={profile} />
        </div>
        </div>
        {
          user ?
          <>
          <button onClick={handleLogout} className="btn" >Log Out</button>
          </>:
           <Link to='/login'> <button className="btn">Login</button></Link>
        }
  
  </div>
</div>
    );
};

export default Navbar;