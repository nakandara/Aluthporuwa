import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { environments } from "../../components/environment/environments";
import { useToken } from "../../src/context/TokenContext";
import axios from "axios";

const MobileProtectedRoute = ({ children }) => {
  const { user } = useToken();
  const router = useRouter();
  const [isVerified, setIsVerified] = useState(null);
  console.log(user,'useruseruser');

  useEffect(() => {
    if (!user) {
      // If there's no user, redirect to login or a relevant page
      router.push("/login");
      return;
    }

    const checkVerification = async () => {
      try {
        const response = await axios.get(`${environments.BASE_HOST_URL}/api/get-otp/${user.userId}`);
        const otpData = response.data;
        if (otpData.length > 0 && otpData[0].veryOTP) {
          setIsVerified(true);
        } else {
          setIsVerified(false);
          router.push("/SendOtp");
        }
      } catch (error) {
        console.error("Error checking verification status:", error);
        setIsVerified(false);
        router.push("/SendOtp");
      }
    };

    checkVerification();
  }, [user, router]);

  if (isVerified === null) {
    return <div>Loading...</div>; // Add a loading state while fetching
  }

  return <>{isVerified && children}</>;
};

export default MobileProtectedRoute;
