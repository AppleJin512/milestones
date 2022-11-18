import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Box, Button } from '@mui/material';
import useStyles from '../../../styles/shop_style';

export default function Picture(props) {

    const classes = useStyles();


    return (
        <div className="relative flex flex-col items-center bg-white rounded m-4 pt-5 mb-res">
            <div className="md:w-60 md:max-w-60 mb-5   mb-h w-full">
                <Link to={`picdetail/${props.id}`} className="shopImageBox">
                    <img src={props.item.imgurl} alt="/src/images/3.jpg" className="w-auto h-auto shadow-lg shadow-gray-500 absolute left-2/4 top-2/4" style={{ transform: 'translate(-50%,-60%)', height: 250 }} data-aos="zoom-y-out" />
                    <Container maxWidth="lg" className={props.display_style}>
                        <Box className={classes.top_button_box}>
                            <Button variant='contained' className={classes.vite_top_button}>{props.item.state_button}</Button>
                        </Box>
                        <Box className={classes.bottom_button_box}>
                            <Button variant='contained' className={classes.vite_bottom_button}>{props.item.customize_button}</Button>
                        </Box>
                    </Container>
                </Link>
            </div>
            <h5 className="text-xl font-bold leading-snug tracking-tight mb-1" style={{ fontSize: '16px' }}><a href="/#">{props.item.name}</a></h5>
            <p className="text-orange text-center">Canvas from <span className='text-linethrough text-dark'>${props.item.oldprice}</span> ${props.item.price}</p>
        </div>
    );
}