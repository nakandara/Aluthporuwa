import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";


export default function Component() {

  const { data: session } = useSession();
  const router = useRouter();

  if (session && session.user) {
    return (
      <div>
<div style={{display:"flex",backgroundColor:"red", justifyContent:"flex-end"}}>
        Signed in as {session.user.email} <br />
        <button  onClick={() => signOut()}>Sign out</button>
        
      </div>
      </div>
    );
  }

 
  const handleSignIn = () => router.push(`/auth/signin?callbackUrl=${router.asPath}`);

  return (
    <>
      Not signed in <br />
      <button onClick={handleSignIn}>Sign in</button>
    </>
  );
}
