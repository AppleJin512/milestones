import React from 'react';
import { Container, Box, Grid, Typography, Button, Divider } from '@mui/material';
import useStyles from '../styles/styles';
import { styled } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import { FooterMenuData } from '../demo';

export default function Footer() {

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
        <Box className={classes.footer}>
            <Container maxWidth="lg">
                <Box className={classes.footer_menu_box}>
                    <Grid container spacing={3}>
                        {FooterMenuData.map((menu, index) => {
                            return (
                                <Grid item md={2.4} sm={6} xs={12}>
                                    <Box style={{textAlign: 'center'}}>
                                        <Typography variant='body1' className={classes.footer_subheader}>{menu.footer_subheader}</Typography>
                                        <Typography variant='body2' className={classes.footer_menu_item}>{menu.footer_menu_item1}</Typography>
                                        <Typography variant='body2' className={classes.footer_menu_item}>{menu.footer_menu_item2}</Typography>
                                        <Typography variant='body2' className={classes.footer_menu_item}>{menu.footer_menu_item3}</Typography>
                                        <Typography variant='body2' className={classes.footer_menu_item}>{menu.footer_menu_item4}</Typography>
                                        <Typography variant='body2' className={classes.footer_menu_item}>{menu.footer_menu_item5}</Typography>
                                    </Box>
                                </Grid>
                            )
                        })} 
                        <Grid item md={2.4} sm={12} xs={12}>
                            <Box style={{textAlign: 'center'}}>
                                <Typography variant='body1' className={classes.footer_subheader}>Newsletter</Typography>
                                <Typography variant='body2' className={classes.footer_menu_item}>Get our news and updates</Typography>
                                <Box style={{paddingBottom: 10}}>
                                    <input type="email" name="email" placeholder='Enter your email here*' className={classes.footer_input} />
                                </Box>
                                <ColorButton variant="contained" style={{textTransform: 'none', width: '100%', height: 40}}>Subscribe</ColorButton>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
                <Divider className={classes.footer_divider} />
                <Typography variant='body2' className={classes.footer_index}>©2023 by Madagascar. Proudly created with Wix.com</Typography>
            </Container>
        </Box>
    )
}