import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { ToggleProvider } from '../../contex/ToggleContext';

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
       <ToggleProvider>
       <Component {...pageProps} />
       </ToggleProvider>
       
       
    
    </SessionProvider>
  );
}
