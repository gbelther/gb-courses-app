import type { AppProps } from "next/app";
import { Header } from "../components/Header";
import { CustomThemeProvider } from "../contexts/CustomThemeContext";
import { GlobalStyles } from "../styles/global-styles";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CustomThemeProvider>
      <Header />
      <Component {...pageProps} />
      <GlobalStyles />
    </CustomThemeProvider>
  );
}
export default MyApp;
