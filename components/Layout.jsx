import React from 'react';
import Sidebar from './Sidebar';
import Header from './header'
import Newsidebarandhome from '../components/newsidebarandhome'

// const Layout = ({ children }) => {
//   return (
//     <div>
// <Sidebar/>
//       {children}
//     </div>
    
    
//   );
// };

// export default Layout;



const Layout = ({ children }) => {
  return (
    <div className="layout">
      <div className="content">
        <Newsidebarandhome/>
        {/* <Sidebar />
        <div className='grid_one'>
        <div className='header_one'> <Header/></div>
       <div className='main_one'>{children}</div>
       <div className='footer_one'>Fotter</div>
        </div> */}
      </div>
    </div>


    // <div className="layout">
    // <div className='header_one'>
    //   <Header />
    // </div>
    // <div className="content">
    //   <Sidebar />
    //   <div className="main">{children}</div>
    
    // </div>
    // <div className='footer_one'>sdjbhasjidbs</div>
   
  //</div>
  );
};

export default Layout;
