import React, { useState, useEffect } from "react";
import LayoutSecond from "../../../components/LayoutSecond/LayoutSecond";
import SearchFilter from "../../../components/post/SearchFilter";
import SearchCity from "../../../components/post/SearchCity";
import axios from "axios";
import { environments } from "../../../components/environment/environments";
import { useRouter } from "next/router";
import Card from "../../../components/card/Card";
import { styled } from "@mui/material/styles";
import styles from "../myadd/myadd.module.css";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import api from "../../ services/api";
import { useToken } from "../../context/TokenContext";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import FilterListIcon from "@mui/icons-material/FilterList";
import Modal from "@mui/material/Modal";
import { useMediaQuery } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import ShareIcon from "@mui/icons-material/Share";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";

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

const url = `${environments.BASE_HOST_URL}/api/increment`;

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#009877" : "#009877",
  ...theme.typography.body2,
  borderRadius: "500px",
  padding: theme.spacing(1),
  textAlign: "center",
  fontSize: "12px",
  height: "40px",
  color: theme.palette.mode === "dark" ? "#fff" : "#fff",
  border: "2px solid yellow",
}));

export const incrementReactionCount = async (postId, reactionType) => {
  console.log(postId, reactionType);
  try {
    const response = await api.post("/api/increment", {
      postId,
      reactionType,
    });

    return response.data.count;
  } catch (error) {
    console.error("Error incrementing reaction count:", error);
    throw new Error("Failed to increment reaction count.");
  }
};

const ShareModal = ({ open, handleClose, post }) => {
  console.log(post, "ddddddddddddddd");
  if (!post) return null;

  const shareUrl = `https://www.quickadshub.com/post/${post.postId}`;

  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 300,
          bgcolor: "background.paper",
          border: "2px solid #000",
          boxShadow: 24,
          p: 4,
        }}
      >
        <Typography variant="h6" component="h2">
          Share this post
        </Typography>
        <Box mt={2}>
          <IconButton
            aria-label="share on WhatsApp"
            onClick={() => {
              window.open(
                `https://wa.me/?text=${encodeURIComponent(shareUrl)}`,
                "_blank"
              );
            }}
          >
            <WhatsAppIcon fontSize="large" />
          </IconButton>
          <IconButton
            aria-label="share on Facebook Messenger"
            onClick={() => {
              window.open(
                `fb-messenger://share?link=${encodeURIComponent(shareUrl)}`,
                "_blank"
              );
            }}
          >
            <FacebookIcon fontSize="large" />
          </IconButton>
        </Box>
      </Box>
    </Modal>
  );
};

