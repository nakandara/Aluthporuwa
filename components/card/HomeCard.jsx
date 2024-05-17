import React, { useState } from "react";
import styles from "./HomeCard.module.css";
import { FacebookShareButton, WhatsappShareButton } from "react-share";
import ShareIcon from "@mui/icons-material/Share";
import Modal from "../modal/Modal";
import { FacebookIcon, WhatsappIcon } from "react-share";
import { useRouter } from "next/router";

const Card = ({
  src,
  index,
  post,
  description,
  imageReaction,
  animateState,
  reactionCounts, // Updated prop to pass reaction counts
  coverSocialIcons,
}) => {
  const router = useRouter();
  const [isModalOpen, setModalOpen] = useState(false);

  const handleClick = (postId) => {
    router.push(`/post/${postId}`);
  };

  const handleShareClick = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const shareUrl = `https://aluthporuwa-nakandara.vercel.app/post/${post.postId}`;
  const title = "Check out this post";

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
        </div>

        <div className={styles.contentContainer}>
          <div className={styles.top_banner}>Top </div>

          <div className={styles.container_flex}>
            <p
              onClick={() => handleClick(post.postId)}
              className={styles.description}
            >
              {description.length > 100
                ? `${description.substring(0, 160)}...`
                : description}
            </p>

            <div className={styles.share_icon}>
              <ShareIcon onClick={handleShareClick} />
              <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
                <h2>Share Options</h2>
                <FacebookShareButton url={shareUrl} quote={title}>
                  <FacebookIcon size={32} round={true} />
                </FacebookShareButton>
                <WhatsappShareButton url={shareUrl} quote={title}>
                  <WhatsappIcon size={32} round={true} />
                </WhatsappShareButton>
                <p>Add your social sharing buttons here</p>
                <button onClick={handleCloseModal}>Close</button>
              </Modal>
            </div>
          </div>
          {/* <div className={styles.actions}>
            <button
              onClick={() => imageReaction("animateLike", index)}
              // className={`social-image ${
              //   animateState[index].animateLike ? "smile-beat" : ""
              // } socialButton`}
            >
              👍🏻{" "}
              {reactionCounts && reactionCounts[index]
                ? reactionCounts[index].like || 0
                : 0}
            </button>
            <button
              onClick={() => imageReaction("animateLike", index)}
              // className={`social-image ${
              //   animateState[index].animateLike ? "smile-beat" : ""
              // } socialButton`}
            >
              👍🏻{" "}
              {reactionCounts && reactionCounts[index]
                ? reactionCounts[index].like || 0
                : 0}
            </button>
            <button
              onClick={() => imageReaction("animateLike", index)}
              // className={`social-image ${
              //   animateState[index].animateLike ? "smile-beat" : ""
              // } socialButton`}
            >
              👍🏻{" "}
              {reactionCounts && reactionCounts[index]
                ? reactionCounts[index].like || 0
                : 0}
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Card;
