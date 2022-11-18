import React from 'react';
import { Card, CardContent, CardMedia, Button, Box } from '@mui/material';
import useStyles from '../../../styles/home_styles';
import { styled } from '@mui/material/styles';

const ImageCard = (props) => {

    const classes = useStyles();

    const ColorButton = styled(Button)(({ theme }) => ({
        backgroundColor: '#0c0145',
        borderRadius: 0,
        '&:hover': {
        backgroundColor: '#120C75',
        },
    }));

    return (
        <Card className={classes.card}>
            <div style={{position: 'relative'}}>
                <CardContent className={classes.content}>
                  <div style={{position: 'relative'}} >
                    <CardMedia
                        component="img"
                        style={props.ImageStyle}
                        image={props.image_url}
                    />
                    <div className={props.TextBoxClassName} >
                        <div className={props.ImageHeadingClassName}>{props.ImageHeading}</div>
                        <div className={classes.imageSubheadng}>{props.ImageSubheading}</div>
                        <div className={props.buttonBoxClassName}><ColorButton variant="contained" className={classes.main_bar_button} id={props.id} onClick={(e)=>props.onGoToOtherPage(e)}>{props.ImageButtonName}</ColorButton></div>
                    </div>
                  </div>
                </CardContent>
                <Box className={props.textContentClassName}></Box>
            </div>                
        </Card>
        
    )
}

export default ImageCard;   