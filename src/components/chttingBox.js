import React, { useEffect } from 'react';
import { Typography, Box, IconButton, Container, Grid, Card, CardContent, Hidden, Avatar, Slide } from '@mui/material';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';
import useStyles from '../styles/styles';

export default function ChattingBox() {

    const [ showChattingCard, setShowChattingCard ] = React.useState(false);
    const [ showChattingAvatar, setShowChattingAvatar ] = React.useState(false);

    const openChattinCard = () => {
        setShowChattingCard(true);
    }

    const closeChattingCard = () => {
        setShowChattingCard(false);
    }

    useEffect(()=>{
        window.addEventListener("scroll", () => {
            if (window.scrollY > 400) {
                setShowChattingAvatar(true);
            } else {
                if(showChattingAvatar) setShowChattingAvatar(false);
            }
        });
    }, [showChattingAvatar])


    const classes = useStyles();

    return (
        <Grid container>
            <Grid item xs={4}>
                <Hidden smDown>
                    <Button variant="contained" onClick={openChattinCard} className={classes.chattingButton}>
                        chat with us
                    </Button>
                </Hidden>
                <Hidden smUp>
                    {showChattingAvatar && (
                        <Avatar className={classes.chattingAvatar}  onClick={openChattinCard} id="chattingAvatar">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" style={{width: 24, height: 24, color: 'rgb(255, 255, 255)'}}> 
                                <g fill="none" fillRule="evenodd"> 
                                    <g fill="currentColor" fillRule="nonzero">
                                        <g> 
                                            <g> 
                                                <path d="M14 0C6.28 0 0 5.8 0 12.93c.007 2.165.593 4.288 1.696 6.15L.028 26.59c-.095.427.06.871.398 1.148.339.277.804.34 1.204.162l6.914-3.072c1.738.685 3.589 1.035 5.456 1.033 7.72 0 14-5.8 14-12.93S21.72 0 14 0zm4.508 16.32H9.492c-.64 0-1.16-.52-1.16-1.16 0-.64.52-1.16 1.16-1.16h9.016c.64 0 1.16.52 1.16 1.16 0 .64-.52 1.16-1.16 1.16zm0-4.638H9.492c-.64 0-1.16-.519-1.16-1.16 0-.64.52-1.158 1.16-1.158h9.016c.64 0 1.16.519 1.16 1.159s-.52 1.159-1.16 1.159z" transform="translate(-2580 -734) translate(2580 734) translate(2 2)"></path> 
                                            </g> 
                                        </g> 
                                    </g> 
                                </g> 
                            </svg>
                        </Avatar>
                    )}
                </Hidden>
                <Slide direction="up" in={showChattingCard}>
                    <Card className={classes.chattingCard}>
                        <CardContent style={{padding: 0}}>
                            <Container maxWidth="xl" style={{backgroundColor: "#0c0145", color: '#fff', padding: '20px 5px 20px 20px'}}>
                                <Grid container>
                                    <Grid item xs={10}>
                                        <Typography variant='div' style={{fontWeight: 300, fontSize: 19}}>CHAT WITH US</Typography>
                                        <Typography variant='div' style={{display: 'flex', alignItems: 'center', fontSize: 14}}><div className={classes.statusDot}></div>We'll reply as soon as we can.</Typography>
                                    </Grid>
                                    <Grid item xs={2} style={{display: 'flex', justifyContent: 'flex-end'}}>
                                        <IconButton aria-label="delete" size="large" sx={{color: "#fff", width: '100%'}} onClick={closeChattingCard} >
                                            <CloseIcon fontSize="inherit" />
                                        </IconButton>
                                    </Grid>
                                </Grid>
                            </Container>
                            <Box className={classes.chattingHistoryBox}></Box>
                            <Box>
                                <Grid container>
                                    <Grid item xs={8}>
                                        <textarea className={classes.textField} name="text" rows={2} placeholder='Type your message...' ></textarea>
                                    </Grid>
                                    <Grid item xs={4} style={{display: 'flex', justifyContent: 'flex-end'}}>
                                        <IconButton aria-label="delete" size="large">
                                            <EmojiEmotionsOutlinedIcon fontSize="inherit" />
                                        </IconButton>
                                        <IconButton aria-label="delete" size="large">
                                            <AttachFileOutlinedIcon fontSize="inherit" sx={{ transform: 'rotate(45deg)'}}/>
                                        </IconButton>
                                    </Grid>
                                </Grid>
                            </Box>
                        </CardContent>
                    </Card>                   
                </Slide>
            </Grid>
        </Grid>
    )
}