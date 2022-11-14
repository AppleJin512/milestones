import ImageBar from "./components/imageBar";
import Header from "./components/header";
import PageRocket from "./components/pageRocket";
import Footer from './components/footer';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider} from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: [
      'Poppins',
      'sans-serif',
    ].join(','),
  },});

function App() {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <ImageBar />
      <Footer />
      <PageRocket />
    </ThemeProvider>
  );
}

export default App;
