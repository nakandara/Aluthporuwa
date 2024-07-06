import React, { useState } from "react";
import styles from "./HomeCard.module.css";
import { IconButton, Grid, Typography, Paper, ButtonBase } from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";

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

  return (
    <div className={styles.card}>
      <Paper
        key={index}
   
        onClick={() => handleClick(post.postId)}
      >
        <Typography
          variant="subtitle2"
          className="myaccount-profile-image-mobile"
          style={{
            position: "absolute",
            top: 8,
            right: 8,
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            color: "#fff",
            padding: "2px 8px",
            borderRadius: "4px",
            zIndex: 1,
          }}
        >
          {post.verify ? "POST" : "PENDING"}
        </Typography>
        <IconButton
          aria-label="share"
          style={{
            position: "absolute",
            bottom: 8,
            right: 8,
          }}
          onClick={(e) => {
            e.stopPropagation();
            handleShareClick(post);
          }}
        >
          <ShareIcon />
        </IconButton>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4}>
            <ButtonBase sx={{ width: "100%" }}>
              <img
                alt="complex"
                src={post.images[0].imageUrl}
                className={styles.image}
              />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm={6} md={8} sx={{ display: "flex", flexDirection: "column" }}>
            <Typography gutterBottom variant="subtitle1" component="div">
              {post.title}
            </Typography>
            <Typography variant="body2" gutterBottom>
              <div
                dangerouslySetInnerHTML={{
                  __html: post.description.substring(0, 160),
                }}
              />
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {Array.isArray(post.category)
                ? post.category.join(", ")
                : post.category}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Mobile: {post.mobileNumber}
            </Typography>
            <Typography
              className="myaccount-profile-image-details"
              variant="subtitle1"
              component="div"
            >
              {post.price}
            </Typography>
            <Typography
              className="myaccount-profile-image-mobile"
              variant="subtitle1"
              component="div"
            >
              {post.mobileNumber}
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default Card;

