import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { ToggleProvider } from "../../contex/ToggleContext";
import { TokenProvider } from "../context/TokenContext";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function App({ Component, pageProps: { session, ...pageProps } }) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleRouteChangeStart = () => setLoading(true);
    const handleRouteChangeComplete = () => setLoading(false);
    const handleRouteChangeError = () => setLoading(false);

    router.events.on('routeChangeStart', handleRouteChangeStart);
    router.events.on('routeChangeComplete', handleRouteChangeComplete);
    router.events.on('routeChangeError', handleRouteChangeError);

    return () => {
      router.events.off('routeChangeStart', handleRouteChangeStart);
      router.events.off('routeChangeComplete', handleRouteChangeComplete);
      router.events.off('routeChangeError', handleRouteChangeError);
    };
  }, [router.events]);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <TokenProvider>
        <ToggleProvider>
          {loading ? (
            <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
              <CircularProgress />
            </Box>
          ) : (
            <Component {...pageProps} />
          )}
        </ToggleProvider>
      </TokenProvider>
    </LocalizationProvider>
  );
}
