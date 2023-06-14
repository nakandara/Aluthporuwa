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
    <div>
      {/* Add your header component here */}
      <header>
        {/* Your header content */}
       <Header/>
      </header>

      {/* Render the main content */}
      <main>
           <div>
 <Sidebar/>
       {children}
     </div>
      </main>

      {/* Add your footer component here */}
      <footer>
        {/* Your footer content */}
      </footer>
    </div>
  );
};

export default Layout;
