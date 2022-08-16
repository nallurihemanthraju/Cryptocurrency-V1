import React from 'react'
import {Link} from 'react-router-dom'
function Navbar({logFun,loginStatus}) {
  const handleLogout = ()=>{
    logFun(false);
  };
  return (
    <div className={`${loginStatus?'':'hidden'} flex flex-row justify-end w-full gap-x-3 bg-orange-800`}>
 <nav  id="navbar" className="navbar flex justify-end">
          <Link
            to="/home"
             className="font-medium px-3 py-2 text-pink rounded-lg  hover:text-slate-900"
          >
            Home
          </Link>
          <Link
            to="/about"
             className="font-medium px-3 py-2 text-white-700 rounded-lg  hover:text-slate-900"
          >
            About
          </Link>
          <Link
            to="/contact"
             className="font-medium px-3 py-2 text-white-700 rounded-lg  hover:text-slate-900"
          >
            Contact
          </Link>
          <Link
          //  onClick={logoutBtn}
            to="/login"
             className="logoutButton font-medium px-3 py-2 text-white-700 rounded-lg  hover:text-orange-700"
             onClick={handleLogout}
          >
            Logout
          </Link>          
        </nav>       
    </div>
  )
}

export default Navbar