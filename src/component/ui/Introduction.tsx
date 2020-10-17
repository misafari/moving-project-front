import React, {FC} from "react";
import {Container, createStyles, Grid, Theme, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import IntroductionCard from "./IntroductionCard";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
       root: {
           marginTop: theme.spacing(8),
           marginBottom: theme.spacing(2),
       },
        title: {
           textAlign: 'center',
            marginBottom: theme.spacing(5),
        }
    }),
);

const Introduction: FC = () => {
    const classes = useStyles();

    return (
        <Container className={classes.root} maxWidth="lg">
        <Grid container spacing={2} className={classes.root}>
            <Grid item xs={12} className={classes.title}>
                <Typography component='p' variant='h4'>
                    Our services
                </Typography>
            </Grid>
                <IntroductionCard
                title='Cleaning'
                body='Our trained and experienced cleaners clean your apartment sparkling clean, so that it looks like
                        it has been renovated. Every corner, every edge is cleaned with the right cleaning equipment,
                        detergent and dishes. You can also choose whether you want to use an ecological cleaning agent.
                        We assure you that we will clean your apartment according to the apartment acceptance standard.
                        We will hand over the apartment in your presence.'
                imageUrl='http://kaktusumzug.ch/wp-content/uploads/2019/12/2.jpg'
                />
            <IntroductionCard
                title='move'
                body='Our trained and experienced cleaners clean your apartment sparkling clean, so that it looks like
                        it has been renovated. Every corner, every edge is cleaned with the right cleaning equipment,
                        detergent and dishes. You can also choose whether you want to use an ecological cleaning agent.
                        We assure you that we will clean your apartment according to the apartment acceptance standard.
                        We will hand over the apartment in your presence.'
                imageUrl='http://kaktusumzug.ch/wp-content/uploads/2019/12/1.jpg'
            />
            <IntroductionCard
                title='Disposal & clearance'
                body='Our trained and experienced cleaners clean your apartment sparkling clean, so that it looks like
                        it has been renovated. Every corner, every edge is cleaned with the right cleaning equipment,
                        detergent and dishes. You can also choose whether you want to use an ecological cleaning agent.
                        We assure you that we will clean your apartment according to the apartment acceptance standard.
                        We will hand over the apartment in your presence.'
                imageUrl='http://kaktusumzug.ch/wp-content/uploads/2019/12/3.jpg'
            />
            <IntroductionCard
                title='storage'
                body='Our trained and experienced cleaners clean your apartment sparkling clean, so that it looks like
                        it has been renovated. Every corner, every edge is cleaned with the right cleaning equipment,
                        detergent and dishes. You can also choose whether you want to use an ecological cleaning agent.
                        We assure you that we will clean your apartment according to the apartment acceptance standard.
                        We will hand over the apartment in your presence.'
                imageUrl='http://kaktusumzug.ch/wp-content/uploads/2019/12/6.jpg'
            />
        </Grid>
            </Container>
    )
}

export default Introduction;
