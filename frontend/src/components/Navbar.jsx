import React, { useContext, useState } from 'react';
import { assets } from '../assets/assets';
import { NavLink, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const { token, setToken, userData } = useContext(AppContext);

  const logout = () => {
    localStorage.removeItem('token');
    setToken(false);
    navigate('/login');
  };

  return (
    <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-b-[#ADADAD]">
      {/* Updated Top Logo */}
      <img
        onClick={() => navigate('/')}
        className="w-44 cursor-pointer object-contain"
        src={assets.MediTrack} // Updated to use MediTrack.png
        alt="MediTrack Logo"
      />

      {/* Navigation Links */}
      <ul className="md:flex items-start gap-5 font-medium hidden">
        <NavLink to="/" activeClassName="text-primary">
          <li className="py-1">HOME</li>
        </NavLink>
        <NavLink to="/doctors" activeClassName="text-primary">
          <li className="py-1">ALL DOCTORS</li>
        </NavLink>
        <NavLink to="/about" activeClassName="text-primary">
          <li className="py-1">ABOUT</li>
        </NavLink>
        <NavLink to="/contact" activeClassName="text-primary">
          <li className="py-1">CONTACT</li>
        </NavLink>
      </ul>

      <div className="flex items-center gap-4">
        {token && userData ? (
          <div className="flex items-center gap-2 cursor-pointer group relative">
            <img className="w-8 rounded-full" src={userData.image} alt="User" />
            <img className="w-2.5" src={assets.dropdown_icon} alt="Dropdown Icon" />
            <div className="absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block">
              <div className="min-w-48 bg-gray-50 rounded flex flex-col gap-4 p-4">
                <p
                  onClick={() => navigate('/my-profile')}
                  className="hover:text-black cursor-pointer"
                >
                  My Profile
                </p>
                <p
                  onClick={() => navigate('/my-appointments')}
                  className="hover:text-black cursor-pointer"
                >
                  My Appointments
                </p>
                <p onClick={logout} className="hover:text-black cursor-pointer">
                  Logout
                </p>
              </div>
            </div>
          </div>
        ) : (
          <button
            onClick={() => navigate('/login')}
            className="bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block"
          >
            Create account
          </button>
        )}
        {/* Mobile Menu Icon */}
        <img
          onClick={() => setShowMenu(true)}
          className="w-6 md:hidden"
          src={assets.menu_icon}
          alt="Menu Icon"
        />

        {/* Mobile Menu */}
        <div
          className={`md:hidden ${
            showMenu ? 'fixed w-full' : 'h-0 w-0'
          } right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}
        >
          <div className="flex items-center justify-between px-5 py-6">
            <img
              src={assets.MediTrack} // Updated to use MediTrack.png for mobile
              className="w-36 object-contain"
              alt="MediTrack Logo"
            />
            <img
              onClick={() => setShowMenu(false)}
              src={assets.cross_icon}
              className="w-7"
              alt="Close Menu"
            />
          </div>
          <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium">
            <NavLink onClick={() => setShowMenu(false)} to="/">
              <p className="px-4 py-2 rounded-full inline-block">HOME</p>
            </NavLink>
            <NavLink onClick={() => setShowMenu(false)} to="/doctors">
              <p className="px-4 py-2 rounded-full inline-block">ALL DOCTORS</p>
            </NavLink>
            <NavLink onClick={() => setShowMenu(false)} to="/about">
              <p className="px-4 py-2 rounded-full inline-block">ABOUT</p>
            </NavLink>
            <NavLink onClick={() => setShowMenu(false)} to="/contact">
              <p className="px-4 py-2 rounded-full inline-block">CONTACT</p>
            </NavLink>
          </ul>
          {/* Bottom Logo for Mobile Menu */}
          <div className="flex justify-center mt-5">
            <img
              src={assets.footer} // Updated to use footer.png for bottom logo
              className="w-36 object-contain"
              alt="Footer Logo"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
