import React from 'react';
import { Card, CardContent, CardMedia, Button } from '@mui/material';
import useStyles from '../styles/styles';
import { styled } from '@mui/material/styles';
import { red } from '@mui/material/colors';

const ImageCard = (props) => {

    const classes = useStyles();

    const ColorButton = styled(Button)(({ theme }) => ({
        color: theme.palette.getContrastText(red[700]),
        backgroundColor: red[700],
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
                      <div style={{color: '#fff', fontSize: 20, paddingTop: 50}}><ColorButton variant="contained" style={{textTransform: 'none', padding: '0px 32px 0px 32px', height: 40}}>{props.ImageButtonName}</ColorButton></div>
                    </div>
                  </div>
                </CardContent>
            </div>                
        </Card>
        
    )
}

export default ImageCard;