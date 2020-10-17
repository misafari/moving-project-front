import React, {FC} from "react";
import {makeStyles, Theme} from "@material-ui/core/styles";
import {Box, Container, Grid, Typography} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        position: 'relative',
        marginBottom: theme.spacing(2),
// display: 'inline-block'
    },
    imageLeft: {
        float: 'left',
    },
    imageRight: {
        float: 'right',
    },
    textRight: {
        float: 'left',
        position: 'absolute',
        backgroundColor: 'white',
        maxHeight: '18.75rem',
        overflow: 'hidden',
        marginTop: '3%',
        marginLeft: '30%',
        marginRight: '10%',
        padding: '1.875rem',
        top: 0,
        left: 0,
    },
    textLeft: {
        position: 'absolute',
        backgroundColor: 'white',
        maxHeight: '18.75rem',
        overflow: 'hidden',
        marginTop: '3%',
        marginLeft: '10%',
        marginRight: '30%',
        padding: '1.875rem'
    }
}));

const WeAreBest: FC = () => {
    const classes = useStyles();
    return (
        <Box display={{xs: 'none', sm: 'block'}}>
            <Grid container spacing={0} direction='row' justify='center' alignItems='center'>
                <Grid item xs={12}>
                    <div className={classes.root}>
                        <div style={{display: 'inline-block'}}>
                            <div className={classes.imageLeft}>
                                <img
                                    style={{width: '100%'}}
                                    src="https://cache-landingpages.services.handy.com/assets/services/large_generic_cleaning_1-6396cb452c5f3e1b8cf9c70ed816e7de74e6bc5896543c3924fd65d4be6ec705.jpg"
                                    />
                            </div>
                            <div className={classes.textRight}>
                                <Typography variant="h4" component="h1">
                                    Prepare your space for the next tenant
                                </Typography>
                                <Typography variant="body2" component="p">
                                    For property owners, ensuring that the house or apartment looks its very best is the easiest
                                    way to ensure you get the top rental value for your property. The Handy platform is the best
                                    way to find local, affordable, and top-quality move out cleaning services after your last
                                    tenant has vacated the property, or move in cleaning services right before your next tenant
                                    shows up.&nbsp; You may have had folks in and out of the apartment for the last week during
                                    the open house -- you don’t want to turn over the keys with footprints all over the
                                    floor!&nbsp;
                                </Typography>
                            </div>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <div className={classes.root}>
                        <div>
                            <div className={classes.imageRight}>
                                <img
                                    style={{width: '100%'}}
                                    src="https://cache-landingpages.services.handy.com/assets/services/large_generic_cleaning_2-3561cf7a04e162ac22a6ff13247cd791e7e8758b2e60978b804a27e7a4ba01d0.jpg"
                                    />
                            </div>
                            <div className={classes.textLeft}>
                                <Typography variant="h4" component="h1">
                                    Prepare your space for the next tenant
                                </Typography>
                                <Typography variant="body2" component="p">
                                    For property owners, ensuring that the house or apartment looks its very best is the easiest
                                    way to ensure you get the top rental value for your property. The Handy platform is the best
                                    way to find local, affordable, and top-quality move out cleaning services after your last
                                    tenant has vacated the property, or move in cleaning services right before your next tenant
                                    shows up.&nbsp; You may have had folks in and out of the apartment for the last week during
                                    the open house -- you don’t want to turn over the keys with footprints all over the
                                    floor!&nbsp;
                                </Typography>
                            </div>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </Box>
    )
}

export default WeAreBest;
