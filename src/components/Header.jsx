import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthContext';
import { CartContext } from '../Contexts/CartContext';

const Header = () => {
  const { user, logout } = useContext(AuthContext);
  const { cart } = useContext(CartContext);
  const [searchQuery, setSearchQuery] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className=" text-yellow-50 bg-amber-900 shadow  py-4 px-6 flex  justify-between items-center" >
      <Link to="/" className="text-xl font-bold">ReactEcom</Link>
      <button
        className="sm:hidden text-white focus:outline-none"
        onClick={toggleMenu}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
          />
        </svg>
      </button>

      <nav
        className={`${isMenuOpen ? 'block' : 'hidden'
          } sm:flex sm:space-x-4 sm:items-center sm:w-auto sm:bg-transparent w-full bg-amber-900 text-white sm:mt-0 mt-4 sm:p-0 p-4`}
      >
        <div className="flex flex-col sm:flex-row sm:space-x-4">
          <input
            type="text"
            value={searchQuery}
            onChange={"handleSearchChange"}
            placeholder="Search products..."
            className="px-4 py-2 rounded border focus:outline-none focus:ring focus:border-blue-300"
          />
          {user ? (
            <>
              <span className="text-sm p-2"> {user}!</span>
              <button
                onClick={logout}
                className="bg-amber-400 hover:bg-amber-500 text-white px-3 py-1 rounded">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="bg-amber-400 hover:bg-amber-200 text-white px-3 py-1 rounded">
                Login
              </Link>
              <Link to="/signup" className="bg-amber-400 hover:bg-amber-200 text-white px-3 py-1 rounded">
                Sign Up
              </Link>
            </>
          )}
          <Link to="/cart" className="bg-amber-400 hover:bg-amber-500 text-white px-3 py-1 rounded">
            Cart <span className='rounded text-xs p-1 bg-amber-600'>{cart.length}</span>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
