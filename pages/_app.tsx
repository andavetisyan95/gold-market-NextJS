import "../styles/globals.css";
import type { AppProps } from "next/app";
import MainLayout from "components/layout";
import { ThemeProvider } from "@mui/material";
import { theme } from "providers/react-mui";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <MainLayout title="Gold jewelry webpage">
        <Component {...pageProps} />
      </MainLayout>
    </ThemeProvider>
  );
}
