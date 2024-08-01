import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import LayoutSecond from "../../../components/LayoutSecond/LayoutSecond";
import { environments } from "../../../components/environment/environments";
import { useRouter } from "next/router";
import { useToken } from "../../context/TokenContext";
import { Typography, Grid, IconButton, ButtonBase, Box, Paper } from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';
import { styled } from "@mui/material/styles";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  height: "160px",
});

const StyledPaper = styled(Paper)(({ theme }) => ({
  position: "relative",
  marginBottom: theme.spacing(2),
  padding: theme.spacing(2),
}));

export default function MyFavorite() {
  const { user } = useToken();
  const router = useRouter();
  const [savedPosts, setSavedPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchSavedPosts = useCallback(async () => {
    try {
      const response = await axios.get(`${environments.BASE_HOST_LOCAL_URL}/api/get-save-post/${user.userId}`);
      setSavedPosts(response.data.relatedPosts);
    } catch (error) {
      console.error("Error fetching saved posts:", error);
    } finally {
      setLoading(false);
    }
  }, [user]);

  useEffect(() => {
    if (user) {
      fetchSavedPosts();
    }
  }, [user, fetchSavedPosts]);

  const handleSaveToggle = (post) => {
    // Add your save toggle logic here
  };

  const handleShareClick = (post) => {
    // Add your share logic here
  };

  const handleClick = (postId) => {
    // Navigate to post details or handle post click
    router.push(`/post/${postId}`);
  };

  console.log(savedPosts, 'savedPostssavedPosts');
  return (
    <LayoutSecond>
      <div style={{ marginTop: "20vh",marginLeft:"15px",marginRight:"15px" }}>
        {loading ? (
          <Typography>Loading...</Typography>
        ) : savedPosts.length === 0 ? (
          <Typography>No saved posts found.</Typography>
        ) : (
          <Grid container spacing={3}>
            {savedPosts.map((post, index) => (
              <StyledPaper
                key={index}
                className="card"
                onClick={() => handleClick(post.postId)}
              >
                <Box
                  sx={{
                    position: "absolute",
                    top: 35,
                    right: 8,
                    zIndex: 1,
                    textAlign: "right",
                  }}
                >
                  <IconButton
                    aria-label="save"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleSaveToggle(post);
                    }}
                  >
                    {post.isSaved ? (
                      <FavoriteIcon sx={{ color: "red" }} />
                    ) : (
                      <FavoriteIcon sx={{ color: "red" }} />
                    )}
                  </IconButton>

                  <Typography
                    variant="body2"
                    sx={{
                      backgroundColor: "rgba(0, 0, 0, 0.7)",
                      color: "#fff",
                      padding: "2px 8px",
                      borderRadius: "4px",
                    }}
                  >
                    {post.city}
                  </Typography>
                </Box>

                <Grid container spacing={2}>
                  <Grid item>
                    <ButtonBase sx={{ width: 188, height: 145 }}>
                      <img alt="complex" src={post.images[0]?.imageUrl} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </ButtonBase>
                  </Grid>
                  <Grid sx={{ ml: 1 }} item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                      <Grid item xs>
                        <Typography
                          gutterBottom
                          variant="subtitle1"
                          component="div"
                          sx={{ fontWeight: "700" }}
                        >
                          {post.brand} {post.title}
                        </Typography>
                        <Grid item>
                          <Typography
                            className="myaccount-profile-brand-details"
                            variant="subtitle1"
                            component="div"
                          >
                            {post.transmission}
                          </Typography>
                        </Grid>
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
                    <IconButton
                      aria-label="share"
                      sx={{
                        position: "absolute",
                        bottom: 8,
                        right: 8,
                        zIndex: 2,
                      }}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleShareClick(post.postId);
                      }}
                    >
                      <ShareIcon sx={{ color: "black" }} />
                    </IconButton>
                  </Grid>
                </Grid>
              </StyledPaper>
            ))}
          </Grid>
        )}
      </div>
    </LayoutSecond>
  );
}
