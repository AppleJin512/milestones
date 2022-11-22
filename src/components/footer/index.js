import React from 'react';
import { Container, Box, Grid, Typography } from '@mui/material';
import useStyles from '../../styles/home_styles';
import { Link } from "react-router-dom"
import { PAGES } from '../../auth/auth_url';

export default function Footer() {

    const classes = useStyles();

    const goBackToTop = (e) => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

    return (
        <Box className={classes.footer}>
            <Container maxWidth="lg">
                <Box className={classes.footer_menu_box}>
                    <Grid container spacing={3} >
                        <Grid item md={2} sm={6}>
                          <Link to={PAGES.SHOP}><Typography variant='body2' className={classes.footer_menu_item} onClick={(e)=>goBackToTop(e)}>Shop</Typography></Link>
                          <Link to={PAGES.ABOUT}><Typography variant='body2' className={classes.footer_menu_item} onClick={(e)=>goBackToTop(e)}>About Us</Typography></Link>
                        </Grid>
                        <Grid item md={7} sm={6}>
                          <Link to={PAGES.TERMS}><Typography variant='body2' className={classes.footer_menu_item} onClick={(e)=>goBackToTop(e)}>Shipping & Runtime</Typography></Link>
                          <Link to={PAGES.POLICY}><Typography variant='body2' className={classes.footer_menu_item} onClick={(e)=>goBackToTop(e)}>Store Policy</Typography></Link>
                        </Grid> 
                        <Grid item xl={3} md={3} sm={8} className={classes.footer_form_box}>
                          <Typography variant='body2' className={classes.footer_right_menu_item}>Milestone & Moments</Typography>
                          <Typography variant='body2' className={classes.footer_right_menu_item}>info@milestonemoments.com</Typography>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Box>

    )
}
