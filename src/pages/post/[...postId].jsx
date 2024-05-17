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

const PostId = ({ postIdData }) => {
  console.log(postIdData.allPosts, "postIdDatapostIdData");
  const [mobileNumber, setMobileNumber] = useState("");
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const [city, setCity] = useState("");

  useEffect(() => {
    setMobileNumber(postIdData?.allPosts[0]?.PostDetails?.mobileNumber)
    setDescription(postIdData?.allPosts[0]?.PostDetails?.description)
    setTitle(postIdData?.allPosts[0]?.PostDetails?.title)
    setCity(postIdData?.allPosts[0]?.PostDetails?.city)
  }, []);

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
  

  const handleWhatsAppClick = () => {
    const phoneNumber = postIdData?.allPosts[0]?.PostDetails?.mobileNumber;
    console.log(phoneNumber);

    if (phoneNumber) {
      const message = "Hello! This is a pre-filled message.";
      const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
        message
      )}`;
      window.open(url, "_blank");
    } else {
      // Handle case where phoneNumber is not available
      console.error("Phone number not available");
    }
  };

  return (
    <LayoutSecond>
      <div className={styles.PostIdMain}>
        <div className={styles.FirstContent}>
          <div className={styles.imageContainer}>
            <div>
            {postIdData?.allPosts?.map((post, index) => (
                <div className="image-size" key={index}>
                  <ImageGallery
                    items={post.PostDetails.images.map((image, index) => ({
                      original: image.imageUrl,
                      thumbnail: image.imageUrl,
                      // You can add other properties like caption, description, etc. if needed
                    }))}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className={styles.imageContainer_content}>
            <div>
              <div className={styles.postIdHeading}>{title}</div>
              <div className={styles.subtitle}>
              Posted on 24 Jan 9:57 pm, <strong>{city}</strong>
              </div>
              <div className={styles.horizontalLine}></div>
              <div className={styles.postIdPhoneNumber}>Phone Number {mobileNumber}</div>
            </div>

            <div>
              <div className={styles.postIdDescription}>Description</div>
              <Typography
                className={styles.postIdDescription_content}
                sx={{ color: "black" }}
                variant="body1"
              >
                {description}
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
