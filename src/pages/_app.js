import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { ToggleProvider } from '../../contex/ToggleContext';
import { TokenProvider } from '../context/TokenContext';

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <TokenProvider>
       <ToggleProvider>
       <Component {...pageProps} />
       </ToggleProvider>
       </TokenProvider>
       
    
   
  );
}
