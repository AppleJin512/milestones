import ImageBar from "./components/ImageBar";
import Header from "./components/Header";
import ChattingBox from "./components/chttingBox";
import PageRocket from "./components/pageRocket";
import StatisticsBar from "./components/StatisticsBar";
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
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <ImageBar />
        <StatisticsBar />
        <PageRocket />
        <ChattingBox />
      </ThemeProvider>
    </>

  );
}

export default App;
