import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Image from "next/image";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#000000" : "#000000",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function HomeStep() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

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
            <Item sx={{ color: "white" }}>Re-checking your home address for postage is the best way to ensure your certificate is not lost in transit and you are not delayed in receiving it.</Item>
          </Grid>
          <Grid item xs={12} sm={4} order={{ xs: 4, sm: 3 }}>
            <Item sx={{ color: "white" }}>If you studied at one of our partner institutions outside of the UK, your certificate will be dispatched to the central office of your institution and dispatch/collection of your certificate will be arranged by them directly</Item>
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
            <Item sx={{ color: "white" }}>Content 3</Item>
          </Grid>
          <Grid item xs={12} sm={4} order={{ xs: 8, sm: 7 }}>
            <Item sx={{ color: "white" }}>Content 4</Item>
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
            <Item sx={{ color: "white" }}>Re-checking your home address for postage is the best way to ensure your certificate is not lost in transit and you are not delayed in receiving it.</Item>
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
            <Item sx={{ color: "white" }}>If you studied at one of our partner institutions outside of the UK, your certificate will be dispatched to the central office of your institution and dispatch/collection of your certificate will be arranged by them directly</Item>
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
            <Item sx={{ color: "white" }}>Content 3</Item>
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
            <Item sx={{ color: "white" }}>Content 4</Item>
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
