import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

const ProtectedRoute = ({ Component }) => {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === 'loading') {
    return <h1>Loading...</h1>;
  }

  if (status === 'unauthenticated') {
    // Redirect the user to the sign-in page
    router.push('/auth/signin');
    return null;
  }

  // Render the protected component
  return <Component session={session} />;
};

export default ProtectedRoute;
