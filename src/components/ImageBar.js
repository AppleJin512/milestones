import React, { useState, useEffect } from 'react';
// import Tiff from 'tiff.js';
// import TiffImage from '../images/banner_pic.tiff';
import { Container, Box, Grid, } from '@mui/material';
import useStyles from '../styles/styles';
import ImageCard from './ImageCard';
import PageBackdrop from './backdrop';
import { collection, getDocs } from "firebase/firestore";
import {db} from '../services/firebase';

export default function ImageBar(props) {

  const [ imageData, setImageData ] = useState([]);
  const [ openBackdrop, setOpenBackdrop ] = useState(false);
  // var xhr = XMLHttpRequest();
  // xhr.responsive = 'arraybuffer';
  // xhr.open('GET', TiffImage);

  // xhr.onload = function(e) {
  //   var arrayBuffer = this.responsive;
  //   Tiff.initialize({
  //     TOTAL_MEMORY : 16777216 * 10
  //   });
  //   console.log('arrayBuffer', arrayBuffer)
  //   var tiff = new Tiff({
  //     buffer : arrayBuffer
  //   });

  //   var data_url = tiff.toDataURL();
  //   console.log('data_url', data_url)
  //   document.getElementById("banner_pic").src = data_url;
  // };
  // xhr.send();

  const fetchPost = async () => {       
    await getDocs(collection(db, "milestones-test"))
      .then((querySnapshot)=>{             
        const newData = querySnapshot.docs
          .map((doc) => ({...doc.data(), id:doc.id }));
        newData.forEach((item) => {
          setImageData(item.image_1);
          setOpenBackdrop(false);
        })
      })
    }


  useEffect(()=>{
    setOpenBackdrop(true);
    fetchPost();
  }, [])

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
          />
        </Box>
        <Box style={{paddingTop: 37}}>
          <Grid container spacing={5}>
            {imageData.map((item, index) => {
              return (
                <Grid item md={4} xs={12} key={index}>
                  <ImageCard
                    TextBoxClassName={classes.TextBox2}
                    ImageHeadingClassName={classes.ImageHeading2}
                    ImageStyle={{height: 399}}
                    image_url={item.image_url}
                    ImageHeading={item.image_header}
                    ImageSubheading={item.image_subheader}
                    ImageButtonName={item.image_button_name}
                  />
                </Grid>
              )
            })}
            <Grid item xs>
              <ImageCard
                TextBoxClassName={classes.TextBox4}
                ImageHeadingClassName={classes.ImageHeading2}
                ImageStyle={{width: '100%', height: 399}}
                image_url={"http://localhost:3000/images/banner_pic.png"}
                ImageHeading={"We know you have been grinding for years... So Celebrate"}
                ImageButtonName={"Shop"}
              />
            </Grid>
          </Grid>     
        </Box>
      </Container>
      <PageBackdrop openBackdrop={openBackdrop} />
    </Box>
  );
}
