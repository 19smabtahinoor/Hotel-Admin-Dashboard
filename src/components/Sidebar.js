import MenuIcon from '@mui/icons-material/Menu';
import { List } from '@mui/material';
import MuiAppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import MuiDrawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import { styled } from '@mui/material/styles';
import * as React from 'react';
import { ImBlog } from "react-icons/im";
import { Outlet } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import SideBarMenu from './SideBarMenu';

const drawerWidth = 250;


const menu = [
    {
        id: 1,
        title: 'All Blogs',
        icon: <ImBlog />,
        link: "/blogs",
        // subMenu: [
        //     {
        //         id: '1sub1',
        //         title: 'Add Blog',
        //         icon: <HolidayVillageIcon />,
        //         link: "/blogs/addblog",
        //     },
        //     {
        //         id: '1sub2',
        //         title: 'Update Blog',
        //         icon: <HolidayVillageIcon />,
        //         link: "/blogs/updateblog",
        //     }
        // ]
    }

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
    const { user, signOutUser } = useAuth();

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
                  
                        <div className='flex flex-row items-center justify-between w-full'>
                            <div className='flex items-center justify-between space-x-3'>
                                <img src="../../logo.jpg" width="70px" height="70px" alt="logo" />
                                <h1 className='text-3xl font-bold text-black'>Dashboard</h1>
                            </div>
                            <p className='text-white bg-green-700 w-24 rounded-full text-base py-2 text-center font-semibold cursor-pointer hover:bg-green-800 transition duration-200' onClick={() => signOutUser()}>Logout</p>
                        </div>
                  
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
                <div className='flex flex-col items-center justify-center py-8'>
                    <div className='flex flex-row justify-center items-center relative'>
                        <div className='w-24 h-24  rounded-full'>
                            <img src={user?.photoURL} className='w-full h-full rounded-full' alt={user?.displayName} />
                        </div>
                        <div className='absolute -mt-16 ml-24' >
                            <div className='bg-green-200 border border-green-600 rounded-full w-20 py-1'>
                                <span className='flex items-center justify-center text-green-800 font-semibold'> Admin</span>
                            </div>
                        </div>

                    </div>
                    <div className='flex flex-col items-center justify-center pt-2'>
                        <h2 className='font-bold text-xl'>{user?.displayName}</h2>
                        <p className='text-gray-600 text-sm'>{user?.email}</p>

                    </div>
                </div>
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
