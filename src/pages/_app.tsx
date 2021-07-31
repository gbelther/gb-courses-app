import type { AppProps } from "next/app";
import { CustomThemeProvider } from "../contexts/CustomThemeContext";
import { GlobalStyles } from "../styles/global-styles";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CustomThemeProvider>
      <Component {...pageProps} />
      <GlobalStyles />
    </CustomThemeProvider>
  );
}
export default MyApp;
