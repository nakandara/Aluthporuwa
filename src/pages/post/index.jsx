import React, { useState, useEffect } from "react";
import Layout from "../../../components/Layout";
import SearchFilter from "../../../components/post/SearchFilter";
import axios from "axios";
import { environments } from "../../../components/environment/environments";
import { useRouter } from "next/router";
import Card from "../../../components/card/Card";

import LayoutSecond from "../../../components/LayoutSecond/LayoutSecond";
import api from '../../ services/api';
import { useToken } from "../../context/TokenContext";


const url = `${environments.BASE_HOST_LOCAL_URL}/api/increment`;
 




export const incrementReactionCount = async (postId, reactionType) => {

  console.log(postId,reactionType);
  try {
    const response = await api.post('/api/increment', {
      postId,
      reactionType,
    });

    return response.data.count;
  } catch (error) {
    console.error('Error incrementing reaction count:', error);
    throw new Error('Failed to increment reaction count.');
  }
};



const Post = () => {


  const { user } = useToken();
  const router = useRouter();
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [reactionCount, setReactionCount] = useState('');
  const [data, setData] = useState([
    {
      _id: "65741a033e9bcea69d35d74e",
      userId: "651ab367455cb0a4405755b6",
      image:
        "https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "111111111111111111111111111111111 1111",
      category: ["Vehicle"],
      postId: "65741a033e9bcea69d35d74f",
      __v: 0,
      socialIcon: ["smile"],
    },
    {
      _id: "65741a033e9bcea69d35d74e",
      userId: "651ab367455cb0a4405755b6",
      image:
        "https://images.pexels.com/photos/1362724/pexels-photo-1362724.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "111111111111111111111111111111111 1111",
      category: ["Vehicle"],
      postId: "65741a033e9bcea69d35d74b",
      __v: 0,
      socialIcon: ["heart"],
    },
    {
      _id: "65741a033e9bcea69d35d74e",
      userId: "651ab367455cb0a4405755b6",
      image:
        "https://images.pexels.com/photos/1321909/pexels-photo-1321909.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: ["Home"],
      description: " 111111111111111111111111111111111 1111",
      postId: "65741a033e9bcea69d35d74fc",
      __v: 0,
      socialIcon: ["smile"],
    },
    {
      _id: "65741a033e9bcea69d35d74e",
      userId: "651ab367455cb0a4405755b6",
      image:
        "https://images.pexels.com/photos/725458/pexels-photo-725458.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: ["Vehicle"],
      postId: "65741a033e9bcea69d35d74d",
      __v: 0,
      description: " 111111111111111111111111111111111 1111",
      socialIcon: ["heart"],
    },
    {
      _id: "65741a033e9bcea69d35d74e",
      userId: "651ab367455cb0a44057556",
      image:
        "https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "111111111111111111111111111111111 1111",
      category: ["Vehicle"],
      postId: "65741a033e9bcea69d35d74e",
      __v: 0,
      socialIcon: ["like"],
    },
    {
      _id: "65741a033e9bcea69d35d74e",
      userId: "651ab367455cb0a4405755b6",
      image:
        "https://images.pexels.com/photos/1446161/pexels-photo-1446161.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: ["Vehicle"],
      postId: "65741a033e9bcea69d35d74f",
      description: " 111111111111111111111111111111111 1111",
      __v: 0,
      socialIcon: ["smile"],
    },
    {
      _id: "65741a033e9bcea69d35d74e",
      userId: "651ab367455cb0a4405755b6",
      image:
        "https://images.pexels.com/photos/1557843/pexels-photo-1557843.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: ["Spa"],
      postId: "65741a033e9bcea69d35d74g",
      description: " 111111111111111111111111111111111 1111",
      __v: 0,
      socialIcon: ["like"],
    },
    {
      _id: "65741a033e9bcea69d35d74e",
      userId: "651ab367455cb0a4405755b6",
      image:
        "https://images.pexels.com/photos/341970/pexels-photo-341970.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: ["Spa"],
      postId: "65741a033e9bcea69d35d74h",
      description: " 111111111111111111111111111111111 1111",
      __v: 0,
      socialIcon: ["heart"],
    },
  ]);
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

  useEffect(() => {
    if (user && user.userId) {
      const apiUrl = `${environments.BASE_HOST_LOCAL_URL}/api/getPosts/${user.userId}`;

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

  const handleCategorySelect = (category) => {
    const isCategorySelected = selectedCategories.includes(category);
    let updatedCategories;

    if (isCategorySelected) {
      updatedCategories = selectedCategories.filter((cat) => cat !== category);
    } else {
      updatedCategories = [...selectedCategories, category];
    }

    setSelectedCategories(updatedCategories);

    const filtered = data.filter((post) =>
      updatedCategories.some((selectedCategory) =>
        post.category.includes(selectedCategory)
      )
    );

    setFilteredData(filtered);
  };

  if (!user) {
    return <div>Loading user data...</div>;
  }

  const renderPosts = filteredData.length > 0 ? filteredData : data;

  const imageReaction = async (value, index,post) => {


  



    const newAnimateState = [...animateState];
    newAnimateState[index] = { ...newAnimateState[index] };
    console.log(value.toLowerCase());
    console.log(newAnimateState[index]);
    newAnimateState[index][value] =
      !newAnimateState[index][value.toLowerCase()];

      if (animateState[index][value]) {
        return;
      }

      console.log(post.postId,'ttttttttttt');
      //const updatedCount = await incrementReactionCount(post._id, value.toLowerCase());
      const response = await api.post('/api/increment', {
        postId: post.postId, // Access post._id from the parameter
        reactionType:value
      });
      setReactionCount(response.data.count)
   

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

  console.log(coverSocialIcons);

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
          {loading ? (
            <>
              {renderPosts.map((post, index) => (
                <div key={index}>
                  <div key={index} height={200} offset={100}>
                    <Card
                      src={post.image}
                      index={index}
                      reactionCount={reactionCount}
                      post={post}
                      coverSocialIcons={coverSocialIcons}
                      imageReaction={(value) => imageReaction(value, index, post)}
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
    </LayoutSecond>
  );
};

export default Post;
