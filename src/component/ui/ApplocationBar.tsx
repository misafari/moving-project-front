import React, { FC } from "react";
import {AppBar, Toolbar, createStyles, Theme, IconButton} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import InstagramIcon from '@material-ui/icons/Instagram';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import TelegramIcon from '@material-ui/icons/Telegram';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        iconStyle: {
            color: 'white'
        }
    }),
);

const ApplicationBar: FC = () => {
    const classes = useStyles();

    return(
        <AppBar position="static">
            <Toolbar>
                <IconButton aria-label="OurInstagram">
                    <InstagramIcon className={classes.iconStyle}/>
                </IconButton>
                <IconButton aria-label="OurInstagram">
                    <WhatsAppIcon className={classes.iconStyle}/>
                </IconButton>
                <IconButton aria-label="OurInstagram">
                    <TelegramIcon className={classes.iconStyle}/>
                </IconButton>
                <IconButton aria-label="OurInstagram">
                    <TwitterIcon className={classes.iconStyle}/>
                </IconButton>
                <IconButton aria-label="OurInstagram">
                    <FacebookIcon className={classes.iconStyle}/>
                </IconButton>
                <IconButton aria-label="OurInstagram">
                    <YouTubeIcon className={classes.iconStyle}/>
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}

export default ApplicationBar;
