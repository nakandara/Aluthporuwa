import { GetSessionParams, getSession, useSession } from 'next-auth/react'
import { useRouter } from 'next/router';
import React from 'react'

 const ProtectedComponent = () => {
  const router = useRouter();

  const { data: session, status } = useSession({
    required:true,
    onUnauthenticated:() =>{
      router.push('auth/signin')
    }
  });
  console.log(status);

  if (status=== 'loading') {
    return <h1>Loading..........</h1>
  }

  if (status=== 'unauthenticated') {
    return <h1>you are unauthenticated</h1>
  }
  
  return (
    <div>
      {session.user.email}
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