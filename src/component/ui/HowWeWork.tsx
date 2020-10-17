import React, {FC} from "react";
import {Box, Grid, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        textAlign: 'center',
        marginTop: theme.spacing(10),
        marginBottom: theme.spacing(10),
        backgroundColor: '#dce2e3',
        minHeight: '450px'
    },
    title: {
        marginTop: theme.spacing(5),
        marginBottom: theme.spacing(10),
    }
}));

const HowWeWork: FC = () => {
    const classes = useStyles();

    return (

        <div className={classes.root}>
            <Grid container spacing={0}>
                <Grid item xs={12} className={classes.title}>
                    <Typography component='p' variant='h4'>
                        How We Work
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <div>
                        <img
                            src='https://cache-landingpages.services.handy.com/assets/pages/service/pick_time_icon-fc7dab822f3dd585f10fcb5dea47b7040131a1b219c1aa624e19a728e15f7722.svg'
                            alt='none'
                        />
                    </div>
                    <Typography component='p' variant='h6'>
                        Pick a Time
                    </Typography>
                    <Typography component='p' variant='body2'>
                        Select the day and time for your service and get instant, affordable pricing.
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <div>
                        <img
                            src='https://cache-landingpages.services.handy.com/assets/pages/service/phone_icon-40ab9380da932637856628868c2ab9821a2d2802d3c2cef796b12a8798114724.svg'
                            alt='none'
                        />
                    </div>
                    <Typography component='p' variant='h6'>
                        Book instantly
                    </Typography>
                    <Typography component='p' variant='body2'>
                        We'll confirm your appointment and take care of payment electronically and securely.
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <div>
                        <img
                            src='https://cache-landingpages.services.handy.com/assets/pages/service/handy_man-abe2faed1401777d51e1f154c2e841e61f6e2d0880fad6462d217cce11c7d387.svg'
                            alt='none'
                        />
                    </div>
                    <Typography component='p' variant='h6'>
                        Your pro arrives
                    </Typography>
                    <Typography component='p' variant='body2'>
                        An experienced, fully-equipped professional will show up on time at your doorstep.
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <div>
                        <img
                            src='https://cache-landingpages.services.handy.com/assets/pages/service/pick_time_icon-fc7dab822f3dd585f10fcb5dea47b7040131a1b219c1aa624e19a728e15f7722.svg'
                            alt='none'
                        />
                    </div>
                    <Typography component='p' variant='h6'>
                        Pick a Time
                    </Typography>
                    <Typography component='p' variant='body2'>
                        Select the day and time for your service and get instant, affordable pricing.
                    </Typography>
                </Grid>
            </Grid>
        </div>
    )
}

export default HowWeWork;
