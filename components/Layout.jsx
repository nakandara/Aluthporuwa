import React from 'react';
import Sidebar from './Sidebar';
import Header from './header'
import Newsidebarandhome from '../components/newsidebarandhome'





const Layout = ({ children }) => {
  return (
    <div className="layout">
      <div className="content">
        <Newsidebarandhome/>
        <div className='main_one'>{children}</div>
        {/* <Sidebar />
        <div className='grid_one'>
        <div className='header_one'> <Header/></div>
       <div className='main_one'>{children}</div>
       <div className='footer_one'>Fotter</div>
        </div> */}
      </div>
    </div>


    
  );
};

export default Layout;
