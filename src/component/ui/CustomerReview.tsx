import React, { FC } from "react";
import {makeStyles, Theme} from "@material-ui/core/styles";
import {Card, CardContent, Grid, Typography} from "@material-ui/core";
import Rating from '@material-ui/lab/Rating'

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        textAlign: 'center',
        marginTop: theme.spacing(20),
        marginBottom: theme.spacing(20),
    },
    title: {
        marginBottom: theme.spacing(10),
    },
    content: {
        flex: '1 0 auto',
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'left'
    },
    rating: {
        marginTop: theme.spacing(2)
    }
}));

const CustomerReview: FC = () => {
    const classes = useStyles();


    return(
        <div className={classes.root}>
            <Grid container spacing={0} direction='row' justify='center' alignItems='center'>
                <Grid item xs={12} className={classes.title}>
                    <Typography component='p' variant='h4'>
                        Customer Reviews
                    </Typography>
                </Grid>
                <Grid item xs={9} style={{marginBottom: '2%'}}>
                    <Card>
                        <div className={classes.details}>
                            <CardContent className={classes.content}>
                                <Typography component="h5" variant="h5">
                                    Ronin
                                </Typography>
                                <Typography variant="subtitle1" color="textSecondary">
                                    Kheili Khoob Bood. Kheili Khoob Bood.
                                    Kheili Khoob Bood. Kheili Khoob Bood.
                                    Kheili Khoob Bood. Kheili Khoob Bood.
                                    Kheili Khoob Bood. Kheili Khoob Bood.
                                    Kheili Khoob Bood. Kheili Khoob Bood.
                                    Kheili Khoob Bood. Kheili Khoob Bood.
                                </Typography>
                                <Rating className={classes.rating}
                                    name="simple-controlled"
                                    value={3}
                                />
                            </CardContent>
                        </div>
                    </Card>
                </Grid>
                <Grid item xs={9} style={{marginBottom: '2%'}}>
                    <Card>
                        <div className={classes.details}>
                            <CardContent className={classes.content}>
                                <Typography component="h5" variant="h5">
                                    Ronin
                                </Typography>
                                <Typography variant="subtitle1" color="textSecondary">
                                    Kheili Khoob Bood. Kheili Khoob Bood.
                                    Kheili Khoob Bood. Kheili Khoob Bood.
                                    Kheili Khoob Bood. Kheili Khoob Bood.
                                    Kheili Khoob Bood. Kheili Khoob Bood.
                                    Kheili Khoob Bood. Kheili Khoob Bood.
                                    Kheili Khoob Bood. Kheili Khoob Bood.
                                </Typography>
                                <Rating className={classes.rating}
                                        name="simple-controlled"
                                        value={3}
                                />
                            </CardContent>
                        </div>
                    </Card>
                </Grid>
                <Grid item xs={9} style={{marginBottom: '2%'}}>
                    <Card>
                        <div className={classes.details}>
                            <CardContent className={classes.content}>
                                <Typography component="h5" variant="h5">
                                    Ronin
                                </Typography>
                                <Typography variant="subtitle1" color="textSecondary">
                                    Kheili Khoob Bood. Kheili Khoob Bood.
                                    Kheili Khoob Bood. Kheili Khoob Bood.
                                    Kheili Khoob Bood. Kheili Khoob Bood.
                                    Kheili Khoob Bood. Kheili Khoob Bood.
                                    Kheili Khoob Bood. Kheili Khoob Bood.
                                    Kheili Khoob Bood. Kheili Khoob Bood.
                                </Typography>
                                <Rating className={classes.rating}
                                        name="simple-controlled"
                                        value={3}
                                />
                            </CardContent>
                        </div>
                    </Card>
                </Grid>
                <Grid item xs={9} style={{marginBottom: '2%'}}>
                    <Card>
                        <div className={classes.details}>
                            <CardContent className={classes.content}>
                                <Typography component="h5" variant="h5">
                                    Ronin
                                </Typography>
                                <Typography variant="subtitle1" color="textSecondary">
                                    Kheili Khoob Bood. Kheili Khoob Bood.
                                    Kheili Khoob Bood. Kheili Khoob Bood.
                                    Kheili Khoob Bood. Kheili Khoob Bood.
                                    Kheili Khoob Bood. Kheili Khoob Bood.
                                    Kheili Khoob Bood. Kheili Khoob Bood.
                                    Kheili Khoob Bood. Kheili Khoob Bood.
                                </Typography>
                                <Rating className={classes.rating}
                                        name="simple-controlled"
                                        value={3}
                                />
                            </CardContent>
                        </div>
                    </Card>
                </Grid>
            </Grid>
        </div>
    )
}

export default CustomerReview;
