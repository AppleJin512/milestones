import React from 'react';
import { Box } from '@mui/material';
import useStyles from '../../../styles/home_styles';
import ImageCard from '../imageCard';

export default function MainImageBar() {

    const classes = useStyles();
    
    return (
        <Box>
            <ImageCard
                TextBoxClassName={classes.TextBox1}
                ImageHeadingClassName={classes.ImageHeading1}
                ImageStyle={{width: '100%', height: 755}}
                image_url={"/image/celebrate.png"}
                ImageHeading={"Celebrate The Milestones"}
                ImageSubheading={"Memorabilia designed to hang in the family room"}
                ImageButtonName={"Shop"}
                buttonBoxClassName={classes.buttonBox}
            />
        </Box>
    )
}