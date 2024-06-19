import React, { useState, useEffect } from "react";
import LayoutSecond from "../../../components/LayoutSecond/LayoutSecond";
import SearchFilter from "../../../components/post/SearchFilter";
import SearchCity from "../../../components/post/SearchCity";
import axios from "axios";
import { environments } from "../../../components/environment/environments";
import { useRouter } from "next/router";
import Card from "../../../components/card/Card";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import api from "../../ services/api";
import { useToken } from "../../context/TokenContext";
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import FilterListIcon from '@mui/icons-material/FilterList';
import Modal from '@mui/material/Modal';
import CircularProgress from '@mui/material/CircularProgress';

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

const Post = () => {
  const { user } = useToken();
  const router = useRouter();
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedCities, setSelectedCities] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [reactionCount, setReactionCount] = useState("");
  const [posts, setPosts] = useState([]);
  const [category, setCategory] = useState([
    { category: "Mobile", count: "100" },
    { category: "video", count: "1600" },
    { category: "TV", count: "1720" },
    { category: "video", count: "1700" },
    { category: "vehicle", count: "1370" },
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
    filterPosts(categories, selectedCities);
  };

  const handleCitySelect = (cities) => {
    setSelectedCities(cities);
    filterPosts(selectedCategories, cities);
  };

  const filterPosts = (categories, cities) => {
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

    setFilteredData(filtered);
  };

  const renderPosts = filteredData.length > 0 ? filteredData : data;

  const imageReaction = async (value, index, post) => {
    const newAnimateState = [...animateState];
    newAnimateState[index] = { ...newAnimateState[index] };
    newAnimateState[index][value] = !newAnimateState[index][value.toLowerCase()];

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

  return (
    <LayoutSecond>
      <div className="postBaseContainer">
        <div className="app-bar-new">
          <div className="drop_down_filter">
            <IconButton onClick={toggleDrawer(true)} style={{ float: "right" }}>
              Filter <FilterListIcon />
            </IconButton>
            <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
              <Box
                sx={{
                  '& .MuiDrawer-paper': {
                    backgroundColor: '#333', // Dark background color
                    color: '#fff' // White text color
                  }
                }}
              >
                <SearchFilter
                  categories={data.reduce((acc, curr) => {
                    curr.category.forEach((cat) => {
                      if (!acc.includes(cat)) {
                        acc.push(cat);
                      }
                    });
                    return acc;
                  }, [])}
                  handleCategorySelect={handleCategorySelect}
                  selectedCategories={selectedCategories}
                  closeSidebar={toggleDrawer(false)}
                />
                <SearchCity
                  cities={[...new Set(data.map((post) => post.city))]} // Get unique cities
                  handleCitySelect={handleCitySelect}
                  selectedCities={selectedCities}
                  closeSidebar={toggleDrawer(false)} // Pass the function to close the sidebar
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
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 400,
                    bgcolor: 'background.paper',
                    border: '2px solid #000',
                    boxShadow: 24,
                    p: 4,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                  }}
                >
                  <CircularProgress />
             
                </Box>
              </Modal>
            ) : (
              <>
                {renderPosts.map((post, index) => (
                  <div key={index}>
                    <div key={index} height={200} offset={100}>
                      <Card
                        src={post}
                        index={index}
                        reactionCount={reactionCount}
                        post={post}
                        coverSocialIcons={coverSocialIcons}
                        description={post.description}
                        imageReaction={(value) =>
                          imageReaction(value, index, post)
                        }
                        animateState={animateState}
                      />
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </LayoutSecond>
  );
};

export default Post;
