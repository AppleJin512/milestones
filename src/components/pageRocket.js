import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import useStyles from '../styles/styles';
import useScrollTrigger from "@mui/material/useScrollTrigger";

export default function PageRocket () {

    const [showTopBtn, setShowTopBtn] = useState(false);

    const classes = useStyles();

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 400) {
                setShowTopBtn(true);
            } else {
                if(showTopBtn) setShowTopBtn(false);
            }
        });
    }, [showTopBtn]);

    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }

    const trigger = useScrollTrigger({
        target: document.body,
        disableHysteresis: true,
        threshold: 100,
    });
    
    return (
        showTopBtn && (
            <Button id="back" className={classes.back_to_top} onClick={goToTop} in={trigger.toString()} >
                <svg className={classes.back_to_top_icon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44" style={{fill: "rgba(0, 0, 0, 0.3)", pointerEvents: "none", stroke: "#fff"}}>
                    <path style={{strokeWidth: 1,}}  d="M44 0H0v44h44"></path>
                    <path style={{strokeWidth: 1.5}} d="M30.588 27.233L22 18.366l-8.588 8.867-1.078-1.043L22 16.21l9.666 9.98-1.078 1.043z"></path>
                </svg>
            </Button>       
        )
    )
}