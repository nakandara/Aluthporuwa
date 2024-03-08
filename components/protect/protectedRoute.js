import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useToken } from "../../src/context/TokenContext";

const ProtectedRoute = ({ children }) => {
  const { user } = useToken();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const parsedUser = JSON.parse(storedUser);
    console.log(parsedUser);
    if (parsedUser !== undefined) {
      setIsLoading(false);
      if (!parsedUser) {
        router.push("/auth/signin");
      }
    }
  }, 10); 

  console.log(isLoading,'ffffffffffffff');

 

  return <>{children}</>;
};

export default ProtectedRoute;
