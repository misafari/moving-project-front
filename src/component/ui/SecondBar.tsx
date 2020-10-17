import React, {FC} from "react";
import {
    AppBar,
    Box, Button,
    Drawer,
    Grid,
    IconButton,
    List,
    ListItem,
    ListItemIcon,
    ListItemText, Menu, MenuItem,
    Toolbar, Typography
} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import MenuIcon from '@material-ui/icons/Menu';
import InfoIcon from '@material-ui/icons/Info';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import EmojiTransportationIcon from '@material-ui/icons/EmojiTransportation';

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
    menuList: {
        marginTop: theme.spacing(5),
        paddingLeft: '0',
        display: 'flex',
        flexDirection: 'row',
        padding: 0,
    },
    menuItem: {
        minWidth: 'fit-content',
        paddingLeft: '73px',
        fontSize: 'xx-large'
    },
    list: {
        width: 250,
    },
    popupMenu: {
        marginTop: theme.spacing(4),
        width: '800px'
    }
}));

const SecondBar: FC = () => {
    const classes = useStyles();
    const [sidebarState, setSidebarState] = React.useState<boolean>(false);
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent,) => {
        if (
            event.type === 'keydown' &&
            ((event as React.KeyboardEvent).key === 'Tab' ||
                (event as React.KeyboardEvent).key === 'Shift')
        ) return;

        setSidebarState(open)
    };

    const list = () => (
        <div
            className={classes.list}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <List>
                <ListItem button>
                    <ListItemIcon><InfoIcon/></ListItemIcon>
                    <ListItemText primary='About Us' />
                </ListItem>
                <ListItem button>
                    <ListItemIcon><EmojiTransportationIcon/></ListItemIcon>
                    <ListItemText primary='Services'/>
                </ListItem>
                <ListItem button>
                    <ListItemIcon><ContactPhoneIcon/></ListItemIcon>
                    <ListItemText primary='Contact'/>
                </ListItem>
            </List>
        </div>
    );

    return (
        <div>
            <AppBar position="static" className={classes.root}>
                <Toolbar className={classes.toolbar}>
                    {/*Desktop*/}
                    <Box display={{xs: 'none', sm: 'block'}}>
                        <Grid container spacing={0}>
                            <Grid item xs={12} lg={6}>
                                <img style={{marginTop: '6%', marginLeft: '4%'}}
                                     src='http://kaktusumzug.ch/wp-content/uploads/2019/04/LOGO250-1.png' alt='logo'/>
                            </Grid>
                            <Grid item xs={12} lg={6}>
                                <List className={classes.menuList}>
                                    <ListItem className={classes.menuItem}>
                                        <Button>
                                            <Typography variant='h6' component='span'>
                                                About Us
                                            </Typography>
                                        </Button>
                                    </ListItem>
                                    <ListItem className={classes.menuItem}>
                                    <Button aria-controls="simple-menu" aria-haspopup="true"
                                            onMouseEnter={handleClick}
                                            onClick={handleClick}
                                    >
                                        <Typography variant='h6' component='span'>
                                            Services
                                        </Typography>
                                    </Button>
                                    <Menu
                                        className={classes.popupMenu}
                                        id="simple-menu"
                                        anchorEl={anchorEl}
                                        keepMounted
                                        open={Boolean(anchorEl)}
                                        onClose={handleClose}
                                    >
                                        <MenuItem onClick={handleClose}>Moving</MenuItem>
                                        <MenuItem onClick={handleClose}>Clean</MenuItem>
                                        <MenuItem onClick={handleClose}>Dispose</MenuItem>
                                    </Menu>
                                    </ListItem>
                                    <ListItem className={classes.menuItem}>
                                        <Button>
                                            <Typography variant='h6' component='span'>
                                                Contact
                                            </Typography>
                                        </Button>
                                    </ListItem>
                                </List>
                            </Grid>
                        </Grid>
                    </Box>


                    {/*Mobile*/}
                    <Box display={{xs: 'block', sm: 'none'}}>
                        <IconButton
                            onClick={toggleDrawer(true)}
                            edge="start"
                            className={classes.menuButton}
                            color="inherit"
                            aria-label="menu">
                            <MenuIcon/>
                        </IconButton>
                        <Drawer anchor='left' open={sidebarState} onClose={toggleDrawer(false)}>
                            {list()}
                        </Drawer>
                        <img style={{marginTop: '6%'}}
                             src='http://kaktusumzug.ch/wp-content/uploads/2019/04/LOGO250-1.png' alt='logo'/>
                    </Box>
                </Toolbar>
            </AppBar>
            {/*<MainContent/>*/}
        </div>
    )
}

export default SecondBar;
