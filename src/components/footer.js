import React from 'react';
import { Container, Box, Grid, Typography, Button } from '@mui/material';
import useStyles from '../styles/styles';

export default function Footer() {

    const classes = useStyles();

    return (
        <Box className={classes.footer}>
            <Container maxWidth="lg">
                <Box className={classes.footer_menu_box}>
                    <Grid container spacing={3} >
                        <Grid item md={2} sm={6}>
                            <Typography variant='body2' className={classes.footer_menu_item}>Shop</Typography>
                            <Typography variant='body2' className={classes.footer_menu_item}>About Us</Typography>
                            <Typography variant='body2' className={classes.footer_menu_item}>Contact</Typography>
                        </Grid>
                        <Grid item md={5} sm={6}>
                            <Typography variant='body2' className={classes.footer_menu_item}>Shipping & Runtime</Typography>
                            <Typography variant='body2' className={classes.footer_menu_item}>Store Policy</Typography>
                        </Grid>
                        <Grid item xl={5} md={5} className={classes.footer_form_box}>
                            <Box
                                component="form"
                                sx={{
                                    position: 'relative',
                                    '& .MuiTextField-root': { width: '24ch', height: '62px', },
                                    '& .MuiInput-root': { height: '68%', margin: '5px', paddingLeft: 1, color: '#fff', },
                                }}
                                noValidate
                                autoComplete="off"
                            >
                                <label htmlFor='' className={classes.footer_input_label} >Enter your email here*</label>
                                <input type="email" name="email" className={classes.footer_input}></input>
                                <Button variant="contained" className={classes.subscribe_button}>Subscribe</Button>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
            <Box className={classes.footer_index}>
                <Container maxWidth="xl">
                    <Typography className={classes.footer_index_text}>©2023 by Raw.etc. Proudly created with Wix.com</Typography>
                </Container>
            </Box>
        </Box>

    )
}