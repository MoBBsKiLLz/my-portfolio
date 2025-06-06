import '../styles/globals.css';
import { ThemeProvider } from '../contexts/ThemeContext'; // adjust path if needed

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
