import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import useStyles from '../../styles/home_styles';
import StatisticsCard from './statisticsCard';

const StatisticsBar = (props) => {

    const classes = useStyles();

    return (
        <Box style={{padding: '40px 0px'}}>
            <Box className={classes.StatisticsBar}>
                <Typography variant="h4" className={classes.StatisticsTitileBar}>HOW IT WORKs</Typography>
                <Grid container spacing={5} style={{paddingBottom: 70}}>
                    {props.iconData.map((item, index) => {
                        return (
                            <Grid key={index} item md={4} sm={12}>
                                <StatisticsCard statisticsInfo={item.intro_text} img_url={item.icon_url} statisticsInfoHeader={item.intro_heading} />
                            </Grid>
                        )
                    })}
                </Grid>
            </Box>
        </Box>
    )
}

export default StatisticsBar;