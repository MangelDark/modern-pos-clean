import * as React from 'react';
import { styled, useTheme,alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Avatar from "@mui/material/Avatar";
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import Tooltip from "@mui/material/Tooltip";
import { useNavigate,Link,NavLink } from "react-router-dom";
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import FoodBankIcon from '@mui/icons-material/FoodBank';
import PersonIcon from '@mui/icons-material/Person';
const drawerWidth = 240;


const Caja = styled('div')(({theme})=>({
  position: 'relative',
  display:'flex',
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(5),
    width: '100%',
  },
  alignContent:'center',
  justifyContent:'center'

}));
const Search = styled('div')(({ theme }) => ({

backgroundColor: alpha(theme.palette.common.white, 0.15),
'&:hover': {
  backgroundColor: alpha(theme.palette.common.white, 0.25),
},
display:'flex',
alignContent:'end',
justifyContent:'end'

}));
const SearchIconWrapper = styled('div')(({ theme }) => ({
padding: theme.spacing(0, 2),
height: '100%',
position: 'absolute',
pointerEvents: 'none',
display: 'flex',
alignItems: 'center',
justifyContent: 'center',
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
color: 'inherit',
'& .MuiInputBase-input': {
  padding: theme.spacing(1, 1, 1, 0),
  // vertical padding + font size from searchIcon
  paddingLeft: `calc(1em + ${theme.spacing(0)})`,
  transition: theme.transitions.create('width'),
  width: '100%',
  [theme.breakpoints.up('md')]: {
    width: '50ch',
  },
},
}));

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
  width: `calc(${theme.spacing(6)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(6)} + 1px)`,
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

const NavLinks = styled(NavLink)(({ theme }) => ({
  textDecoration:"none",
  listStyle:"none",
  color:"gray"
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  background:'black',
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

const  Navbar = ({tdata,pageTitle}) => {

  
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const history = useNavigate();

  const logout= async () => {
    await fetch('http://localhost:8888/api/Auth/logout',{
      method:'POST',
      headers: {'Content-Type':'application/json'},
      credentials: 'include'
    }) 

    localStorage.removeItem('user')
    return  history('/login')
  }
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };



  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

 
  let activeStyle = {
    textDecoration: "none",
    backgroundColor:'black',
    color:'black',

  };


  return (
<>
                <AppBar position="fixed" open={open}>
                        <Toolbar variant="dense">
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            edge="start"
                            sx={{
                            marginRight: 5,
                            
                            ...(open && { display: 'none' }),
                            }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography
                            variant="title"
                            sx={{ display: { xs: 'none', sm: 'block' },width:'auto' }}
                        >
                           {pageTitle}
                        </Typography>
                        <Caja>
                        <Search>
                            <SearchIconWrapper>
                            <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase           
                            inputProps={{ 'aria-label': 'search' }}
                            />
                        </Search>
                        </Caja> 
                        <Box sx={{ flexGrow: 1  }} />
                        <Box sx={{ flexGrow: 1}}>
                            <Box sx={{ display: "flex" }}>
                            <Box sx={{ 
                                // display: "grid",
                                // gridtTemplateRows: 'repeat(2,0fr)',
                              
                                paddingRight: '5px'    
                                }}>
                                <Typography
                                variant="subtitle2"
                                display="block"
                                sx={{ alignSelf: "start",paddingTop:'5px'}}
                                >
                                Miguel Angel     
                                </Typography>
                                <Typography
                                variant="subtitle2"
                                display="block"
                                sx={{
                                    alignSelf: "end",     
                                }}
                                >
                                 masanchez@logicone.com.do
                                </Typography>
                            </Box>
                            <Tooltip title="Open settings">
                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 1 }}>
                                 <Avatar alt="user image"> 
                                    <PersonIcon />
                                 </Avatar>
                                </IconButton>
                            </Tooltip>
                            </Box>
                            <Menu
                            sx={{ mt: "45px" }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: "top",
                                horizontal: "right"
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "right"
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                            >
                            <MenuItem key={'logout'} onClick={logout}>
                                <Typography textAlign="center">Logout</Typography>
                                </MenuItem>
                            </Menu>
                        </Box>
                        </Toolbar>
                    
                    </AppBar>
                    <Drawer variant="permanent" open={open} >
                        <DrawerHeader>
                        <IconButton onClick={handleDrawerClose}>
                            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                        </IconButton>
                        </DrawerHeader>
                    
                        <List>
                        <NavLinks to="restaurant/pedidos"  
                                 style={({ isActive }) => isActive ? activeStyle : undefined}
                                 >
                        <ListItemButton
                            key={'Restaurante'}
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? 'initial' : 'center',
                                px: 2.5,
                            }}
                            >
                            <ListItemIcon
                                sx={{
                                minWidth: 0,
                                mr: open ? 3 : 'auto',
                                justifyContent: 'center',
                                }}
                            >
                              <RestaurantMenuIcon />
                            </ListItemIcon>
                            <ListItemText primary={'Pedidos'} sx={{ opacity: open ? 1 : 0 }} />
                        </ListItemButton>
                        </NavLinks>
                    
                        <NavLinks to="restaurant/ordenes"  
                                 style={({ isActive }) => isActive ? activeStyle : undefined}

                                  >
                        <ListItemButton
                            key={'cocina'}
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? 'initial' : 'center',
                                px: 2.5,
                            }}
                            >
                            <ListItemIcon
                                sx={{
                                minWidth: 0,
                                mr: open ? 3 : 'auto',
                                justifyContent: 'center',
                                }}
                            >
                              <FoodBankIcon />
                            </ListItemIcon>
                            <ListItemText primary={'Ordenes'} sx={{ opacity: open ? 1 : 0 }} />
                        </ListItemButton>
                        </NavLinks>
                        <Divider />
                        <NavLinks to="transaction" 
                                 style={({ isActive }) => isActive ? activeStyle : undefined} 
                                
                                 >
                        <ListItemButton
                            key={'Transation'}
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? 'initial' : 'center',
                                px: 2.5,
                            }}
                            >
                            <ListItemIcon
                                sx={{
                                minWidth: 0,
                                mr: open ? 3 : 'auto',
                                justifyContent: 'center',
                                }}
                            >
                              <PointOfSaleIcon  />
                            </ListItemIcon>
                            <ListItemText primary={'Transation'} sx={{ opacity: open ? 1 : 0 }} />
                        </ListItemButton>
                        </NavLinks>
                        </List>
                        <Divider />
                     
                    </Drawer>
                    {/* <DrawerHeader /> */}
                </>
                    

  );
}


export default Navbar;