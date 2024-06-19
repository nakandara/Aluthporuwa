import React, { useState } from "react";
import styles from "./HomeCard.module.css";
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
  description = "Default description",
  imageReaction,
  animateState,
  reactionCounts,
  coverSocialIcons,
}) => {
  const router = useRouter();
  const [isModalOpen, setModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async (postId) => {
    setIsLoading(true);
    await router.push(`/post`);
    setIsLoading(false);
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

  return (
    <div className={styles.card}>
      <div onClick={() => handleClick(post.postId)} className={styles.imageContainer}>
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
          <div onClick={() => handleClick(post.postId)} className={`${styles.badge} ${getBadgeClass(post.plane)}`}>
            {post.plane} ADD
          </div>
          <ShareIcon onClick={handleShareClick} className={styles.shareIcon} />
          <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
            <h2>Share Options</h2>
            <FacebookShareButton url={shareUrl} quote={title}>
              <FacebookIcon size={32} round />
            </FacebookShareButton>
            <WhatsappShareButton url={shareUrl} title={title}>
              <WhatsappIcon size={32} round />
            </WhatsappShareButton>
          </Modal>
        </div>
        <div onClick={() => handleClick(post.postId)}>
          <p className={styles.title}>{post.title}</p>
          <p className={styles.description}>{description}</p>
          <p className={styles.date}>{formatDate(post.createdAt)}</p>
        </div>
        <div className={styles.reactionContainer}></div>
      </div>
    </div>
  );
};

export default Card;
