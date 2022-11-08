import React from 'react';
import { Container, Box, Grid, Typography, Button } from '@mui/material';
import useStyles from '../styles/styles';
import StatisticsCard from './StatisticsCard';
import SvgIcon1 from '../images/svg/svgIcon1';
import SvgIcon2 from '../images/svg/svgIcon2';
import SvgIcon3 from '../images/svg/svgIcon3';


const StatisticsBar = () => {

    const statisticsBarData = [
        { id: 1, statisticsInfoHeader: 'Our Paperless Headquarters', statisticsInfo: "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.", svg: <SvgIcon1 />},
        { id: 2, statisticsInfoHeader: '25 Rivers Cleaned Up', statisticsInfo: "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.", svg: <SvgIcon2 />},
        { id: 3, statisticsInfoHeader: '24 New Campaigns Launched', statisticsInfo: "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.", svg: <SvgIcon3 />},
    ]

    const classes = useStyles();

    return (
        <Box style={{paddingTop: 40, paddingBottom: 40,}}>
            <Container className={classes.generalContainer} maxWidth="xl">
                <Box className={classes.StatisticsBar}>
                    <Typography variant="h4" className={classes.StatisticsTitileBar}>giving back</Typography>
                    <Grid container spacing={5}>
                        {statisticsBarData.map((item, index) => {
                            return (
                                <Grid key={index} item md={4}>
                                    <StatisticsCard statisticsInfo={item.statisticsInfo} svg={item.svg} statisticsInfoHeader={item.statisticsInfoHeader} />
                                </Grid>
                            )
                        })}
                    </Grid>
                    <Box sx={{display: 'flex', justifyContent: 'center', padding: '70px 0px 50px 0px'}}>
                        <Button variant='contained' className={classes.moreInfoButton}>Read More</Button>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default StatisticsBar;