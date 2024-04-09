import React, { useState, useEffect } from "react";
import axios from "axios";
import LayoutSecond from "../../../components/LayoutSecond/LayoutSecond";
import { environments } from "../../../components/environment/environments";
import { useRouter } from "next/router";
import { useToken } from "../../context/TokenContext";
import Card from "../../../components/card/Card";

import styles from "./myadd.module.css";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";

const MyAdd = () => {
  const { user } = useToken();
  const [data, setData] = useState([]);
  const [coverSocialIcons, setCoverSocialIcons] = useState([]);

  const Img = styled("img")({
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    // maxHeight: '100%',
    height: "160px",
  });
  const [animateState, setAnimateState] = useState(
    Array(data.length).fill({
      animateHeart: false,
      animateSmile: false,
      animateLike: false,
    })
  );

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          `${environments.BASE_HOST_URL}/api/getPosts/${user.userId}`
        );
        console.log(response.data, "response");
        setData(response.data); // Assuming your API response contains the posts in the 'data' field
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, [user]); //

console.log(data,'datadatadata');

  return (
    <LayoutSecond>
      <div>
        <div className={styles.container}>
          {data.map((post, index) => (
            <Paper
              key={index}
              sx={{
                p: 2,
                margin: "auto",
                maxWidth: 500,
                flexGrow: 1,
                backgroundColor: (theme) =>
                  theme.palette.mode === "dark" ? "#1A2027" : "#fff",
              }}
              className={styles.card}
            >
              <Grid container spacing={2}>
                <Grid item>
                  <ButtonBase sx={{ width: 188, height: 145 }} >
                    <Img alt="complex" src={post.image} />
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
                        Standard license
                      </Typography>
                      <Typography variant="body2" gutterBottom>
                      {post.description.slice(0, 30)}......
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                       {post.category.join(', ')}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography
                        sx={{ cursor: "pointer" }}
                        variant="body2"
                      >
                       {post.socialIcon.join(', ')}

                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Typography className="myaccount-profile-image-details" variant="subtitle1" component="div">
                    Rs: 5000
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          ))}
        </div>
      </div>
    </LayoutSecond>
  );
};

export default MyAdd;
