import AddIcon from '@mui/icons-material/Add';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import EditIcon from '@mui/icons-material/Edit';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Collapse, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';
function SideBarMenu({ item }) {
    const [subMenuOpen, setSubMenuOpen] = React.useState(false);

    const handleClick = () => {
        setSubMenuOpen(!subMenuOpen);
    };
    return (
        <div>

            {
                item?.subMenu ? (
                    <>
                        <NavLink key={item.id} to={item.link} className={({ isActive }) => isActive ? ' active-nav ' : 'navtext'}>
                            <ListItemButton onClick={handleClick}>
                                <ListItemIcon sx={{ color: '#27895D' }}>
                                    {item.icon}
                                </ListItemIcon>
                                <ListItemText primary={item.title} sx={{ color: '#4b5563' }} />
                                {item?.subMenu && subMenuOpen ? <KeyboardArrowDownIcon sx={{ color: '#4b5563' }} /> : <ChevronRightIcon sx={{ color: '#4b5563' }} />}
                            </ListItemButton>
                        </NavLink>

                        <Collapse in={subMenuOpen} timeout="auto" unmountOnExit sx={{ paddingBottom: 2 }}>

                            {item?.subMenu?.map(item => (
                                <>
                                    <NavLink key={item.id} to={item.link} className={({ isActive }) => isActive ? ' active-nav ' : 'navtext'}>
                                        <ListItem button>
                                            <ListItemIcon sx={{ color: '#27895D' }}>
                                                {item?.title?.startsWith("Add") ? (
                                                    <AddIcon />
                                                ) : (
                                                    <EditIcon />
                                                )}

                                            </ListItemIcon>
                                            <ListItemText primary={item?.title} sx={{ color: '#4b5563' }} />
                                        </ListItem>
                                    </NavLink>
                                </>
                            ))}
                        </Collapse>
                    </>
                ) : (
                    <>
                        <NavLink key={item.id} to={item.link} className="navtext" activeClassName="active-nav">
                            <ListItem button>
                                <ListItemIcon sx={{ color: '#27895D' }}>
                                    {item.icon}
                                </ListItemIcon>
                                <ListItemText primary={item.title} sx={{ color: '#4b5563' }} />
                            </ListItem>
                        </NavLink>
                    </>
                )
            }



        </div>
    );
}

export default SideBarMenu;