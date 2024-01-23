import React, { useState, useEffect } from "react";
import Layout from "../../../components/Layout";
import axios from "axios";
import { environments } from "../../../components/environment/environments";
import LayoutSecond from "../../../components/LayoutSecond/LayoutSecond";
import { useRouter } from "next/router";
import { useToken } from "../../context/TokenContext";
import Typography from "@mui/material/Typography";
import ImageGallery from "react-image-gallery";

const images = [
  {
    original: "https://picsum.photos/id/1018/1000/600/",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
];

const PostId = ({ postIdData }) => {
  return (
    <LayoutSecond>
      <div className="" style={{ marginTop: "70px", height: "1000px" }}>
        <div className="postId_container">
          <div>
            {postIdData?.allPosts?.map((post, index) => (
              <div key={index}>
                {/* <img
                  className="postId_main_image_sub"
                  src={post.PostDetails.image}
                  alt={`Image ${index + 1}`}
                /> */}

                <ImageGallery items={images} />
              </div>
            ))}
          </div>
          <div className="postId_main_content">
            <Typography sx={{ color: "black" }} variant="body1" gutterBottom>
              body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore
              consectetur, neque doloribus, cupiditate numquam dignissimos
              laborum fugiat deleniti? Eum quasi quidem quibusdam.
            </Typography>
          </div>
        </div>
      </div>
    </LayoutSecond>
  );
};

export async function getServerSideProps(context) {
  const { postId } = context.query;

  try {
    const response = await axios.get(
      `${environments.BASE_HOST_URL}/api/getPost/${postId}`
    );
    if (response) {
    }
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

export default PostId;
