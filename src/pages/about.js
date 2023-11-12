import React from 'react';
import Layout from '../../components/Layout';
import ProtectedRoute from "../../components/protect/protectedRoute";


const About = () => {
  return (
    <Layout>
      <ProtectedRoute>
        <div className='multi-color-gradient' style={{ marginTop: "50px",height:"100vh" }}>
       <div>
        <h1 className='header_about'>අප ගැන</h1>
       </div>
        </div>
      </ProtectedRoute>
    </Layout>
  );
};

export default About;
