




import React, { useState, useEffect } from "react";
import Layout from "../../../components/Layout";
import axios from "axios";
import { environments } from "../../../components/environment/environments";
import { useRouter } from "next/router";
import ProtectedRoute from "../../../components/protect/protectedRoute";
import { useToken } from '../../context/TokenContext';

const Post = () => {
  const { user } = useToken();
  const router = useRouter();
  const [data, setData] = useState([]);

  useEffect(() => {
    if (user && user.userId) {
      const apiUrl = `${environments.BASE_HOST_URL}/api/getPosts/${user.userId}`;

      async function fetchPostData() {
        try {
          const response = await axios.get(apiUrl);

          if (!response.data || !Array.isArray(response.data.allPosts)) {
            throw new Error('Invalid data format received from the API');
          }

          const posts = response.data.allPosts;
          setData(posts);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }

      fetchPostData();
    }
  }, [user]);

  if (!user) {
    return <div>Loading user data...</div>;
  }

  return (
    <Layout>
      <ProtectedRoute>
        <div style={{ marginTop: "70px", marginBottom: "40vh" }}>
          <div className="card-container-post">
            {data?.map((post, index) => (
              <div className="card-post" key={index}>
                <div className="image_postView">
                  <img
                    className="image_postView_image"
                    src={post.PostImageUrl}
                    alt={`Image ${index + 1}`}
                  />
                </div>
                <div className="description">{post.PostDetails.description}</div>
              </div>
            ))}
          </div>
        </div>
      </ProtectedRoute>
    </Layout>
  );
};

export default Post;