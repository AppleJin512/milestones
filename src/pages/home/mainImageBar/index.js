import React from 'react';
import { Box } from '@mui/material';
import useStyles from '../../../styles/home_styles';
import ImageCard from '../imageCard';
import { useNavigate } from 'react-router-dom';

export default function MainImageBar() {

    const classes = useStyles();
    const history = useNavigate();

    const onGoToOtherPage = (e) => {
        history('/shop');
    }
    
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
                onGoToOtherPage={(e)=>onGoToOtherPage(e)}
                id={"shop"}
            />
        </Box>
    )
}