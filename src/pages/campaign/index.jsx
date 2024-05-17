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
                <div className="">
                <div className="card-title">Gold Plan </div>
                </div>
                <div className="card-content">
                  <h6 className="golden-point">1.Your advertisement receives premium placement for maximum visibility.</h6>
                  <h6 className="golden-point">2. Enhanced Visibility: Highlighted listings attract more attention from potential buyers or renters.</h6>
                  <h6 className="golden-point">3. Priority Support: Access to dedicated customer support for swift resolution of any issues.</h6>
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
                  <h6 className="golden-point">1. Standard Placement: Your advertisement is displayed prominently among other listings.</h6>
                  <h6 className="golden-point">2. Moderate Visibility: Listings are visible to a wide audience, ensuring decent exposure.</h6>
                  <h6 className="golden-point">3. Basic Support: Standard assistance is available for any queries or concerns.</h6>
                
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
