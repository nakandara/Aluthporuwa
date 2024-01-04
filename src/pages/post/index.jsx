import React, { useState, useEffect } from "react";
import Layout from "../../../components/Layout";
import SearchFilter from "../../../components/post/SearchFilter";
import axios from "axios";
import { environments } from "../../../components/environment/environments";
import { useRouter } from "next/router";
import { useToken } from "../../context/TokenContext";

const Post = () => {
  const { user } = useToken();
  const router = useRouter();
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
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
    },
    {
      _id: "65741a033e9bcea69d35d74e",
      userId: "651ab367455cb0a4405755b6",
      image:
        "https://images.pexels.com/photos/1362724/pexels-photo-1362724.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "111111111111111111111111111111111 1111",
      category: ["Vehicle"],
      postId: "65741a033e9bcea69d35d74f",
      __v: 0,
    },
    {
      _id: "65741a033e9bcea69d35d74e",
      userId: "651ab367455cb0a4405755b6",
      image:
        "https://images.pexels.com/photos/1321909/pexels-photo-1321909.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: ["Home"],
      postId: "65741a033e9bcea69d35d74f",
      __v: 0,
    },
    {
      _id: "65741a033e9bcea69d35d74e",
      userId: "651ab367455cb0a4405755b6",
      image:
        "https://images.pexels.com/photos/725458/pexels-photo-725458.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: ["Vehicle"],
      postId: "65741a033e9bcea69d35d74f",
      __v: 0,
    },
    {
      _id: "65741a033e9bcea69d35d74e",
      userId: "651ab367455cb0a4405755b6",
      image:
        "https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "111111111111111111111111111111111 1111",
      category: ["Vehicle"],
      postId: "65741a033e9bcea69d35d74f",
      __v: 0,
    },
    {
      _id: "65741a033e9bcea69d35d74e",
      userId: "651ab367455cb0a4405755b6",
      image:
        "https://images.pexels.com/photos/1446161/pexels-photo-1446161.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: ["Vehicle"],
      postId: "65741a033e9bcea69d35d74f",
      __v: 0,
    },
    {
      _id: "65741a033e9bcea69d35d74e",
      userId: "651ab367455cb0a4405755b6",
      image:
        "https://images.pexels.com/photos/1557843/pexels-photo-1557843.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: ["Spa"],
      postId: "65741a033e9bcea69d35d74f",
      __v: 0,
    },
    {
      _id: "65741a033e9bcea69d35d74e",
      userId: "651ab367455cb0a4405755b6",
      image:
        "https://images.pexels.com/photos/341970/pexels-photo-341970.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: ["Spa"],
      postId: "65741a033e9bcea69d35d74f",
      __v: 0,
    },
  ]);
  const [loading, setLoading] = useState(true);
  const [animateHeart, setAnimateHeart] = useState(false);
  const [animateSmile, setAnimateSmile] = useState(false);
  const [animateLike, setAnimateLike] = useState(false);

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

  const imageReaction = (value) => {
    if (value === "HEART") {
      setAnimateHeart(true);
    } else if (value === "SMILE") {
      setAnimateSmile(true);
    } else {
      setAnimateLike(true);
    }

    setTimeout(() => {
      setAnimateHeart(false);
      setAnimateSmile(false);
      setAnimateLike(false);
    }, 1000);
  };

  return (
    <Layout>
      <div className="app-bar-new">
        <div className="drop_down_filter">
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
      <div className="card-container-post content_new ">
        {loading ? (
          <>
            {renderPosts.map((post, index) => (
              <div key={index}>
                <div key={index} height={200} offset={100}>
                  <div className="card-wrapper">
                    <div className="cardn">
                      <div className="card">
                        <div className="image-container">
                          <img
                            onClick={() => handleClick(post.postId)}
                            className="card-image"
                            src={post.image}
                            alt={`Image ${index + 1}`}
                          />
                          <div className="overlay-text">
                            {" "}
                            <img
                              onClick={() => imageReaction(`HEART`)}
                              className="socialImages"
                              src="/media/icons8-heart-48.png"
                              alt={`Image ${index + 1}`}
                            />
                          </div>
                        </div>
                      </div>

                      <div
                        onClick={() => handleClick(post.postId)}
                        className="card-content"
                      >
                        <h2>Title</h2>
                        <p>Description or additional content goes here...</p>
                      </div>
                      <div className="social_button">
                        <div>
                          {" "}
                          <img
                            onClick={() => imageReaction(`HEART`)}
                            className={`social-image ${
                              animateHeart ? "heart-beat" : ""
                            }`}
                            src="/media/icons8-heart-48.png"
                            alt={`Image ${index + 1}`}
                          />
                        </div>
                        <div>
                          {" "}
                          <img
                            onClick={() => imageReaction(`SMILE`)}
                            className={`social-image ${
                              animateSmile ? "smile-beat" : ""
                            }`}
                            src="/media/icons8-smile-48.png"
                            alt={`Image ${index + 1}`}
                          />
                        </div>
                        <div>
                          {" "}
                          <img
                            onClick={() => imageReaction(`LIKE`)}
                            className={`social-image ${
                              animateLike ? "smile-beat" : ""
                            }`}
                            src="/media/icons8-like-48.png"
                            alt={`Image ${index + 1}`}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </>
        ) : (
          <div>Loading.............</div>
        )}
      </div>
    </Layout>
  );
};

export default Post;

// import React, { useState, useEffect } from "react";
// import Layout from "../../../components/Layout";
// import axios from "axios";
// import { environments } from "../../../components/environment/environments";
// import { useRouter } from "next/router";
// import { useToken } from '../../context/TokenContext';
// import LazyLoad from 'react-lazyload';

// const Post = () => {
//   const { user } = useToken();
//   const router = useRouter();
//   const [data, setData] = useState('');

//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     if (user && user.userId) {
//       const apiUrl = `${environments.BASE_HOST_URL}/api/getPosts/${user.userId}`;

//       async function fetchPostData() {
//         try {
//           setLoading(false)
//           const response = await axios.get(apiUrl);
//           if (response.data) {
//             setLoading(true);
//             const posts = response.data;
//             setData(posts);
//           }
//         } catch (error) {
//           console.error('Error fetching data:', error);
//         }
//       }

//       fetchPostData();
//     }
//   }, [user]);

//   const handleClick = (postId) => {
//     router.push(`/post/${postId}`); // Redirects to the specific post route
//   };

//   if (!user) {
//     return <div>Loading user data...</div>;
//   }

//   return (
//     <Layout>
//       <div style={{ marginTop: "70px", marginBottom: "40vh" }}>
//         <div className="card-container-post">
//           {loading ? (
//             <>
//               {data?.map((post, index) => (
//                 <LazyLoad key={index} height={200} offset={100}>
//                   <div className="card-post" onClick={() => handleClick(post.postId)}>
//                     <div className="image_postView">
//                       <LazyLoad height={200} offset={100}>
//                         <img
//                           className="image_postView_image"
//                           src={post.image}
//                           alt={`Image ${index + 1}`}
//                         />
//                       </LazyLoad>
//                     </div>
//                     <div className="description">{post.description.slice(0, 18)}</div>
//                   </div>
//                 </LazyLoad>
//               ))}
//             </>
//           ) : (
//             <div>Loading...........</div>
//           )}
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default Post;
