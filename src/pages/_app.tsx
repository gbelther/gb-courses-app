import type { AppProps } from "next/app";

import { CustomThemeProvider } from "../contexts/CustomThemeContext";
import { GlobalStyles } from "../styles/global-styles";
import { Header } from "../components/Header";
import { AuthProvider } from "../contexts/AuthContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CustomThemeProvider>
      <AuthProvider>
        <Header />
        <Component {...pageProps} />
        <GlobalStyles />
      </AuthProvider>
    </CustomThemeProvider>
  );
}
export default MyApp;
