import React, {FC} from "react";
import Introduction from "./Introduction";
import {createStyles, Theme} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import HowWeWork from "./HowWeWork";
import CustomerReview from "./CustomerReview";
import WeAreBest from "./WeAreBest";
import CompanyName from "./CompanyName";
import {SpeedDial, SpeedDialAction, SpeedDialIcon} from "@material-ui/lab";
import EmojiTransportationIcon from '@material-ui/icons/EmojiTransportation';
import EditIcon from '@material-ui/icons/Edit';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            marginBottom: theme.spacing(8)
        },
        extendedIcon: {
            marginRight: theme.spacing(1),
            margin: 0,
            top: 'auto',
            right: 20,
            bottom: 30,
            left: 'auto',
            position: 'fixed',
            zIndex: 2000,
            height: 380,
            transform: 'translateZ(0px)',
            flexGrow: 1,
        },
        speedDial: {
            position: 'absolute',
            bottom: theme.spacing(2),
            right: theme.spacing(2),
        },
    }),
);

const actions = [
    {icon: <EditIcon/>, name: 'Moving'},
    {icon: <EditIcon/>, name: 'Cleaning'},
    {icon: <EditIcon/>, name: 'Despise'},
];

const MainContent: FC = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState<boolean>(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <div className={classes.root}>
                <div className={classes.extendedIcon}>
                    <SpeedDial
                        ariaLabel="Submit a Request"
                        className={classes.speedDial}
                        icon={<SpeedDialIcon openIcon={<EmojiTransportationIcon/>}/>}
                        onClose={handleClose}
                        onOpen={handleOpen}
                        open={open}
                    >
                        {actions.map((action) => (
                            <SpeedDialAction
                                key={action.name}
                                icon={action.icon}
                                tooltipTitle={action.name}
                                tooltipOpen
                                onClick={handleClose}
                                title={action.name}/>
                        ))}
                    </SpeedDial>
                </div>
                <CompanyName/>
                <Introduction/>
                <HowWeWork/>
                <WeAreBest/>
                <CustomerReview/>
            </div>
            {/*<div className={classes.root}>*/}
            {/*    /!*<Fab color="primary" aria-label="add" variant="extended" className={classes.extendedIcon}>*!/*/}
            {/*    /!*    <EmojiTransportationIcon/>*!/*/}
            {/*    /!*    Submit Request*!/*/}
            {/*    /!*</Fab>*!/*/}
            {/*    <CompanyName/>*/}
            {/*    <Introduction/>*/}
            {/*    <HowWeWork/>*/}
            {/*    <WeAreBest/>*/}
            {/*    <CustomerReview/>*/}
            {/*</div>*/}
        </>
    )
}
export default MainContent;
