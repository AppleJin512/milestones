import React, { useState, useEffect } from 'react';
import { Container, Box, Grid, Typography } from '@mui/material';
import useStyles from '../styles/styles';
import StatisticsCard from './StatisticsCard';
import { collection, getDocs } from "firebase/firestore";
import { storage, db } from "../services/firebase"
import { ref, getDownloadURL, listAll } from "firebase/storage";

const StatisticsBar = () => {

    const [ iconData, setIconData ] = useState([]);

    useEffect(()=>{
        getIconUrls();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    const getIconUrls = async (imageFileList) => {
        
        var getImgRef, imgRefList = [];
        const listRef = ref(storage, 'images/landing_page_images/icons');
        const fileList =  await listAll(listRef);
        fileList.items.forEach((itemRef) => {
            getImgRef = ref(storage, itemRef.fullPath);
            imgRefList.push(getImgRef);
        })
        
        const urls = await multiImage(imgRefList);
        fetchPost(urls);
    };
  
    const multiImage = async (imageFileList) => {
      let iconUrlArray = [];
      for (let i = 0; i < imageFileList.length; i++) {
          let temp_url_array = {};
          const imageUrl = await getDownloadURL(imageFileList[i]);
          temp_url_array.icon_name = imageFileList[i].name;
          temp_url_array.icon_url = imageUrl;
          iconUrlArray.push(temp_url_array);
        }
      return iconUrlArray;
    };

    const fetchPost = async (urls) => {      
        await getDocs(collection(db, "milestones-test"))
        .then((querySnapshot)=>{             
            const newData = querySnapshot.docs
                .map((doc) => ({...doc.data(), id:doc.id }));
                newData.forEach((item) => {
                if (urls.length > 0) {
                    item.icons.forEach((data)=>{
                        const tempFilterData = urls.filter((url) => { return url.icon_name === data.icon_name });
                        data.icon_url = tempFilterData[0].icon_url;
                    })          
                    setIconData(item.icons);
                }
            })
        })
    }

    const classes = useStyles();

    return (
        <Box style={{padding: '40px 0px'}}>
            <Container className={classes.generalContainer} maxWidth="xl">
                <Box className={classes.StatisticsBar}>
                    <Typography variant="h4" className={classes.StatisticsTitileBar}>HOW IT WORKs</Typography>
                    <Grid container spacing={5} style={{paddingBottom: 70}}>
                        {iconData.map((item, index) => {
                            return (
                                <Grid key={index} item md={4} sm={12}>
                                    <StatisticsCard statisticsInfo={item.intro_text} img_url={item.icon_url} statisticsInfoHeader={item.intro_heading} />
                                </Grid>
                            )
                        })}
                    </Grid>
                </Box>
            </Container>
        </Box>
    )
}

export default StatisticsBar;