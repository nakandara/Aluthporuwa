import React from "react";
import Head from "next/head"; // Importing Head component from next/head
import LayoutSecond from "../../../components/LayoutSecond/LayoutSecond";
import MobileProtectedRoute from "../../../components/protect/mobileProtectRoute";
import { useRouter } from "next/router";

const Campaign = () => {
  const router = useRouter();

  const handleSelect = (option) => {
    console.log(option, "1111111");
    router.push({
      pathname: "/packages",
      query: { category: option },
    });
  };

  return (
    <>

      <LayoutSecond>
        <MobileProtectedRoute>
        <h1 className="page-title">Select a Category</h1> {/* Page Title */}
            {/* Gold Plan Card */}
          <div className="campaign-container">
           
            {/* Gold Plan Card */}
            <div className="package-card pink">
              <div className="card-title">Vehicles</div>
              <div className="card-content">
                <div className="image-container">
                  <img
                    src="/media/car_1365799.png"
                    alt="Car Icon"
                    className="card-icon"
                  />
                  <img
                    src="/media/truck-facing-right_82396.png"
                    alt="Truck Icon"
                    className="card-icon"
                  />
                </div>
                <h6 className="golden-point">
                  1. Your advertisement receives premium placement for maximum
                  visibility.
                </h6>
                <h6 className="golden-point">
                  2. Enhanced Visibility: Highlighted listings attract more
                  attention from potential buyers or renters.
                </h6>
                <h6 className="golden-point">
                  3. Priority Support: Access to dedicated customer support for
                  swift resolution of any issues.
                </h6>
                <p className="card-description">__________</p>
                <button
                  onClick={() => handleSelect("Vehicles")}
                  className="attractive-button"
                >
                  Select
                </button>
              </div>
            </div>

            {/* Silver Plan Card */}
            <div className="package-card green">
              <div className="card-title">Property</div>
              <div className="card-content">
                <img
                  style={{ width: "90px", height: "80px" }}
                  src="/media/deal_8858003.png"
                  alt="Silver Icon"
                  className="card-icon"
                />
                <h6 className="golden-point">
                  1. Standard Placement: Your advertisement is displayed
                  prominently among other listings.
                </h6>
                <h6 className="golden-point">
                  2. Moderate Visibility: Listings are visible to a wide audience,
                  ensuring decent exposure.
                </h6>
                <h6 className="golden-point">
                  3. Basic Support: Standard assistance is available for any
                  queries or concerns.
                </h6>
                <p className="card-description">__________</p>
                <button
                  onClick={() => handleSelect("Property")}
                  className="attractive-button"
                >
                  Select
                </button>
              </div>
            </div>
          </div>
        </MobileProtectedRoute>
      </LayoutSecond>
    </>
  );
};

export default Campaign;
