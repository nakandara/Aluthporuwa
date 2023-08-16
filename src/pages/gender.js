// import { useState } from "react";
// import { useSession, signIn, signOut } from "next-auth/react";
// import { useRouter } from "next/router";

// const gender = () => {
//     const { data: session } = useSession();
//     const [genderMale, setGenderMale] = useState({name:"male"});
//     const handleSignIn = async (e) => {
   
//         console.log(session?.user?._id);
        
//          try {
//            console.log(process.env.BASE_URL);
//            const response = await axios.post(
//              "http://localhost:8080/api/createGender",
//              genderMale
//            );
//            console.log(response);
//          } catch (error) {}
//          router.push(`/auth/signin?callbackUrl=${router.asPath}`);
       
        
//        };
//   return (
//     <div>
//       <div className="gender">
//         <div>Are you</div>
//         <br />
//         <button className="male" onClick={handleSignIn}>
//           Male
//         </button>{" "}
//         Or
//         <button className="female" onClick={handleSignIn}>
//           Female
//         </button>{" "}
//         ?
//       </div>
//     </div>
//   );
// };

// export default gender;

import React from 'react';

function GenderPage() {
  // Your component logic goes here
  return (
    <div>
      {/* Your page content */}
    </div>
  );
}

export default GenderPage;

