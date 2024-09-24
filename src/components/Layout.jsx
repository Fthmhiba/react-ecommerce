import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';

const Layout = () => {
  return (
    <div className=''>
      <Header /> 
      <main className="p-4 bg-amber-100   ">
        <Outlet /> 
      </main>
    </div>
  );
};

export default Layout;
