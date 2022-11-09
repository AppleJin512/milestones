import React, { useState, useEffect } from 'react';
import { Container, Box, Grid, } from '@mui/material';
import mainImage from '../images/mainImage.jpg';
import Image4 from '../images/image4.jpg';
import useStyles from '../styles/styles';
import ImageCard from './ImageCard';
import PageBackdrop from './backdrop';
import { collection, getDocs } from "firebase/firestore";
import {db} from '../services/firebase';

export default function ImageBar(props) {

  const [ imageData, setImageData ] = useState([]);
  const [ openBackdrop, setOpenBackdrop ] = useState(false);

  
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
            image_url={mainImage}
            ImageHeading={"become one with nature"}
            ImageSubheading={"Everything You need for the Perfect Travel Experience"}
            ImageButtonName={"Shop Our Range"}
          />
        </Box>
        <Box style={{paddingTop: 37}}>
          <Grid container spacing={5}>
            {imageData.map((item, index) => {
              return (
                <Grid item md={4} sm={12} key={index}>
                  <ImageCard
                    TextBoxClassName={classes.TextBox2}
                    ImageHeadingClassName={classes.ImageHeading2}
                    ImageStyle={{width: '100%', height: 399}}
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
}
