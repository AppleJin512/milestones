import React from 'react';
import { Box, Typography } from '@mui/material';
import useStyles from '../../../styles/home_styles';

const StatisticsCard = (props) => {

    const classes = useStyles();

    return (
        <Box style={{paddingTop: 25}}>
            <Box style={{display: 'flex', justifyContent: 'center',}}>
                <img src={props.img_url} alt="icons" />
            </Box>
            <Typography variant='body1' className={classes.statisticsInfoHeader}>{props.statisticsInfoHeader}</Typography>
            <Typography variant='body1' className={classes.statisticsInfo}>{props.statisticsInfo}</Typography>
        </Box>
    )
}

export default StatisticsCard;