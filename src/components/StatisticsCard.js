import React from 'react';
import { Box, Typography } from '@mui/material';
import useStyles from '../styles/styles';

const StatisticsCard = (props) => {

    const classes = useStyles();

    return (
        <Box style={{paddingTop: 25}}>
            <Box style={{display: 'flex', justifyContent: 'center',}}>
                <img src={"http://localhost:3000/images/icons/" + props.img_name} alt="icons" />
            </Box>
            <Typography variant='body1' className={classes.statisticsInfoHeader}>{props.statisticsInfoHeader}</Typography>
            <Typography variant='body1' className={classes.statisticsInfo}>{props.statisticsInfo}</Typography>
        </Box>
    )
}

export default StatisticsCard;