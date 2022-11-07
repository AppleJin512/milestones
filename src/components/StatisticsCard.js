import React from 'react';
import { Box, Typography } from '@mui/material';
import useStyles from '../styles/styles';

const StatisticsCard = (props) => {

    const classes = useStyles();

    return (
        <Box style={{paddingTop: 25}}>
            <Box style={{display: 'flex', justifyContent: 'center',}}>
                {props.svg}
            </Box>
            <Typography variant='body1' className={classes.statisticsInfo}>{props.statisticsInfo}</Typography>
        </Box>
    )
}

export default StatisticsCard;