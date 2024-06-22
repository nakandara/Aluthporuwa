import React, { useState } from "react";
import LayoutSecond from "../../../components/LayoutSecond/LayoutSecond";
import MobileProtectedRoute from "../../../components/protect/mobileProtectRoute"; 
import Modal from "../../../components/modal/ModalPackage"; // Import the Modal component
import { useRouter } from 'next/router';

const Campaign = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('');
  const router = useRouter();

  const handleSelect = (option) => {
    setSelectedPlan(option);
    setShowModal(true);
  }

  const handleCloseModal = () => {
    setShowModal(false);
  }

  const vehicles = ['Car', 'Truck', 'Motorcycle', 'Bicycle'];

  const { category} = router.query;

  console.log(router.query,'router.queryxxxxxxxxx');

  return (
    <LayoutSecond>
      <MobileProtectedRoute>
      <h1 className="page-title">Payment Plans</h1> {/* Page Title */}
        <div className="campaign-container">
          {/* Gold Plan Card */}
          <div className="payment-card gold">
            <div className="card-title">Gold Add</div>
            <div className="card-content">
              <img style={{width:"80px",height:"70px"}} src="/media/gold-ingots.png" alt="Gold Icon" className="card-icon" />
              <h6 className="golden-point">1. Your advertisement receives premium placement for maximum visibility.</h6>
              <h6 className="golden-point">2. Enhanced Visibility: Highlighted listings attract more attention from potential buyers or renters.</h6>
              <h6 className="golden-point">3. Priority Support: Access to dedicated customer support for swift resolution of any issues.</h6>
           
              <div className="price">රු 699/=</div> {/* Price added */}
              <button onClick={() => handleSelect('Gold')} className="attractive-button">Select</button>
            </div>
          </div>

          {/* Silver Plan Card */}
          <div className="payment-card silver">
            <div className="card-title">Silver Add</div>
            <div className="card-content">
              <img style={{width:"80px",height:"70px"}}  src="/media/diamond.png" alt="Silver Icon" className="card-icon" />
              <h6 className="golden-point">1. Standard Placement: Your advertisement is displayed prominently among other listings.</h6>
              <h6 className="golden-point">2. Moderate Visibility: Listings are visible to a wide audience, ensuring decent exposure.</h6>
              <h6 className="golden-point">3. Basic Support: Standard assistance is available for any queries or concerns.</h6>
             
              <div className="price">රු 599/=</div> {/* Price added */}
              <button onClick={() => handleSelect('Silver')} className="attractive-button">Select</button>
            </div>
          </div>
        </div>

        {/* Modal Component */}
        <Modal show={showModal} category={category} selectedPlan={selectedPlan} onClose={handleCloseModal} vehicles={vehicles} />
      </MobileProtectedRoute>
    </LayoutSecond>
  );
};

export default Campaign;
