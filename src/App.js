import { BrowserRouter } from "react-router-dom";
import Header from "./components/header";
import PageRocket from "./components/pageRocket";
import PageBackdrop from "./components/backdrop";
import Footer from "./components/footer";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import RouteContainer from "./auth/routes";

const theme = createTheme({
  typography: {
    fontFamily: ["Poppins", "sans-serif"].join(","),
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <div style={{ minHeight:'100vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', width: '100%'}}>
          <Header />
          <RouteContainer />
          <Footer />
        </div>
      </BrowserRouter>
      <PageRocket />
      <PageBackdrop />
    </ThemeProvider>
  );
}

export default App;
