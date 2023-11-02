import React, { useState,useEffect } from "react";
import Layout from "../../components/Layout";
import { useRouter } from "next/router";
import ProtectedRoute from "../../components/protect/protectedRoute"; 
import { useToken } from '../context/TokenContext';

const myPostPage = () => {
  const {  user } = useToken();
  const router = useRouter();
 

  return (
    <Layout>
      <ProtectedRoute>
      <div style={{ marginTop: "50px" }}>
     
      </div>
      </ProtectedRoute>
     
    </Layout>
  );
};

export default myPostPage;
