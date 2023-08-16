// import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import Usermap from '../../components/Home/Usermap'

const Dashboard = () => {
  // const { data: session, status } = useSession();
  const router = useRouter();

  // if (status === 'loading') {
  //   return <h1>Loading...</h1>;
  // }

  // if (status === 'unauthenticated') {
  //   // Redirect the user to the sign-in page
  //   router.push('/auth/signin');
  //   return null;
  // }
  // console.log(session)
  // Add your protected dashboard content here
  return (
    <Layout>
      <div>
        <h1>Welcome to the Dashboard</h1>
        <p>User: </p>
      </div>
      <Usermap/>
    </Layout>
  );
};

export default Dashboard;
