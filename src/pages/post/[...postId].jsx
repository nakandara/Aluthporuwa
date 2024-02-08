import React, { useState, useEffect } from "react";
import Layout from "../../../components/Layout";
import axios from "axios";
import { environments } from "../../../components/environment/environments";
import LayoutSecond from "../../../components/LayoutSecond/LayoutSecond";
import { useRouter } from "next/router";
import { useToken } from "../../context/TokenContext";
import Typography from "@mui/material/Typography";
import ImageGallery from "react-image-gallery";
import styles from "./post.module.css";

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
  console.log(postIdData, "postIdDatapostIdData");

  const handleWhatsAppClick = () => {
    const phoneNumber = "+94715297881";

    const message = "Hello! This is a pre-filled message.";

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(url, "_blank");
  };

  return (
    <LayoutSecond>
      <div className={styles.PostIdMain}>
        <div className={styles.FirstContent}>
          <div className={styles.imageContainer}>
            <div>
              {postIdData?.allPosts?.map((post, index) => (
                <div className="image-size" key={index}>
                  {/* <img
                  className="postId_main_image_sub"
                  src={post.PostDetails.image}
                  alt={`Image ${index + 1}`}
                /> */}

                  <ImageGallery items={images} />
                </div>
              ))}
            </div>
          </div>
          <div className={styles.imageContainer_content}>
            <div>
              <div className={styles.postIdHeading}>Honda Today AF61 2020</div>
              <div className={styles.subtitle}>
                Posted on 24 Jan 9:57 pm, Talawa, Anuradhapura
              </div>
              <div className={styles.horizontalLine}></div>
              <div className={styles.postIdPhoneNumber}>Phone Number</div>
            </div>

            <div>
              <div className={styles.postIdDescription}>Description</div>
              <Typography
                className={styles.postIdDescription_content}
                sx={{ color: "black" }}
                variant="body1"
              >
                body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Quos blanditiis tenetur unde suscipit, quam beatae rerum
                inventore consectetur, neque doloribus, cupiditate numquam
                dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
              </Typography>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.SecondContent}>
        <button className={styles.action_buttons} onClick={handleWhatsAppClick}>
          <div className={styles.contact_options}>
            <div className={styles.btn}>
              {" "}
              <img
                className="socialImages"
                src={`/media/icons8-whatsapp-48.png`}
                alt={`Image`}
              />
            </div>
            <div className={styles.btn}>
              <img
                className="socialImages"
                src={`/media/icons8-call-64.png`}
                alt={`Image`}
              />
            </div>
          </div>
        </button>
      </div>
      <div className={styles.ThirdContent}>ThirdContent</div>
    </LayoutSecond>
  );
};

export async function getServerSideProps(context) {
  const { postId } = context.query;

  try {
    const response = await axios.get(
      `${environments.BASE_HOST_LOCAL_URL}/api/getPost/${postId}`
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
