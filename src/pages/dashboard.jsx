import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

const Dashboard = () => {
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

  // Add your protected dashboard content here
  return (
    <div>
      <h1>Welcome to the Dashboard</h1>
      <p>User: {session?.user?.email}</p>
    </div>
  );
};

export default Dashboard;
