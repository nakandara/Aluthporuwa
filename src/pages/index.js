import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import axios from "axios";
import Usermap from "../../components/Home/Usermap";
import LayOut from "../../components/Layout";
import Sidebar from "../../components/Sidebar";
import { useState } from "react";

export default function Component() {
  const [genderMale, setGenderMale] = useState({name:"male"});
  const { data: session } = useSession();
  const router = useRouter();

  if (session && session.user) {
    return (
      <>
        <LayOut>gdgdgd</LayOut>
      </>
    );
  }

  const handleSignIn = async (e) => {
   
   console.log(genderMale);
   
    try {
      console.log(process.env.BASE_URL);
      const response = await axios.post(
        "http://localhost:8080/api/createGender",
        genderMale
      );
      console.log(response);
    } catch (error) {}
    router.push(`/auth/signin?callbackUrl=${router.asPath}`);
  
   
  };

  return (
    <>
      <div className="gender">
        <div>Are you</div>
        <br />
        <button className="male" onClick={handleSignIn}>
          Male
        </button>{" "}
        Or
        <button className="female" onClick={handleSignIn}>
          Female
        </button>{" "}
        ?
      </div>
    </>
  );
}
