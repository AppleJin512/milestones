import React, { useState, useEffect } from 'react';
import Tiff from 'tiff.js';
import { Container, Box, Grid, Card, CardContent, CardMedia, Button } from '@mui/material';
import useStyles from '../styles/styles';
import ImageCard from './ImageCard';
import PageBackdrop from './backdrop';
import { collection, getDocs } from "firebase/firestore";
import { storage, db } from "../services/firebase"
import { ref, getDownloadURL, listAll } from "firebase/storage";

export default function ImageBar(props) {
  
  const [ imageData, setImageData ] = useState([]);
  const [ topBannerImageData, setTopBannerImageData ] = useState([]);
  const [ bottomBannerImageData, setBottomBannerImageData ] = useState([]);
  const [ bottom_banner_image, setBottomBannerImage ] = useState('');
  const [ openBackdrop, setOpenBackdrop ] = useState(false);

  useEffect(()=>{
    setOpenBackdrop(true);
    getImageUrls();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const getImageUrls = async (imageFileList) => {

    var getImgRef, imgRefList = [];
    const listRef = ref(storage, 'images/landing_page_images');
    const fileList =  await listAll(listRef);
    fileList.items.forEach((itemRef) => {
        getImgRef = ref(storage, itemRef.fullPath);
        imgRefList.push(getImgRef);
    })

    const urls = await multiImage(imgRefList);
    fetchPost(urls);
  };

  const multiImage = async (imageFileList) => {
    let imagesUrlArray = [];
    for (let i = 0; i < imageFileList.length; i++) {
        let temp_url_array = {};
        const imageUrl = await getDownloadURL(imageFileList[i]);
        temp_url_array.img_name = imageFileList[i].name;
        temp_url_array.img_url = imageUrl;
        imagesUrlArray.push(temp_url_array);
      }
    return imagesUrlArray;
  };
  
  const fetchPost = async (urls) => {       
    await getDocs(collection(db, "milestones-test"))
    .then((querySnapshot)=>{             
      const newData = querySnapshot.docs
      .map((doc) => ({...doc.data(), id:doc.id }));
      newData.forEach((item) => {
        if (urls.length > 0) {
          item.image_1.forEach((data)=>{
            const tempFilterData = urls.filter((url) => { return url.img_name === data.image_name });
            data.img_url = tempFilterData[0].img_url;
            setImageData(item.image_1);
          })         
          item.top_banner_img.forEach((data)=>{
            const tempFilterData = urls.filter((url) => { return url.img_name === data.image_name });
            data.img_url = tempFilterData[0].img_url;
            setTopBannerImageData(item.top_banner_img);
          })      
          item.bottom_banner_image.forEach((data)=>{
            const tempFilterData = urls.filter((url) => { return url.img_name === data.image_name });
            setBottomBannerImage(tempFilterData[0].img_url);
            data.img_url = tempFilterData[0].img_url;
            setBottomBannerImageData(item.bottom_banner_image);
            displayBottomImage(tempFilterData[0].img_url);
          })      
        }
      })
    })
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
        {topBannerImageData.map((item, index) => {
          return (
            <Box key={index}>
              <ImageCard
                TextBoxClassName={classes.TextBox1}
                ImageHeadingClassName={classes.ImageHeading1}
                ImageStyle={{width: '100%', height: 755}}
                image_url={item.img_url}
                ImageHeading={item.image_heading}
                ImageSubheading={item.image_subheading}
                ImageButtonName={item.button_name}
                buttonBoxClassName={classes.buttonBox}
              />
          </Box>
          )
        })}
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
                          image={item.img_url}
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
            {bottomBannerImageData.map((item, index) => {
              return (
                <Grid item xs={12} key={index}>
                  <ImageCard
                    TextBoxClassName={classes.TextBox4}
                    ImageHeadingClassName={classes.ImageHeading4}
                    ImageStyle={{width: '100%', height: 399}}
                    image_url={bottom_banner_image}
                    textContentClassName={classes.textContent}
                    ImageHeading={item.image_heading}
                    ImageButtonName={item.button_name}
                    buttonBoxClassName={classes.buttonBox4}
                  />
                </Grid>
              )
            })}
          </Grid>     
        </Box>
      </Container>
      <PageBackdrop openBackdrop={openBackdrop} />
    </Box>
  );
}
