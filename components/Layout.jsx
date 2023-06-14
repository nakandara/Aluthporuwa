import React from 'react';
import Sidebar from './Sidebar';
import Header from './header'

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
      <header>
        <Header />
      </header>
      <div className="content">
        <Sidebar />
        <div className="main">{children}</div>
      </div>
      <footer>
        {/* Add your footer content */}
      </footer>
    </div>
  );
};

export default Layout;
