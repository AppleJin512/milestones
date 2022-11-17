import React from 'react';
import { Grid, Box } from '@mui/material';
import useStyles from '../../../styles/home_styles';
import ImageCard from '../imageCard';

export default function BottomImageBar(props) {

    const classes = useStyles();

    return (
        <Box style={{paddingTop: 37, paddingBottom: 80}}>
            <Grid container spacing={5}>
                {props.bottomBannerImageData.map((item, index) => {
                    return (
                        <Grid item xs={12} key={index}>
                            <ImageCard
                                TextBoxClassName={classes.TextBox4}
                                ImageHeadingClassName={classes.ImageHeading4}
                                ImageStyle={{width: '100%', height: 399}}
                                image_url={props.bottom_banner_image}
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
    )
}