import React from 'react';
import Navber from '../../components/Heder/Navber';
import { Outlet } from 'react-router';
import Footer from '../../components/Footer/Footer';

const Root = () => {
  return (
    <div>
      <div className="max-w-[1300px] mx-auto">
        <Navber></Navber>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
