// YourCardComponent.jsx

import React from "react";
import styles from "./Card.module.css";
import ShareIcon from "@mui/icons-material/Share"; // Import the CSS module
import { useRouter } from "next/router";

const Card = ({
  src,
  index,
  post,
  imageReaction,
  animateState,
  coverSocialIcons,
}) => {
  const router = useRouter();

  const handleClick = (postId) => {
    router.push(`/post/${postId}`); // Redirects to the specific post route
  };

  return (
    <div className="margin_bott">
 <div className={styles.card}>
      <div className={styles.imageContainer}>
      <img
        onClick={() => handleClick(post.postId)}
        className={styles.image}
        src={src}
        alt={index}
      />
       <div className={styles.overlayImage}>
          <img
            className="socialImages"
            src={`/media/icons8-${coverSocialIcons[index]}-48.png`}
            alt={`Image ${index + 1}`}
          />
        </div>
      </div>
      

<div className={styles.contentContainer}>
        <div className={styles.top_banner}>Top</div>

        <div className={styles.container_flex}>
          <p
            onClick={() => handleClick(post.postId)}
            className={styles.description}
          >
            Hey ❤❤ Im available for you in 🌹One hour one shot 5500/= One hour
            tow shot. 8500/=
          </p>
          <div className={styles.share_icon}>
            <ShareIcon />
          </div>
        </div>
        <div className={styles.actions}>
          <button
           
            onClick={() => imageReaction("animateLike", index)}
            className={`social-image ${
              animateState[index].animateLike ? "smile-beat" : ""
            } socialButton`}
          >
            Like👍🏻
          </button>
          <button
            
            onClick={() => imageReaction("animateSmile", index)}
            className={`social-image ${
              animateState[index].animateSmile ? "smile-beat" : ""
            } socialButton`}
          >
            Smile 😊
          </button>
          <button
           
            onClick={() => imageReaction("animateHeart", index)}
            className={`social-image ${
              animateState[index].animateHeart ? "heart-beat" : ""
            } socialButton`}
          >
            Heart ❤️
          </button>
        </div>
      </div>
</div>
    </div>
   
      
 
  );
};

export default Card;