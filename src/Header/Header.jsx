import { Navbar } from 'flowbite-react';
import { NavLink } from 'react-router-dom';
import './Header.css'
const links = <>
  <li><NavLink to='/'>Home</NavLink></li>
  <li><NavLink to='/donation'>Donation</NavLink></li>
  <li><NavLink to='/Statistics'>Statistics</NavLink></li>
  

</>

const Header = () => {
    return (
        <Navbar className='nav' >
        <div className="navbar nav  justify-between">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
              </label>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow   rounded-box w-52">
                {links}

              </ul>
            </div>
            <img src="https://i.ibb.co/F0gFnCV/Logo.png" alt="Logo" border="0" />
            
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              {links}

            </ul>
          </div>
         
        </div>
      </Navbar>
    );
};

export default Header;