import React, { useState, useEffect } from "react";
import Layout from "../../../components/Layout";
import axios from "axios";
import { environments } from "../../../components/environment/environments";
import { useRouter } from "next/router";
import { useToken } from '../../context/TokenContext';

const PostId = ({ postIdData,loading }) => {
 
  return (
    <Layout>
      <div className="multi-color-gradient" style={{ marginTop: "70px", marginBottom: "40vh" }}>
      <div className="card-container-post">
        {loading?<> {postIdData?.allPosts?.map((post, index) => (
            <div className="card-post" key={index} >
              <div className="image_postView">
                <img
                  className="image_postView_image"
                  src={post.PostDetails.image}
                  alt={`Image ${index + 1}`}
                />
              </div>
              <div className="description">{post.PostDetails.description}</div>
            </div>
          ))}</>:<>Loading..........</>}
     
        </div>
      </div>
    </Layout>
  );
};

export async function getServerSideProps(context) {

  const { postId } = context.query; // Retrieve postId from the context object

  
  try {
    let loading;
    loading=false
    const response = await axios.get(`${environments.BASE_HOST_URL}/api/getPost/${postId}`);
   if (response) {
   
    loading = true
   }
    return {
      props: {
        postIdData: response.data,
        loading // Pass the fetched data as props
      }
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        postIdData: {} ,
        loading
        // Return empty object in case of error or no data
      }
    };
  }
}

export default PostId;
