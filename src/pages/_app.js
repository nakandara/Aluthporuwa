import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { ToggleProvider } from "../../contex/ToggleContext";
import { TokenProvider } from "../context/TokenContext";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <TokenProvider>
        <ToggleProvider>
          <Component {...pageProps} />
        </ToggleProvider>
      </TokenProvider>
    </LocalizationProvider>
  );
}
