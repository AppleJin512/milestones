import React, { useState, useEffect } from 'react';
import Tiff from 'tiff.js';
import TiffImage from '../images/banner_pic.tiff';
import { Container, Box, Grid, Card, CardContent, CardMedia, Button } from '@mui/material';
import useStyles from '../styles/styles';
import ImageCard from './ImageCard';
import PageBackdrop from './backdrop';
import { collection, getDocs } from "firebase/firestore";
import {db} from '../services/firebase';

export default function ImageBar(props) {
  
  const [ imageData, setImageData ] = useState([]);
  const [ temp_banner_image, setTempBannerImage ] = useState('');
  const [ banner_image, setBannerImage ] = useState('');
  const [ openBackdrop, setOpenBackdrop ] = useState(false);

  useEffect(()=>{
    setOpenBackdrop(true);
    xhr.send();
    fetchPost();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [temp_banner_image])


  var xhr = new XMLHttpRequest();
  xhr.responseType = 'arraybuffer';
  xhr.open('GET', TiffImage);
  
  xhr.onload = function(e) {
    var arrayBuffer = this.response;
    Tiff.initialize({
      TOTAL_MEMORY : 16777216 * 10
    });
    var tiff = new Tiff({
      buffer : arrayBuffer
    });
  
    var data_url = tiff.toDataURL();
    setTempBannerImage(data_url);
  };
  
  const fetchPost = async () => {       
    await getDocs(collection(db, "milestones-test"))
    .then((querySnapshot)=>{             
      const newData = querySnapshot.docs
      .map((doc) => ({...doc.data(), id:doc.id }));
      newData.forEach((item) => {
        setImageData(item.image_1);
        setBannerImage(temp_banner_image);
          setOpenBackdrop(false);
        })
      })
    }


  const classes = useStyles();

  return (
    <Box className={classes.imageBar}>
      <Container className={classes.generalContainer} maxWidth="xl">
        <Box>
          <ImageCard
            TextBoxClassName={classes.TextBox1}
            ImageHeadingClassName={classes.ImageHeading1}
            ImageStyle={{width: '100%', height: 755}}
            image_url={"http://localhost:3000/images/Celebrate.png"}
            ImageHeading={"Celetrate the Milestones"}
            ImageSubheading={"Memorabilia designed to hang in the family room"}
            ImageButtonName={"Shop"}
            buttonBoxClassName={classes.buttonBox}
          />
        </Box>
        <Box style={{paddingTop: 37}}>
          <Grid container spacing={5}>
            {imageData.map((item, index) => {
              switch(index) {
                case 0:
                  item.imageClassName = classes.image1;
                  item.topButtonClassName = classes.top_button1;
                  break;
                case 1:
                  item.imageClassName = classes.image2;
                  item.topButtonClassName = classes.top_button2;
                  break;
                case 2:
                  item.imageClassName = classes.image3;
                  item.topButtonClassName = classes.top_button3;
                  break;
                default:
                  return item;
              }
              return (
                <Grid item lg={4} md={4} xs={12} key={index} className={classes.imageContainer}>
                  <Card className={classes.card}>
                    <div className={item.imageClassName}>
                      <CardContent className={classes.content}>
                        <CardMedia
                          component="img"
                          className={item.imageClassName}
                          image={item.image_url}
                        />
                        <Container maxWidth="lg" style={{position: 'absolute', top: 0}}>
                          <Box className={classes.top_button_box}>
                            <Button variant='contained' className={item.topButtonClassName}>{item.top_button_name}</Button>
                          </Box>
                          <Box className={classes.bottom_button_box}>
                            <Button variant='contained' className={classes.bottom_button}>{item.bottom_button_name}</Button>
                          </Box>
                        </Container>
                      </CardContent>
                    </div>                
                  </Card>
                </Grid>
              )
            })}
            <Grid item xs={12}>
              {/* <ImageCard
                TextBoxClassName={classes.TextBox1}
                ImageHeadingClassName={classes.ImageHeading1}
                ImageStyle={{width: '100%', height: 755}}
                image_url={"http://localhost:3000/images/Celebrate.png"}
                ImageHeading={"Celetrate the Milestones"}
                ImageSubheading={"Memorabilia designed to hang in the family room"}
                ImageButtonName={"Shop"}
                buttonBoxClassName={classes.buttonBox}
              /> */}
              <ImageCard
                TextBoxClassName={classes.TextBox4}
                ImageHeadingClassName={classes.ImageHeading4}
                ImageStyle={{width: '100%', height: 399}}
                image_url={banner_image}
                textContentClassName={classes.textContent}
                ImageHeading={"We know you have been grinding for years... So Celebrate"}
                ImageButtonName={"Shop"}
                buttonBoxClassName={classes.buttonBox4}
              />
            </Grid>
          </Grid>     
        </Box>
      </Container>
      <PageBackdrop openBackdrop={openBackdrop} />
    </Box>
  );
}
