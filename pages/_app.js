import '../styles/globals.css';
import { ThemeProvider } from '../contexts/ThemeContext';
import { Toaster } from "@/components/ui/toaster";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
      <Toaster />
    </ThemeProvider>
  );
}

export default MyApp;
