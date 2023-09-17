// import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import Usermap from '../../components/Home/Usermap'

const Dashboard = () => {
  // const { data: session, status } = useSession();
  const router = useRouter();


  return (
    <Layout>
      <div>
        <h1>Welcome to the Dashboard</h1>
        <p>User one: </p>
      </div>
      <Usermap/>
    </Layout>
  );
};

export default Dashboard;
