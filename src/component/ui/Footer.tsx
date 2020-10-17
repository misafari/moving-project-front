import React, {FC} from "react";
import {
    AppBar,
    Container,
    Toolbar, Typography
} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PhoneIcon from '@material-ui/icons/Phone';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import BusinessIcon from '@material-ui/icons/Business';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: 'white',
        color: 'black',
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    toolbar: {
        minHeight: 128,
        alignItems: 'flex-start',
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(2),
    },
    appBar: {
        top: 'auto',
        bottom: 0,
    },
    text: {
        color: 'white'
    }
}));

const Footer: FC = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.appBar}>
                <Toolbar className={classes.toolbar}>
                    <Container maxWidth='md'>
                        <Typography className={classes.text} variant="body1" color="textSecondary" component="h4">
                            <PhoneIcon/> Landline: 031 304 19 49
                        </Typography>
                        <Typography className={classes.text} variant="body1" color="textSecondary" component="p">
                           <PhoneAndroidIcon/> Mobile: 078 663 72 54
                        </Typography>

                        <Typography className={classes.text} variant="body1" color="textSecondary" component="p">
                            <MailOutlineIcon/> Email: kaktusumzug@gmx.ch
                        </Typography>
                        <Typography className={classes.text} variant="body1" color="textSecondary" component="p">
                            <BusinessIcon/> Address: Egelgasse 54
                        </Typography>
                    </Container>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Footer;
