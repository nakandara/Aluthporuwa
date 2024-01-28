import React, { useState, useEffect } from "react";

import LayoutSecond from "../../../components/LayoutSecond/LayoutSecond";
import ProtectedRoute from "../../../components/protect/protectedRoute"; 
import { useRouter } from 'next/router';


const Campaign = () => {
  const router = useRouter();

  const CreatePost = () =>{
    router.push('/myPostPage'); 
  }
  

  return (
    <LayoutSecond>
      <ProtectedRoute>
      <div>
        <div className="" style={{ marginTop: "50px" }}>
          <div>
            <h1 className="header_campaign">Payment Method</h1>
            <div className="campaign-container">
              <div className="payment-card-gold" style={{ marginTop: "50px" }}>
                <div className="payment-image ">
                <div className="card-title">Gold Plan</div>
                </div>
                <div className="card-content">
                  <h6 className="golden-point">Automatic Filter Top List Your Add</h6>
                  <h6 className="golden-point">Automatic Filter Top List Your Add</h6>
                  {/* Add any additional information here */}
                  <p className="card-description">
                   __________
                  </p>
                  <button onClick={CreatePost} className="attractive-button">Select</button>
                </div>
              </div>

              <div className="payment-card-silver " style={{ marginTop: "50px" }}>
                <div className="payment-image">
                  <div className="card-title">Silver Plan</div>
                </div>
                <div className="card-content">
                  <h6 className="golden-point">Automatic Filter Top List Your Add</h6>
                  <h6 className="golden-point">Automatic Filter Top List Your Add</h6>
                  <h6 className="golden-point">Automatic Filter Top List Your Add</h6>
                  <h6 className="golden-point">Automatic Filter Top List Your Add</h6>
                  {/* Add any additional information here */}
                  <p className="card-description">
                   __________
                  </p>
                  <button onClick={CreatePost} className="attractive-button">Select</button>
                </div>
              </div>

              
            </div>
          </div>
        </div>
      </div>
      </ProtectedRoute>
    </LayoutSecond>
    
  );
};

export default Campaign;
