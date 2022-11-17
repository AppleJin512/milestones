import React, { useEffect } from 'react';
import {
  Routes,
  Route,
  useLocation,

  
} from 'react-router-dom';
import 'aos/dist/aos.css';
// import history from './history';
import '../../styles/css/style.css';

import AOS from 'aos';

import PictureList from './PictureList';
import PictureDetail from './PictureDetail';
import PictureSubmitted from './PictureSubmited';
// import FireApp from './pages/fire/FireApp';

export default function Shop() {

    const location = useLocation();
  
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
      <>
        <Routes>
            <Route path="/" element={<PictureList />} />
            <Route path='/picdetail/:id' element={<PictureDetail />} />
            <Route path='/submit' element={<PictureSubmitted />} />
            {/* <Route path='/fire' element={<FireApp />} /> */}
        </Routes>
      </>
    )
}