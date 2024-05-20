import React, { useState, useEffect } from "react";
import Layout from "../../../components/Layout";
import SearchFilter from "../../../components/post/SearchFilter";
import axios from "axios";
import { environments } from "../../../components/environment/environments";
import { useRouter } from "next/router";
import Card from "../../../components/card/Card";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import LayoutSecond from "../../../components/LayoutSecond/LayoutSecond";
import api from "../../ services/api";
import { useToken } from "../../context/TokenContext";

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
  const [data, setData] = useState([
    // {
    //   _id: "65741a033e9bcea69d35d74e",
    //   userId: "651ab367455cb0a4405755b6",
    //   image:
    //     "https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?auto=compress&cs=tinysrgb&w=600",
    //   description: "111111111111111111111111111111111 1111",
    //   category: ["Vehicle"],
    //   postId: "65741a033e9bcea69d35d74f",
    //   __v: 0,
    //   socialIcon: ["smile"],
    //   phoneNumber: "0715297881",
    // },
  ]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          `${environments.BASE_HOST_URL}/api/getVerifyAllPosts`
        );
        console.log(response, "responsemmmmmmmmm");
        setData(response.data.data); // Assuming your API response contains the posts in the 'data' field
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []); //

  console.log(data, "data");
  console.log(posts, "posts");

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

  console.log(animateState, "animateState");
  useEffect(() => {
    if (user && user.userId) {
      const apiUrl = `${environments.BASE_HOST_URL}/api/getPosts/${user.userId}`;

      async function fetchPostData() {
        try {
          // Fetch data using axios or fetch here
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }

      fetchPostData();
    }
  }, [user]);

  const handleClick = (postId) => {
    router.push(`/post/${postId}`); // Redirects to the specific post route
  };

  const handleCategorySelect = (categories) => {
    setSelectedCategories(categories);

    if (categories.length === 0) {
      setFilteredData(data);
    } else {
      const filtered = data.filter((post) =>
        categories.some((selectedCategory) =>
          post.category.includes(selectedCategory)
        )
      );
      setFilteredData(filtered);
    }
  };

  if (!user) {
    return <div style={{ color: "black" }}>Loading user data...</div>;
  }

  const renderPosts = filteredData.length > 0 ? filteredData : data;

  console.log(renderPosts, "renderPosts");

  const imageReaction = async (value, index, post) => {
    const newAnimateState = [...animateState];
    newAnimateState[index] = { ...newAnimateState[index] };
    console.log(value.toLowerCase());
    console.log(newAnimateState[index]);
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

  console.log(data);

  return (
    <LayoutSecond>
      <div className=" ">
        <div className="app-bar-new ">
          <div className="drop_down_filter ">
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
            />
          </div>
        </div>

        <div className="margin_b_t">
          <div style={{ marginTop: "-30px" }}>
            <Box
              className="category_container"
              component="section"
              sx={{ p: 2, m: 5, border: "1px dashed grey" }}
            >
              <Grid container spacing={1}>
                {category.map((item) => (
                  // <div key={item._id}>

                  //   <p>Description: {item.category}</p>

                  // </div>
                  <Grid key={item._id} item xs={3}>
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
              <>
                {renderPosts.map((post, index) => (
                  <div key={index}>
                    <div key={index} height={200} offset={100}>
                      <Card
                        src={post.images}
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
            ) : (
              <div>Loading.............</div>
            )}
          </div>
        </div>
      </div>
    </LayoutSecond>
  );
};

export default Post;
