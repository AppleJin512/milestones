import React, { useState, useEffect } from 'react';
import { Typography, Box, IconButton, Container, Grid, Card, CardContent, Hidden, Avatar, Slide, TextField } from '@mui/material';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';
import EmojiPicker from 'emoji-picker-react';
import useStyles from '../../styles/home_styles';

export default function ChattingBox() {

    const [ showChattingCard, setShowChattingCard ] = useState(false);
    const [ showChattingAvatar, setShowChattingAvatar ] = useState(false);
    const [ showEmojiBox, setShowEmojiBox ] = useState(false);
    const [ textContent, setTextContent ] = useState('');

    const openChattinCard = () => {
        setShowChattingCard(true);
    }

    const closeChattingCard = () => {
        setShowChattingCard(false);
    }

    const openEmojiPicker = () => {
        setShowEmojiBox(!showEmojiBox);
    }

    const pickEmojiHandle = (e, emojiObject) => {
        let temp_text = textContent;
        temp_text += emojiObject.emoji;
        setTextContent(temp_text);
    }

    const handleInputText = (e) => {
        setTextContent(e.target.value);
    }

    useEffect(()=>{
        window.addEventListener("scroll", () => {
            if (window.scrollY > 400) {
                setShowChattingAvatar(true);
            } else {
                if(showChattingAvatar) setShowChattingAvatar(false);
            }
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [showEmojiBox])

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
                            {showEmojiBox && ( <EmojiPicker height={400} onEmojiClick={pickEmojiHandle} /> )}    
                            <form>
                                <Grid container>
                                    <Grid item xs={8}>
                                        <Box
                                            component="div"
                                            sx={{
                                                height: '100%',
                                                '& .MuiTextField-root': { width: '24ch', height: '100%' },
                                                '& .MuiInput-root': { height: '100%', margin: '5px', paddingLeft: 1 },
                                            }}
                                            noValidate
                                            autoComplete="off"
                                        >
                                            <TextField
                                                id="standard-multiline-static"
                                                multiline
                                                placeholder='Type your message...'
                                                variant="standard"
                                                value={textContent}
                                                onChange={handleInputText}
                                            />
                                        </Box>
                                    </Grid>
                                    <Grid item xs={4} style={{display: 'flex', justifyContent: 'flex-end'}}>
                                        <IconButton aria-label="delete" size="large" onClick={openEmojiPicker} className={classes.emojiIcon}>
                                            <EmojiEmotionsOutlinedIcon fontSize="inherit" />
                                        </IconButton>
                                        <IconButton aria-label="delete" size="large" className={classes.fileIcon} >
                                            <label htmlFor="contained-button-file" className={classes.file_input_label}>
                                                <input
                                                    accept="image/*"
                                                    id="contained-button-file"
                                                    multiple
                                                    type="file"
                                                    className={classes.file_input}
                                                />
                                                <AttachFileOutlinedIcon fontSize="inherit" sx={{ transform: 'rotate(45deg)'}}/>
                                            </label>
                                        </IconButton>
                                    </Grid>
                                </Grid>
                            </form>
                        </CardContent>
                    </Card>                   
                </Slide>
            </Grid>
        </Grid>
    )
}