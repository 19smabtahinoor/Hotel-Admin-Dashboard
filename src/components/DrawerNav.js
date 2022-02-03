import { ExpandLess, ExpandMore } from '@mui/icons-material';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import BarChartIcon from '@mui/icons-material/BarChart';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupIcon from '@mui/icons-material/Group';
import LocalActivityIcon from '@mui/icons-material/LocalActivity';
import LockIcon from '@mui/icons-material/Lock';
import MenuIcon from '@mui/icons-material/Menu';
import PeopleIcon from '@mui/icons-material/People';
import PublicIcon from '@mui/icons-material/Public';
import RemoveIcon from '@mui/icons-material/Remove';
import { Collapse, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import * as React from 'react';
import { NavLink, Outlet } from "react-router-dom";
// import { NavLink, Route, Switch, useRouteMatch } from 'react-router-dom';

const drawerWidth = 250;

const menu = [
    { id: 1, title: 'HR Dashboard', icon: <DashboardIcon />, link: "/dashboard" },
    { id: 2, title: 'Holidays', icon: <MenuIcon />, link: "/holidays" },
    { id: 3, title: 'Events', icon: <CalendarTodayIcon />, link: "/events" },
    { id: 4, title: 'Activites', icon: <LocalActivityIcon />, link: "/activites" },
    { id: 5, title: 'HR Social', icon: <PublicIcon />, link: "/social" },
    // { id: 6, title: 'Employees', icon: <GroupIcon />, link: "/employees"},
    { id: 7, title: 'Accounts', icon: <AssignmentIndIcon />, link: "/accounts" },
    { id: 8, title: 'Report', icon: <BarChartIcon />, link: "/report" },
    { id: 9, title: 'Users', icon: <PeopleIcon />, link: "/users" },
    { id: 10, title: 'Authentication', icon: <LockIcon />, link: "/authentication" },
]

// const employess = [
//   { id: 1, title: 'All Employees', icon: <RemoveIcon />, link: "/employees" },
//   { id: 2, title: 'Leave Request', icon: <RemoveIcon />, link: "/request" },
//   { id: 3, title: 'Attendance', icon: <RemoveIcon />, link: "/attendance" },
//   { id: 4, title: 'Department', icon: <RemoveIcon />, link: "/department" },
// ]

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const DrawerNav = (props) => {

    // let { path, url } = useRouteMatch();

    // const [mobileOpen, setMobileOpen] = React.useState(false);

    // const handleDrawerToggle = () => {
    //   setMobileOpen(!mobileOpen);
    // };

    const [value, setValue] = React.useState(0);
    const [open, setOpen] = React.useState(true);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    const handleClick = () => {
        setOpen(!open);
    };

    const drawer = (
        <div style={{ height: '100%' }}>
            <Grid container sx={{ padding: 2 }} spacing={1}>
                <Grid item xs={5} >
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        height="70"
                        width="70"
                        sx={{ borderRadius: '4px', width: "80px" }}
                        image="https://media.istockphoto.com/photos/photo-of-attractive-charming-lady-cute-bobbed-hairdo-arms-crossed-picture-id1281083606?b=1&k=20&m=1281083606&s=170667a&w=0&h=WzMW1rjjuoOdO1WLcQyDbgB-a94N8XN2IayjohebpHg="
                    />
                </Grid>
                <Grid item xs={7} sx={{ marginTop: '9px' }}>
                    <Typography sx={{ fontSize: '13px', color: '#6b7280' }}>Welcome,</Typography>
                    <Typography sx={{ color: '#374151', fontWeight: 'bold' }}>Jessica Doe</Typography>
                </Grid>
            </Grid>
            <Divider />

            <Grid container sx={{ padding: 2 }} spacing={2}>
                <Grid item xs={4}>
                    <Typography sx={{ color: '#374151', fontWeight: 'bold', }}>5+</Typography>
                    <Typography sx={{ fontSize: '13px', color: '#6b7280' }}>Experience</Typography>
                </Grid>
                <Grid item xs={4}>
                    <Typography sx={{ color: '#374151', fontWeight: 'bold', }}>400+</Typography>
                    <Typography sx={{ fontSize: '13px', color: '#6b7280' }}>Employees</Typography>        </Grid>
                <Grid item xs={4}>
                    <Typography sx={{ color: '#374151', fontWeight: 'bold', }}>80+</Typography>
                    <Typography sx={{ fontSize: '13px', color: '#6b7280' }}>Clients</Typography>
                </Grid>
            </Grid>

            {/* tab  */}
            <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label="HR" {...a11yProps(0)} />
                        <Tab label="Project" {...a11yProps(1)} />
                    </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                    <div sx={{ display: 'flex' }}>
                        <List>
                            {menu?.map(item => (
                                <NavLink key={item.id} to={item.link} className="navtext" activeClassName="active-nav">
                                    <ListItem button>
                                        <ListItemIcon sx={{ color: '#f68c1f' }}>
                                            {item.icon}
                                        </ListItemIcon>
                                        <ListItemText primary={item.title} sx={{ color: '#4b5563' }} />
                                    </ListItem>
                                </NavLink>
                            ))}

                            <ListItemButton onClick={handleClick}>
                                <ListItemIcon sx={{ color: '#f68c1f' }}>
                                    <GroupIcon />
                                </ListItemIcon>
                                <ListItemText primary="Employees" sx={{ color: '#4b5563' }} />
                                {open ? <ExpandLess sx={{ color: '#4b5563' }} /> : <ExpandMore sx={{ color: '#4b5563' }} />}
                            </ListItemButton>
                            <Collapse in={open} timeout="auto" unmountOnExit sx={{ paddingBottom: 2 }}>

                                <NavLink to="/employees" className="navtext" activeClassName="active-nav">
                                    <ListItem button>
                                        <ListItemIcon sx={{ color: '#f68c1f' }}>
                                            <RemoveIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="All Employees" sx={{ color: '#4b5563' }} />
                                    </ListItem>
                                </NavLink>
                                <NavLink to="/attendance" className="navtext" activeClassName="active-nav">
                                    <ListItem button>
                                        <ListItemIcon sx={{ color: '#f68c1f' }}>
                                            <RemoveIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Attendance" sx={{ color: '#4b5563' }} />
                                    </ListItem>
                                </NavLink>
                            </Collapse>


                        </List>
                    </div>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <div sx={{ display: 'flex' }}>
                        <List>
                            {menu?.slice(4, 10)?.map(item => (
                                <NavLink key={item.id} to={item.link} className="navtext" activeClassName="active-nav">
                                    <ListItem button>
                                        <ListItemIcon sx={{ color: '#f68c1f' }}>
                                            {item.icon}
                                        </ListItemIcon>
                                        <ListItemText primary={item.title} sx={{ color: '#4b5563' }} />
                                    </ListItem>
                                </NavLink>
                            ))}
                        </List>
                    </div>
                </TabPanel>
            </Box>
        </div>
    );

    return (
        <div>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <Box
                    component="nav"
                    sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                >

                    <Drawer
                        variant="permanent"
                        sx={{
                            display: { xs: 'none', sm: 'block' },
                            '& .MuiDrawer-paper': { marginTop: "65px", boxSizing: 'border-box', width: drawerWidth },
                            m: 5
                        }}
                        open
                    >
                        {drawer}
                    </Drawer>
                </Box>
                <Box
                    component="main"
                    sx={{ background: '#F4F4FA', height: '100%', flexGrow: 1, p: 1, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
                >
                    {/* <Toolbar /> */}
                    <Outlet />
                </Box>
            </Box>
        </div>
    );
}
export default DrawerNav;