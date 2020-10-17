import React, { FC } from "react";
import {Grid, Theme, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
    image: {
        width: '100%',
        height: '300px',
        textAlign: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        backgroundImage: 'url(https://cache-landingpages.services.handy.com/assets/services/large_generic_cleaning-56561ea359483ea252b419baf26667bbe9e9132723cd42878bfed18f0c6e5835.jpg)',
    },
    textBody: {
        padding: '90px 0',
    }
}))

const CompanyName: FC = () => {
    const classes = useStyles();
    return(
        <Grid container>
            <Grid item xs={12}>
                <div className={classes.image}>
                    <Typography variant='h2' component='p' className={classes.textBody}>
                        Company Name For Show
                    </Typography>
                </div>
            </Grid>
        </Grid>
    )
}

export default CompanyName;
