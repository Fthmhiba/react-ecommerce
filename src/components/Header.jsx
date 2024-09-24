import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthContext';
import { CartContext } from '../Contexts/CartContext';

const Header = () => {
  const { user, logout } = useContext(AuthContext);
  const { cart } = useContext(CartContext);
  const [searchQuery, setSearchQuery] = useState('');


  return (
    <header className=" text-yellow-50 bg-amber-900 shadow  py-4 px-6 flex justify-between items-center" >
      <Link to="/" className="text-xl font-bold">ReactEcom</Link>
      <nav className="flex space-x-4">
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
      </nav>
    </header>
  );
};

export default Header;
