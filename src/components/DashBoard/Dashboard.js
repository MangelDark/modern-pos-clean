import React from 'react'
import { styled, useTheme,alpha } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Box } from '@mui/material';

import Navbar from '../Navbar/Navbar'
import InnerContent from '../../config/Auth/InnerContent';

const Dashboard = ({pageTitle}) => {

    const theme = useTheme();
    // initializeIcons();
  return (
    <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <Navbar pageTitle={pageTitle}/>
        <Box component="main" sx={{p:2,backgroundColor:'#F1F3F5',minHeight: '100vh' ,width:'100%' }}>
        <DrawerHeader/>
        <InnerContent />
        </Box>
    </Box>
  )
}


const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  }));

export default Dashboard