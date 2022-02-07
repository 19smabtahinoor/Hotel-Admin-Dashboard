import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import BookOnlineIcon from '@mui/icons-material/BookOnline';
import GroupIcon from '@mui/icons-material/Group';
import HolidayVillageIcon from '@mui/icons-material/HolidayVillage';
import MenuIcon from '@mui/icons-material/Menu';
import RoofingIcon from '@mui/icons-material/Roofing';
import { Avatar, List } from '@mui/material';
import MuiAppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import MuiDrawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { Outlet } from 'react-router-dom';
import SideBarMenu from './SideBarMenu';

const drawerWidth = 250;


const menu = [
    {
        id: 1,
        title: 'Hotels',
        icon: <HolidayVillageIcon />,
        link: "/hotels",
        subMenu: [
            {
                id: '1sub1',
                title: 'Add Hotel',
                icon: <HolidayVillageIcon />,
                link: "/hotels/addHotels",
            },
            {
                id: '1sub2',
                title: 'Update Hotel',
                icon: <HolidayVillageIcon />,
                link: "/hotels/updateHotels",
            }
        ]
    },
    {
        id: 4,
        title: 'Customers',
        icon: <GroupIcon />,
        link: "/customers",
        subMenu: [
            {
                id: '4sub1',
                title: 'Add Customer',
                icon: <HolidayVillageIcon />,
                link: "/customers/addCustomer",
            },
            {
                id: '4sub2',
                title: 'Update Customer',
                icon: <HolidayVillageIcon />,
                link: "/customers/updateCustomer",
            }
        ]
    },
    {
        id: 3,
        title: 'Rooms',
        icon: <RoofingIcon />,
        link: "/rooms",
        subMenu: [
            {
                id: '3sub1',
                title: 'Add Room',
                icon: <HolidayVillageIcon />,
                link: "/rooms/addRoom",
            },
            {
                id: '3sub2',
                title: 'Update Room',
                icon: <HolidayVillageIcon />,
                link: "/rooms/updateRoom",
            }
        ]
    },
    {
        id: 2,
        title:
            'Reservations',
        icon: <BookOnlineIcon />,
        link: "/reservations",
        subMenu: [
            {
                id: '2sub1',
                title: 'Add Reservation',
                icon: <HolidayVillageIcon />,
                link: "/reservations/addReservation",
            },
            {
                id: '2sub2',
                title: 'Update Reservation',
                icon: <HolidayVillageIcon />,
                link: "/reservations/updateReservation",
            }
        ]
    },
    {
        id: 5,
        title: 'Customers by Hotel',
        icon: <AssignmentIndIcon />,
        link: "/customersPerHotel",
    },

]

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(9)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        background: '#343A40',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

export default function Sidebar() {
    // const theme = useTheme();
    const [open, setOpen] = React.useState(true);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };



    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" sx={{
                background: '#fff', boxShadow: 'none'
            }} open={open}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{
                            marginRight: '36px',
                            ...(open && { display: 'none' }),
                            color: '#000'
                        }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div" sx={{ color: '#000' }}>
                        Logo
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer variant="permanent" open={open} >
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        <MenuIcon />
                        {/* {theme.direction === 'rtl' ? <MenuIcon /> : <MenuIcon />} */}
                    </IconButton>
                </DrawerHeader>

                <Divider />

                {/* user info  */}
                <Box sx={{ display: 'flex', alignItems: 'center', padding: 2 }}>
                    <Avatar alt="Remy Sharp" src="https://www.topbeautymagazines.com/wp-content/uploads/2020/06/Hairstyles-For-Square-Faces-Women-5.jpg" />
                    <Typography sx={{ marginLeft: 2 }}>Remy Sharp</Typography>
                </Box>

                <Divider />
                {/* menus  */}
                <List>
                    {menu?.map(item => <SideBarMenu item={item} />)}
                </List>
            </Drawer>
            <Box
                // component="main"
                sx={{ background: '#F4F4FA',  height: '100%', flexGrow: 1, p: 1, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                {/* <Toolbar /> */}
                <Outlet />
            </Box>
        </Box>
    );
}
