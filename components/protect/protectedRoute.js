import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useToken } from "../../src/context/TokenContext";

const ProtectedRoute = ({ children }) => {
  const { user } = useToken();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const user = JSON.parse(storedUser);
    console.log(user);
    if (user !== undefined) {
      setIsLoading(false);
      if (!user) {
        router.push("/auth/signin");
      }
    }
  }, [user]);

  if (isLoading) {
    // You can show a loading spinner or any other loading indicator here
    return <div>Loading...</div>;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
