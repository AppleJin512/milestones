import React, { useEffect } from 'react';
import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom';
import { createTheme, ThemeProvider} from '@mui/material/styles';
import Header from './pages/header';
import 'aos/dist/aos.css';
import history from './history';
import './css/style.css';

import AOS from 'aos';


// custom pages
import PictureList from './pages/PictureList';
import PictureDetail from './pages/PictureDetail';
import PictureSubmitted from './pages/PictureSubmited';
import FireApp from './pages/fire/FireApp';

function App() {

  const location = useLocation();

  const theme = createTheme({
    typography: {
      fontFamily: [
        'Poppins',
        'sans-serif',
      ].join(','),
  },});

  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 700,
      easing: 'ease-out-cubic',
    });
  });

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Routes history={history}>
        <Route path="/" element={<PictureList />} />
        <Route path='/picdetail/:id' element={<PictureDetail />} />
        <Route path='/submit' element={<PictureSubmitted />} />
        <Route path='/fire' element={<FireApp />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