const Post = () => {
  const { user } = useToken();
  const router = useRouter();
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedCities, setSelectedCities] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [reactionCount, setReactionCount] = useState("");
  const [posts, setPosts] = useState([]);
  const isMobile = useMediaQuery("(max-width:600px)");
  const [category, setCategory] = useState([
    { category: "Vehicles", count: "10780" },
    { category: "Property", count: "1600" },
    { category: "TV", count: "1720" },
    { category: "Home", count: "1700" },
    { category: "E items", count: "1370" },
    { category: "Beauty", count: "1890" },
    { category: "private", count: "100" },
  ]);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [animateState, setAnimateState] = useState(
    Array(data.length).fill({
      animateHeart: false,
      animateSmile: false,
      animateLike: false,
    })
  );
  const [coverSocialIcons, setCoverSocialIcons] = useState(
    data.map((post) =>
      post.socialIcon && post.socialIcon.length > 0 ? post.socialIcon[0] : ""
    )
  );
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState(""); // State for search query
  const [shareModalOpen, setShareModalOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          `${environments.BASE_HOST_URL}/api/getVerifyAllPosts`
        );

        setData(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  useEffect(() => {
    if (user && user.userId) {
      const apiUrl = `${environments.BASE_HOST_URL}/api/getPosts/${user.userId}`;

      const fetchPostData = async () => {
        try {
          const response = await axios.get(apiUrl);
          setPosts(response.data.posts);
          setLoading(false);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };

      fetchPostData();
    }
  }, [user]);

  const handleClick = (postId) => {
    router.push(`/post/${postId}`);
  };

  const handleCategorySelect = (categories) => {
    setSelectedCategories(categories);
    filterPosts(categories, selectedCities, searchQuery);
  };

  const handleCitySelect = (cities) => {
    setSelectedCities(cities);
    filterPosts(selectedCategories, cities, searchQuery);
  };

  const handleSearchChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    filterPosts(selectedCategories, selectedCities, query);
  };

  const filterPosts = (categories, cities, query) => {
    let filtered = data;

    if (categories.length > 0) {
      filtered = filtered.filter((post) =>
        categories.some((selectedCategory) =>
          post.category.includes(selectedCategory)
        )
      );
    }

    if (cities.length > 0) {
      filtered = filtered.filter((post) => cities.includes(post.city));
    }

    if (query) {
      filtered = filtered.filter((post) =>
        post.brand.toLowerCase().includes(query.toLowerCase())
      );
    }

    setFilteredData(filtered);
  };

  const renderPosts = filteredData.length > 0 ? filteredData : data;
  console.log(renderPosts, "renderPostsrenderPosts");

  const imageReaction = async (value, index, post) => {
    const newAnimateState = [...animateState];
    newAnimateState[index] = { ...newAnimateState[index] };
    newAnimateState[index][value] =
      !newAnimateState[index][value.toLowerCase()];

    if (animateState[index][value]) {
      return;
    }

    const response = await api.post("/api/increment", {
      postId: post.postId,
      reactionType: value,
    });
    setReactionCount(response.data.count);

    setAnimateState(newAnimateState);
    switch (value.toLowerCase()) {
      case "animateheart":
        setCoverSocialIcons((prevIcons) => {
          const updatedIcons = [...prevIcons];
          updatedIcons[index] = newAnimateState[index][value] ? "heart" : "";
          return updatedIcons;
        });
        break;
      case "animatesmile":
        setCoverSocialIcons((prevIcons) => {
          const updatedIcons = [...prevIcons];
          updatedIcons[index] = newAnimateState[index][value] ? "smile" : "";
          return updatedIcons;
        });
        break;
      case "animatelike":
        setCoverSocialIcons((prevIcons) => {
          const updatedIcons = [...prevIcons];
          updatedIcons[index] = newAnimateState[index][value] ? "like" : "";
          return updatedIcons;
        });
        break;
      default:
        break;
    }
    setTimeout(() => {
      newAnimateState[index][value] = false;
      setAnimateState(newAnimateState);
    }, 700);

    newAnimateState[index] = { ...newAnimateState[index], [value]: true };
    setAnimateState(newAnimateState);
  };

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const handleShareClick = (post) => {
    setSelectedPost(post);
    setShareModalOpen(true);
  };

  const handleShareModalClose = () => {
    setShareModalOpen(false);
    setSelectedPost(null);
  };

  return (
    <LayoutSecond>
      <div className="postBaseContainer">
        <div className="app-bar-new">
          <div className="drop_down_filter">
            <TextField
              label="Search by title"
              variant="outlined"
              fullWidth
              value={searchQuery}
              onChange={handleSearchChange}
              style={{ marginBottom: "30px", marginTop: "6px" }}
            />
            <IconButton onClick={toggleDrawer(true)} style={{ float: "right" }}>
              <FilterListIcon />
            </IconButton>
            <Drawer
              anchor="right"
              open={drawerOpen}
              onClose={toggleDrawer(false)}
            >
              <Box
                sx={{
                  "& .MuiDrawer-paper": {
                    backgroundColor: "#333",
                    color: "#fff",
                  },
                }}
              >
                <SearchFilter
                  categories={data.reduce((acc, curr) => {
                    if (Array.isArray(curr.category)) {
                      curr.category.forEach((cat) => {
                        if (!acc.includes(cat)) {
                          acc.push(cat);
                        }
                      });
                    }
                    return acc;
                  }, [])}
                  handleCategorySelect={handleCategorySelect}
                  selectedCategories={selectedCategories}
                  closeSidebar={toggleDrawer(false)}
                />
                <SearchCity
                  cities={[...new Set(data.map((post) => post.city))]}
                  handleCitySelect={handleCitySelect}
                  selectedCities={selectedCities}
                  closeSidebar={toggleDrawer(false)}
                />
              </Box>
            </Drawer>
          </div>
        </div>

        <div className="margin_b_t">
          <div style={{ marginTop: "-30px" }}>
            <Box
              className="category_container"
              component="section"
              sx={{ p: 1, m: 5, border: "1px dashed grey" }}
            >
              <Grid container spacing={1}>
                {category.map((item) => (
                  <Grid key={item.category} item xs={3}>
                    <Item className="sub_category_container">
                      {item.category} {item.count}
                    </Item>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </div>

          <div>
            {loading ? (
              <Modal
                open={loading}
                aria-labelledby="loading-modal-title"
                aria-describedby="loading-modal-description"
              >
                <Box
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: 400,
                    bgcolor: "background.paper",
                    border: "2px solid #000",
                    boxShadow: 24,
                    p: 4,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                  }}
                >
                  <CircularProgress />
                </Box>
              </Modal>
            ) : (
              <>
                {renderPosts.map((post, index) => (
                  <StyledPaper
                    key={index}
                    className={styles.card}
                    onClick={() => handleClick(post.postId)}
                  >
                    <Box
                      sx={{
                        position: "absolute",
                        top: 8,
                        right: 8,
                        zIndex: 1,
                        textAlign: "right",
                      }}
                    >
                      <Typography
                        variant="subtitle2"
                        sx={{
                          color: "#fff",
                          padding: "2px 8px",
                          borderRadius: "4px",
                          marginBottom: "4px",
                        }}
                      >
                        SAVE
                      </Typography>
                      {isMobile && (
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
                      )}
                    </Box>
                    <IconButton
                      aria-label="share"
                      sx={{
                        position: "absolute",
                        bottom: 8,
                        right: 8,
                        zIndex: 2, // Ensure the IconButton stays on top
                      }}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleShareClick(post);
                      }}
                    >
                      <ShareIcon sx={{ color: "white" }} />
                    </IconButton>
                    <Grid container spacing={2}>
                      <Grid item>
                        <ButtonBase sx={{ width: 188, height: 145 }}>
                          <Img alt="complex" src={post.images[0].imageUrl} />
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
                        {!isMobile && (
                          <Typography
                            variant="body2"
                            sx={{
                              position: "absolute",
                              bottom: 8,
                              right: 8,
                              backgroundColor: "rgba(0, 0, 0, 0.7)",
                              color: "#fff",
                              padding: "50px 8px",
                              borderRadius: "4px",
                              zIndex: 1, // Ensure the city text is below the IconButton
                            }}
                          >
                            {post.city}
                          </Typography>
                        )}
                      </Grid>
                    </Grid>
                  </StyledPaper>
                ))}
              </>
            )}
          </div>
        </div>
      </div>
      <ShareModal
        open={shareModalOpen}
        handleClose={handleShareModalClose}
        post={selectedPost}
      />
    </LayoutSecond>
  );
};

export default Post;
