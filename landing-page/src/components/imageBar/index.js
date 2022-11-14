import React, { useState, useEffect } from 'react';
import Tiff from 'tiff.js';
import { Container, Box, Grid } from '@mui/material';
import useStyles from '../../styles/styles';
import MainImageBar from './mainImageBar';
import ProductImageBar from './productImageBar';
import BottomImageBar from './bottomImageBar';
import PageBackdrop from '../backdrop';
import {onSnapshot, query, collection, where } from 'firebase/firestore';
import { db } from "../../../firebase"
import StatisticsBar from '../statisticsBar';

export default function MainSection(props) {
  
  const [ productImageData, setProductImageData ] = useState([]);
  const [ iconData, setIconData ] = useState([]);
  const [ bottomBannerImageData, setBottomBannerImageData ] = useState([]);
  const [ bottom_banner_image, setBottomBannerImage ] = useState('');
  const [ openBackdrop, setOpenBackdrop ] = useState(false);
  const picturesRef = collection(db, "pictures");

  useEffect(() => {
    setOpenBackdrop(true);
    const q = query(collection(db, 'milestones-test'));
    const que = query(picturesRef, where("show_state", "==", true));
    onSnapshot(q, (snapshot) => {
      const temp_data = snapshot.docs.map(doc => (
        doc.data()
        ));
        getImageBarData(temp_data[0]);
      });
      onSnapshot(que, (snapshot) => {
        const temp_data = snapshot.docs.map(doc => ({
          id: doc.id,
          item: doc.data()
        }));
        setProductImageData(temp_data.slice(0, 3))
      });
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])  
    
    const getImageBarData = (data) => {
      const temp_data = data.bottom_banner_image;
      displayBottomImage(temp_data[0].image_url);
      setIconData(data.icons);
      setBottomBannerImageData(temp_data);
    }

  const displayBottomImage = (url) => {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'arraybuffer';
    xhr.open('GET', url);
    
    xhr.onload = function(e) {
      var arrayBuffer = this.response;
      Tiff.initialize({
        TOTAL_MEMORY : 16777216 * 10
      });
      var tiff = new Tiff({
        buffer : arrayBuffer
      });
      
      var data_url = tiff.toDataURL();
      setBottomBannerImage(data_url);
      setOpenBackdrop(false);
    };
    xhr.send();
  }

  const classes = useStyles();

  return (
    <Box className={classes.imageBar}>
      <Container className={classes.generalContainer} maxWidth="xl">
        <MainImageBar />
        <Box style={{paddingTop: 37}}>
          <Grid container spacing={5}>
            {productImageData.map((ele, i) => {
              switch(i) {
                case 0:
                  ele.imageClassName = classes.image1;
                  ele.topButtonClassName = classes.top_button1;
                    break;
                case 1:
                  ele.imageClassName = classes.image2;
                  ele.topButtonClassName = classes.top_button2;
                    break;
                case 2:
                  ele.imageClassName = classes.image3;
                  ele.topButtonClassName = classes.top_button3;
                    break;
                default:
                    return ele;
                }

              if (ele.item.show_state === true) ele.display_style = classes.customize_button_container;
              else if (ele.item.show_state === false) ele.display_style = classes.customize_button_container_hidden;  
              return (
                <ProductImageBar key={i} {...ele} />
              )
            })}
          </Grid>
        </Box>
        <StatisticsBar iconData={iconData} />
        <BottomImageBar bottomBannerImageData={bottomBannerImageData} bottom_banner_image={bottom_banner_image}/>       
      </Container>
      <PageBackdrop openBackdrop={openBackdrop} />
    </Box>
  );
}
