import React, { useState } from "react";
import styles from "./Card.module.css";
import { FacebookShareButton, WhatsappShareButton } from "react-share";
import ShareIcon from "@mui/icons-material/Share";
import ImageGallery from "react-image-gallery";
import Modal from "../modal/Modal";
import { FacebookIcon, WhatsappIcon } from "react-share";
import { useRouter } from "next/router";

const Card = ({
  src,
  index,
  post,
  description = "Default description", // Set default value
  imageReaction,
  animateState,
  reactionCounts,
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

  const images = src.images?.map((image) => ({
    original: image.imageUrl,
  }));

  return (
    <div className={styles.card}>
      <div  onClick={() => handleClick(post.postId)} className={styles.imageContainer}>
        {images && images.length > 0 && (
          <ImageGallery
            items={images}
            showThumbnails={false}
            showPlayButton={false}
            showNav={false}
            autoPlay={true}
            slideInterval={3000}
          />
        )}
      </div>
      <div className={styles.content}>
        <div className={styles.header}>
          <div className={styles.badge}>TOP ADD</div>
          <ShareIcon onClick={handleShareClick} className={styles.shareIcon} />
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
        <h3 onClick={() => handleClick(post.postId)} className={styles.title}>
          LIVE CAM
        </h3>
        <p
          onClick={() => handleClick(post.postId)}
          className={styles.description}
        >
          {description.length > 100
            ? `${description.substring(0, 160)}...`
            : description}
          .
        </p>
        <div onClick={() => handleClick(post.postId)} className={styles.time}>
          9 hours ago
        </div>
      </div>
    </div>
  );
};

export default Card;
