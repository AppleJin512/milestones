import React from 'react';
import { Container, Box, Grid, Card, CardContent, CardMedia, Button, Link } from '@mui/material';
import useStyles from '../../../styles/styles';

export default function ProductImageBar(props) {

    const classes = useStyles();

    return (
        <Grid item lg={4} md={4} xs={12} className={classes.imageContainer}>
            <Card className={classes.card}>
                <div className={props.imageClassName}>
                    <CardContent className={classes.content}>
                        <CardMedia
                            component="img"
                            className={props.imageClassName}
                            image={props.item.imgurl}
                        />
                        <Container maxWidth="lg" className={props.display_style}>
                            <Box className={classes.top_button_box}>
                                <Button variant='contained' className={props.topButtonClassName}>{props.item.state_button}</Button>
                            </Box>
                            <Box className={classes.bottom_button_box}>
                                <Link href={`https://order-form-bdb98.web.app/picdetail/${props.id}`} underline="none" >
                                    <Button variant='contained' className={classes.bottom_button}>{props.item.customize_button}</Button>
                                </Link>
                            </Box>
                        </Container>
                    </CardContent>
                </div>                
            </Card>
        </Grid>
    )
}