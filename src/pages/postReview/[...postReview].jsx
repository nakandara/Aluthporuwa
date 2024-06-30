import React, { useState, useEffect } from "react";
import Layout from "../../../components/Layout";
import axios from "axios";
import { environments } from "../../../components/environment/environments";
import LayoutSecond from "../../../components/LayoutSecond/LayoutSecond";
import { useRouter } from "next/router";
import { useToken } from "../../context/TokenContext";
import Typography from "@mui/material/Typography";
import ImageGallery from "react-image-gallery";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import styles from "./postReview.module.css";



const PostReview = ({ postIdData }) => {
  const router = useRouter();
  console.log(postIdData.allPosts[0].PostDetails
    , "postIdDatapostIdData");


  const postId = postIdData.allPosts[0].PostDetails.postId
  const handleWhatsAppClick = (phoneNumber) => {
    if (phoneNumber) {
      const message = "Hello! This is a pre-filled message.";
      const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
      window.open(url, "_blank");
    } else {
      console.error("Phone number not available");
    }
  };

  const updatePost = postIdData.allPosts[0].PostDetails

  const updatedNewPost = {
    ...updatePost,
    verify:true


  }

  const acceptAdd = async (e) =>{
    e.preventDefault();
    console.log(updatedNewPost,'updatedNewPostupdatedNewPost');
    try {
      const response = await axios.put(`${environments.BASE_HOST_URL}/api/editPost/${postId}`, updatedNewPost);
      console.log(response);
      alert('Post updated successfully');
      router.push("/post");
    } catch (error) {
      console.error("Error updating the post", error);
      alert('Error updating the post');
    }
  }

  return (
    <LayoutSecond>
      <div className={styles.PostIdMain}>
        {postIdData?.allPosts?.map((post, index) => (
          <div key={index} className={styles.FirstContent}>
            <div className={styles.imageContainer}>
              <ImageGallery
                items={post.PostDetails.images.map((image) => ({
                  original: image.imageUrl,
                  thumbnail: image.imageUrl,
                }))}
              />
            </div>
            <div className={styles.imageContainer_content}>
              <div>
                <div className={styles.postIdHeading}>{post.PostDetails.title}</div>
                <div className={styles.subtitle}>
                  Posted on 24 Jan 9:57 pm, <strong>{post.PostDetails.city}</strong>
                </div>
                <div className={styles.horizontalLine}></div>
                <div className={styles.postIdPhoneNumber}>
                  Phone Number: {post.PostDetails.mobileNumber}
                  <button onClick={() => handleWhatsAppClick(post.PostDetails.mobileNumber)}>
                    Contact via WhatsApp
                  </button>
                </div>
              </div>
              <div>
                <div className={styles.postIdDescription}>Description</div>
                <Typography
                  className={styles.postIdDescription_content}
                  sx={{ color: "black" }}
                  variant="body1"
                >
                  {post.PostDetails.description}
                </Typography>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button onClick={acceptAdd} className={styles.fixedButton}>ACCEPT</button>
      <div className={styles.ThirdContent}>ThirdContent</div>
     
    </LayoutSecond>
  );
};

export async function getServerSideProps(context) {
  const { postReview } = context.query;

  try {
    const response = await axios.get(
      `${environments.BASE_HOST_URL}/api/getPost/${postReview}`
    );

    return {
      props: {
        postIdData: response.data,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        postIdData: {},
      },
    };
  }
}

export default PostReview;
