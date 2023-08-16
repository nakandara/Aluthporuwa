

import React from 'react'
import { useRouter } from "next/router";
 const ProtectedComponent = () => {
  const router = useRouter();


  
  return (
    <div>
      vfsfsf
    </div>
  );
};

// export const getServerSideProps = async (ctx) => {
//   const session = await getSession(ctx);
//   if(!session) 
//   return{
//     redirect:{
//       destination:'auth/signin'
//     }
//   }
//   return {
//     props: { session }
//   };
// };


export default ProtectedComponent