import React from 'react';
import { Card, CardContent, CardMedia, Button } from '@mui/material';
import useStyles from '../styles/styles';
import { styled } from '@mui/material/styles';
import { red } from '@mui/material/colors';

const ImageCard = (props) => {

    const classes = useStyles();

    const ColorButton = styled(Button)(({ theme }) => ({
        backgroundColor: '#0c0145',
        borderRadius: 0,
        '&:hover': {
        backgroundColor: red[900],
        },
    }));

    return (
        <Card className={classes.card}>
            <div>
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
                      <div style={{color: '#fff', paddingTop: 50}}><ColorButton variant="contained" style={{textTransform: 'none', padding: '15px 130px', fontSize: 24}}>{props.ImageButtonName}</ColorButton></div>
                    </div>
                  </div>
                </CardContent>
            </div>                
        </Card>
        
    )
}

export default ImageCard;