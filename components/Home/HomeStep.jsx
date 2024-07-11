import React, { useState, useEffect } from "react";
import { styled, keyframes } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import useInView from "./useInView"; // Import the custom hook

// Define the keyframes for the animation
const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(100px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Item = styled(Paper)(({ theme, isContent, inView }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#000000" : "#000000",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  border: isContent ? "1px solid white" : "none",
  animation: isContent && inView ? `${slideIn} 1s ease-out` : "none", // Apply animation only for content items
}));

const ContentItem = ({ children }) => {
  const [setRef, inView] = useInView({
    threshold: 0.1, // Adjust threshold as needed
  });

  return (
    <Item ref={setRef} isContent inView={inView} sx={{ color: "white" }}>
      {children}
    </Item>
  );
};

export default function HomeStep() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    // Function to update the width state
    const handleResize = () => setWidth(window.innerWidth);

    // Set initial width
    setWidth(window.innerWidth);

    // Add event listener for resize
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Box sx={{ flexGrow: 1, mt: 2, ml: 2, mr: 2 }}>
      {width > 500 ? (
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} order={{ xs: 2, sm: 1 }}>
            <Item>
              <Image
                src="/media/bubble-gum-digital-security-with-password-protected-email.gif"
                alt="QuickAds Hub"
                width={205}
                height={205}
              />
            </Item>
          </Grid>
          <Grid item xs={12} sm={6} order={{ xs: 1, sm: 2 }}>
            <ContentItem>
            පලමුව ඔබ Account එකක් නිර්මාණය කර එයින් log වෙන්න.<br/>
          
            </ContentItem>
          </Grid>
          <Grid item xs={12} sm={4} order={{ xs: 4, sm: 3 }}>
            <ContentItem>ඔබගේ දුරකථන අංකය යොදා account  එක verify කරගන්න.</ContentItem>
          </Grid>
          <Grid item xs={12} sm={8} order={{ xs: 3, sm: 4 }}>
            <Item>
              <Image
                src="/media/3d-techny-email-marketing-and-newsletter-with-new-message-1.gif"
                alt="QuickAds Hub"
                width={205}
                height={205}
              />
            </Item>
          </Grid>
          <Grid item xs={12} sm={6} order={{ xs: 6, sm: 5 }}>
            <Item>
              <Image
                src="/media/clap-hand-with-lettering-new-post-sticker-3.gif"
                alt="QuickAds Hub"
                width={205}
                height={205}
              />
            </Item>
          </Grid>
          <Grid item xs={12} sm={6} order={{ xs: 5, sm: 6 }}>
            <ContentItem>Content 3</ContentItem>
          </Grid>
          <Grid item xs={12} sm={4} order={{ xs: 8, sm: 7 }}>
            <ContentItem>Content 4</ContentItem>
          </Grid>
          <Grid item xs={12} sm={8} order={{ xs: 7, sm: 8 }}>
            <Item>
              <Image
                src="/media/coworking-e-wallet-with-virtual-credit-cards.gif"
                alt="QuickAds Hub"
                width={205}
                height={205}
              />
            </Item>
          </Grid>
        </Grid>
      ) : (
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} order={{ xs: 2, sm: 1 }}>
            <ContentItem>
            පලමුව ඔබ Account එකක් නිර්මාණය කර එයින් log වෙන්න.<br/>
           
            </ContentItem>
          </Grid>
          <Grid item xs={12} sm={6} order={{ xs: 1, sm: 2 }}>
            <Item>
              <Image
                src="/media/bubble-gum-digital-security-with-password-protected-email.gif"
                alt="QuickAds Hub"
                width={205}
                height={205}
              />
            </Item>
          </Grid>
          <Grid item xs={12} sm={6} order={{ xs: 4, sm: 3 }}>
            <ContentItem>ඔබගේ දුරකථන අංකය යොදා account  එක verify කරගන්න.</ContentItem>
          </Grid>
          <Grid item xs={12} sm={6} order={{ xs: 3, sm: 4 }}>
            <Item>
              <Image
                src="/media/3d-techny-email-marketing-and-newsletter-with-new-message-1.gif"
                alt="QuickAds Hub"
                width={205}
                height={205}
              />
            </Item>
          </Grid>
          <Grid item xs={12} sm={6} order={{ xs: 6, sm: 5 }}>
            <ContentItem>Content 3</ContentItem>
          </Grid>
          <Grid item xs={12} sm={6} order={{ xs: 5, sm: 6 }}>
            <Item>
              <Image
                src="/media/clap-hand-with-lettering-new-post-sticker-3.gif"
                alt="QuickAds Hub"
                width={205}
                height={205}
              />
            </Item>
          </Grid>
          <Grid item xs={12} sm={6} order={{ xs: 8, sm: 7 }}>
            <ContentItem>Content 4</ContentItem>
          </Grid>
          <Grid item xs={12} sm={6} order={{ xs: 7, sm: 8 }}>
            <Item>
              <Image
                src="/media/coworking-e-wallet-with-virtual-credit-cards.gif"
                alt="QuickAds Hub"
                width={205}
                height={205}
              />
            </Item>
          </Grid>
        </Grid>
      )}
    </Box>
  );
}
