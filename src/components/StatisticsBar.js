import React from 'react';
import { Container, Box, Grid, Typography } from '@mui/material';
import useStyles from '../styles/styles';
import StatisticsCard from './StatisticsCard';

const StatisticsBar = () => {

    const statisticsBarData = [
        { id: 1, statisticsInfoHeader: 'Select Template', statisticsInfo: "Select from one of our templates. We will be adding styles and designs frequently", img_name: "select.png" },
        { id: 2, statisticsInfoHeader: 'Customize It', statisticsInfo: "Once you select fill out of the form, select some options and upload some files", img_name: "customize.png" },
        { id: 3, statisticsInfoHeader: 'We Build It', statisticsInfo: "Our team goes to work builing the design to your specifications", img_name: "sketch.png" },
        { id: 4, statisticsInfoHeader: 'Send For Review', statisticsInfo: "Once we're finished, we will email you a watermarked version for you to review", img_name: "email.png" },
        { id: 5, statisticsInfoHeader: 'You Approve', statisticsInfo: "You don't pay anything until you approve the design-hopefully, you do!", img_name: "like.png" },
        { id: 6, statisticsInfoHeader: 'We deliver', statisticsInfo: "If you purchased a plaque, it could take 10-14 days to receive. For digital purchases, it could take 24-48 hours", img_name: "paper-plane.png" },
    ]

    const classes = useStyles();

    return (
        <Box style={{padding: '40px 0px'}}>
            <Container className={classes.generalContainer} maxWidth="xl">
                <Box className={classes.StatisticsBar}>
                    <Typography variant="h4" className={classes.StatisticsTitileBar}>HOW IT WORKs</Typography>
                    <Grid container spacing={5} style={{paddingBottom: 70}}>
                        {statisticsBarData.map((item, index) => {
                            return (
                                <Grid key={index} item md={4}>
                                    <StatisticsCard statisticsInfo={item.statisticsInfo} img_name={item.img_name} statisticsInfoHeader={item.statisticsInfoHeader} />
                                </Grid>
                            )
                        })}
                    </Grid>
                </Box>
            </Container>
        </Box>
    )
}

export default StatisticsBar;