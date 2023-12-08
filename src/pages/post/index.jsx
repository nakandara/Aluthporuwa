import React, { useState, useEffect } from "react";
import Layout from "../../../components/Layout";
import axios from "axios";
import { environments } from "../../../components/environment/environments";
import { useRouter } from "next/router";
import { useToken } from '../../context/TokenContext';

const Post = () => {
  const { user } = useToken();
  const router = useRouter();
  const [data, setData] = useState('');
  
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (user && user.userId) {
      const apiUrl = `${environments.BASE_HOST_URL}/api/getPosts/${user.userId}`;

      async function fetchPostData() {
        try {
          setLoading(false)
          const response = await axios.get(apiUrl);
          if (response.data) {
            setLoading(true);
            const posts = response.data;
            setData(posts);
          }
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }

      fetchPostData();
    }
  }, [user]);

  const handleClick = (postId) => {
    router.push(`/post/${postId}`); // Redirects to the specific post route
  };

  if (!user) {
    return <div>Loading user data...</div>;
  }


  return (
    <Layout>
      <div style={{ marginTop: "70px", marginBottom: "40vh" }}>
        <div className="card-container-post">
          {loading?<> {data?.map((post, index) => (
            <div className="card-post" key={index} onClick={() => handleClick(post.postId)}>
              <div className="image_postView">
                <img
                  className="image_postView_image"
                  src={post.image}
                  alt={`Image ${index + 1}`}
                />
              </div>
              <div className="description">{post.description.slice(0, 18)}</div>
            </div>
          ))}</>:<>Loading...........</>}
        </div>
      </div>
    </Layout>
  );
};

export default Post;
