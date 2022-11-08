import React from 'react';
import { Container, Box, Grid, } from '@mui/material';
import mainImage from '../images/mainImage.jpg';
import Image4 from '../images/image4.jpg';
import useStyles from '../styles/styles';
import ImageCard from './ImageCard';
import storage from "../services/firebase"
import { ref, getDownloadURL, listAll } from "firebase/storage";
import { useState } from 'react';
import { useEffect } from 'react';
import PageBackdrop from './backdrop';

const ImageBar = (props) => {

  const [ image_urls, setImageUrls ] = useState([]);
  const [ openBackdrop, setOpenBackdrop ] = useState(false);

  useEffect(() => {
    setOpenBackdrop(true);
    const fileList = async (imageFileList) => {
      var getImgRef, imgRefList = [];
      const listRef = ref(storage, 'images/');
      const fileList =  await listAll(listRef);
      fileList.items.forEach((itemRef) => {
          getImgRef = ref(storage, itemRef.fullPath);
          imgRefList.push(getImgRef)
      })
      const urls = await multiImage(imgRefList);
      setImageUrls(urls);
    };

    const multiImage = async (imageFileList) => {
      const imagesUrlArray = [];
      for (let i = 0; i < imageFileList.length; i++) {
          const imageUrl = await getDownloadURL(imageFileList[i]);
          imagesUrlArray.push(imageUrl);
      }
      setOpenBackdrop(false);
      return imagesUrlArray;
    };
    fileList();
  }, [setImageUrls])
  
  const classes = useStyles();

  return (
    <Box className={classes.imageBar}>
      <Container className={classes.generalContainer}>
        <Box>
          <ImageCard
            TextBoxClassName={classes.TextBox1}
            ImageHeadingClassName={classes.ImageHeading1}
            ImageStyle={{width: '100%', height: 755}}
            image_url={mainImage}
            ImageHeading={"become one with nature"}
            ImageSubheading={"Everything You need for the Perfect Travel Experience"}
            ImageButtonName={"Shop Our Range"}
          />
        </Box>
        <Box style={{paddingTop: 37}}>
          <Grid container spacing={5}>
            {image_urls.map((item, index) => {
              return (
                <Grid item md={4} sm={12} key={index}>
                  <ImageCard
                    TextBoxClassName={classes.TextBox2}
                    ImageHeadingClassName={classes.ImageHeading2}
                    ImageStyle={{width: '100%', height: 399}}
                    image_url={item}
                    ImageHeading={"get ready for the big chill"}
                    ImageSubheading={"Our New Jackets and Vests Collection"}
                    ImageButtonName={"Shop New Arrivals"}
                  />
                </Grid>
              )
            })}
            <Grid item xs>
              <ImageCard
                TextBoxClassName={classes.TextBox4}
                ImageHeadingClassName={classes.ImageHeading2}
                ImageStyle={{width: '100%', height: 399}}
                image_url={Image4}
                ImageHeading={"start planning your next adventure"}
                ImageButtonName={"Contact Us"}
              />
            </Grid>
          </Grid>     
        </Box>
      </Container>
      <PageBackdrop openBackdrop={openBackdrop} />
    </Box>
  );
};

export default ImageBar;