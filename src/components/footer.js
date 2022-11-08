import React from 'react';
import { Container, Box, Grid, Typography, Button } from '@mui/material';
// import { Facebook, , Close, AccountCircle } from '@mui/icons-material';
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
                            <Typography variant='body2' className={classes.footer_menu_item}>Stockists</Typography>
                            <Typography variant='body2' className={classes.footer_menu_item}>Blog</Typography>
                            <Typography variant='body2' className={classes.footer_menu_item}>About Us</Typography>
                            <Typography variant='body2' className={classes.footer_menu_item}>Contact</Typography>
                        </Grid>
                        <Grid item md={5} sm={6}>
                            <Typography variant='body2' className={classes.footer_menu_item}>FAQ</Typography>
                            <Typography variant='body2' className={classes.footer_menu_item}>Shipping & Runtime</Typography>
                            <Typography variant='body2' className={classes.footer_menu_item}>Store Policy</Typography>
                            <Typography variant='body2' className={classes.footer_menu_item}>payment Methods</Typography>
                        </Grid>
                        <Grid item xl={5} lg={12} className={classes.footer_form_box}>
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
                            <Box className={classes.footer_link_bar}>
                                <Typography variant='body2'>
                                    <img alt="Facebook" src="https://static.wixstatic.com/media/23fd2a2be53141ed810f4d3dcdcd01fa.png/v1/fill/w_20,h_20,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/23fd2a2be53141ed810f4d3dcdcd01fa.png" />
                                </Typography>
                                <Typography variant='body2'>
                                    <img alt="Instagram" src="https://static.wixstatic.com/media/81af6121f84c41a5b4391d7d37fce12a.png/v1/fill/w_20,h_20,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/81af6121f84c41a5b4391d7d37fce12a.png" />
                                </Typography>
                                <Typography variant='body2'>
                                    <img alt="Pinterest" src="https://static.wixstatic.com/media/9c486556465843c5850fabfd68dfae49.png/v1/fill/w_20,h_20,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/9c486556465843c5850fabfd68dfae49.png" />
                                </Typography>
                                <Typography variant='body2'>
                                    <img alt="YouTube" src="https://static.wixstatic.com/media/203dcdc2ac8b48de89313f90d2a4cda1.png/v1/fill/w_20,h_20,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/203dcdc2ac8b48de89313f90d2a4cda1.png" />
                                </Typography>
                                <Typography variant='body2'>
                                    <img alt="Twitter" src="https://static.wixstatic.com/media/01ab6619093f45388d66736ec22e5885.png/v1/fill/w_20,h_20,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/01ab6619093f45388d66736ec22e5885.png" />
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
            <Box className={classes.footer_index}>
                <Container maxWidth="lg">
                    <Typography className={classes.footer_index_text}>©2023 by Raw.etc. Proudly created with Wix.com</Typography>
                </Container>
            </Box>
        </Box>

    )
}