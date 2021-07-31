import type { AppProps } from "next/app";

import { CustomThemeProvider } from "../contexts/CustomThemeContext";
import { GlobalStyles } from "../styles/global-styles";
import { Header } from "../components/Header";

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
