import React, { useState, useEffect } from "react";
import axios from "axios";
import LayoutSecond from "../../../components/LayoutSecond/LayoutSecond";
import { environments } from "../../../components/environment/environments";
import { useRouter } from "next/router";
import { useToken } from "../../context/TokenContext";
import Card from "../../../components/card/Card";
import "bootstrap/dist/css/bootstrap.min.css";

import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";

const index = () => {
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

  return (
    <LayoutSecond>
      <div>
        <div className="app-bar-new "></div>

        <div className="margin_b_t">
          {/* <div className="container">
            <div className="row">
              <div  style={{backgroundColor:"red"}} className="col">1 of 2</div>
              <div  style={{backgroundColor:"green"}} className="col">2 of 2</div>
            </div>
            <div className="row">
              <div  style={{backgroundColor:"blue"}} class="col">1 of 3</div>
              <div  style={{backgroundColor:"black"}} className="col">2 of 3</div>
              <div  style={{backgroundColor:"yellow"}} className="col">3 of 3</div>
            </div>
          </div> */}

          <Paper
            sx={{
              p: 2,
              margin: "auto",
              maxWidth: 500,
              flexGrow: 1,
              backgroundColor: (theme) =>
                theme.palette.mode === "dark" ? "#1A2027" : "#fff",
            }}
          >
            <Grid container spacing={2}>
              <Grid item>
                <ButtonBase sx={{ width: 128, height: 148 }}>
                  <Img alt="complex" src="/media/tharu.jpg" />
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
                      Full resolution 1920x1080 • JPEG
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      ID: 1030114
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography sx={{ cursor: "pointer" }} variant="body2">
                      Remove
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item>
                  <Typography variant="subtitle1" component="div">
                    $19.00
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
          <Paper
            sx={{
              p: 2,
              margin: "auto",
              maxWidth: 500,
              flexGrow: 1,
              backgroundColor: (theme) =>
                theme.palette.mode === "dark" ? "#1A2027" : "#fff",
            }}
          >
            <Grid container spacing={2}>
              <Grid item>
                <ButtonBase sx={{ width: 128, height: 148 }}>
                  <Img alt="complex" src="/media/tharu.jpg" />
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
                      Full resolution 1920x1080 • JPEG
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      ID: 1030114
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography sx={{ cursor: "pointer" }} variant="body2">
                      Remove
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item>
                  <Typography variant="subtitle1" component="div">
                    $19.00
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
          
          
          <div style={{ marginTop: "-30px", color: "black" }}>
            {/* {data.map((post, index) => (
              <div key={index}>
                <div key={index} height={200} offset={100}>
                  <Card
                    src={post.image}
                    index={index}
                    reactionCount={12}
                    post={post}
                    coverSocialIcons={coverSocialIcons}
                    description={post.description}
                    imageReaction={(value) => imageReaction(value, index, post)}
                    animateState={animateState}
                  />
                </div>
              </div>
            ))} */}
          </div>

          <div></div>
        </div>
      </div>
    </LayoutSecond>
  );
};

export default index;
