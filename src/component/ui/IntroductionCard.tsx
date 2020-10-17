import React, {FC} from "react";
import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    createStyles,
    Grid,
    Theme,
    Typography
} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
        },
        details: {
            display: 'flex',
            flexDirection: 'column',
        },
        content: {
            flex: '1 0 auto',
        },
        cover: {
            width: '100%',
        },
        controls: {
            display: 'flex',
            alignItems: 'center',
            paddingLeft: theme.spacing(1),
            paddingBottom: theme.spacing(1),
        },
    }),
);

interface IntroductionCardProps {
    title: string;
    body: string;
    imageUrl: string;
}

const IntroductionCard: FC<IntroductionCardProps> = ({title, body, imageUrl}) => {
    const classes = useStyles();

    return (
        <Grid item xs={12}>
            <Card className={classes.root}>
                <div className={classes.details}>
                    <CardContent className={classes.content}>
                        <Typography component="h5" variant="h5">
                            {title}
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            {body}
                        </Typography>
                        <Button variant="contained" style={{marginTop: '2%'}} color="secondary">
                            Submit Request
                        </Button>
                    </CardContent>
                </div>
                <CardMedia
                    className={classes.cover}
                    image={imageUrl}
                    title={title}
                />
            </Card>
        </Grid>
    );
}

export default IntroductionCard;
