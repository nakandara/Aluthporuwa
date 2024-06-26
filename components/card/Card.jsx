import React, { useState } from "react";
import styles from "./Card.module.css";
import { FacebookShareButton, WhatsappShareButton } from "react-share";
import ShareIcon from "@mui/icons-material/Share";
import ImageGallery from "react-image-gallery";
import Modal from "../modal/Modal";
import { FacebookIcon, WhatsappIcon } from "react-share";
import { useRouter } from "next/router";
import CircularProgress from "@mui/material/CircularProgress"; // Import CircularProgress

const Card = ({
  src,
  index,
  post,
  description = "Default description",
  imageReaction,
  animateState,
  reactionCounts,
  coverSocialIcons,
}) => {
  const router = useRouter();
  const [isModalOpen, setModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // Loading state

  const handleClick = async (postId) => {
    setIsLoading(true); // Set loading state to true
    await router.push(`/post/${postId}`);
    setIsLoading(false); // Set loading state to false after redirection
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

  const formatDate = (dateString) => {
    const options = {
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const getBadgeClass = (plane) => {
    switch (plane) {
      case "Gold":
        return styles.goldBadge;
      case "Silver":
        return styles.silverBadge;
      default:
        return styles.defaultBadge;
    }
  };

  const truncateDescription = (text, wordLimit) => {
    const words = text.split(" ");
    if (words.length > wordLimit) {
      return `${words.slice(0, wordLimit).join(" ")}...`;
    }
    return text;
  };

  return (
    <div className={styles.card} onClick={() => handleClick(post.postId)}>
      {isLoading && (
        <div className={styles.loading}>
          <CircularProgress />
        </div>
      )}
      <div className={styles.imageContainer}>
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
          <div className={`${styles.badge} ${getBadgeClass(post.plane)}`}>
            {post.plane} ADD
          </div>
          <ShareIcon
            onClick={(e) => {
              e.stopPropagation();
              handleShareClick();
            }}
            className={styles.shareIcon}
          />
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
        <h3 className={styles.title}>
          {Array.isArray(post.category) ? post.category.join(", ") : post.category}
        </h3>
        <p className={styles.brand}>Brand: {post.brand}</p>
        <p className={styles.bodyType}>Body Type: {post.bodyType}</p>
        <p className={styles.engineCapacity}>Engine Capacity: {post.engineCapacity}</p>
        <p className={styles.model}>Model: {post.model}</p>
        <br />
        <br />
        <div className={styles.time}>
          {formatDate(post.createdAt)}
        </div>
      </div>
    </div>
  );
};

export default Card;
