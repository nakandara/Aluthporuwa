import React, { useState, useEffect } from "react";
import axios from "axios";
import LayoutSecond from "../../../components/LayoutSecond/LayoutSecond";
import { environments } from "../../../components/environment/environments";
import { useRouter } from "next/router";
import { useToken } from "../../context/TokenContext";
import Swal from "sweetalert2";
import styles from "./myadd.module.css";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import MobileProtectedRoute from "../../../components/protect/mobileProtectRoute";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  height: "160px",
});

const MyAdd = () => {
  const { user } = useToken();
  const router = useRouter();
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          `${environments.BASE_HOST_URL}/api/getPosts/${user.userId}`
        );
        console.log(response.data, "response");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, [user]);

  const PostClick = (postId) => {
    router.push(`/myadd/${postId}`);
  };

  const handleDelete = async (userId, postId) => {
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          const response = await axios.delete(
            `${environments.BASE_HOST_URL}/api/deletePost/${userId}/${postId}`
          );
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
          if (response.data.success) {
            setData(data.filter((post) => post.postId !== postId));
            console.log(response.data.message);
          } else {
            console.log(response.data.message);
          }
        }
      });
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  return (
    <LayoutSecond>
      <MobileProtectedRoute>
        <div className={styles.container}>
          {data.length === 0 ? (
            <Typography variant="h6" className={styles.noDataMessage}>
              No posts available....
            </Typography>
          ) : (
            data.map((post, index) => (
              <Paper
                key={index}
                sx={{
                  p: 2,
                  margin: "auto",
                  maxWidth: 500,
                  flexGrow: 1,
                  backgroundColor: (theme) =>
                    theme.palette.mode === "dark" ? "#1A2027" : "#fff",
                  position: "relative",
                }}
                className={styles.card}
                onClick={() => PostClick(post.postId)}
              >
                {/* Status Indicator */}
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
                  aria-label="delete"
                  style={{
                    position: "absolute",
                    bottom: 8,
                    right: 8,
                  }}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDelete(post.userId, post.postId);
                  }}
                >
                  <DeleteIcon />
                </IconButton>
                <Grid container spacing={2}>
                  <Grid item>
                    <ButtonBase sx={{ width: 188, height: 145 }}>
                      {post.images && post.images.length > 0 ? (
                        <Img alt="complex" src={post.images[0].imageUrl} />
                      ) : (
                        <Img alt="placeholder" src="/path/to/placeholder-image.jpg" />
                      )}
                    </ButtonBase>
                  </Grid>
                  <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                      <Grid item xs>
                        <Typography
                          gutterBottom
                          variant="subtitle1"
                          component="div"
                        >
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
                      </Grid>
                      <Grid item>
                        <Typography sx={{ cursor: "pointer" }} variant="body2">
                          {Array.isArray(post.socialIcon)
                            ? post.socialIcon.join(", ")
                            : post.socialIcon}
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid item>
                      <Typography
                        className="myaccount-profile-image-details"
                        variant="subtitle1"
                        component="div"
                      >
                        {post.price}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography
                        className="myaccount-profile-image-mobile"
                        variant="subtitle1"
                        component="div"
                      >
                        {post.mobileNumber}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Paper>
            ))
          )}
        </div>
      </MobileProtectedRoute>
    </LayoutSecond>
  );
};

export default MyAdd;
