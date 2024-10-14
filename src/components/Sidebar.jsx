import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import CssBaseline from '@mui/material/CssBaseline';
import AlignItemsList from './Users';
import Chatbox from './Chatbox';

const drawerWidth = 280; 

export default function PersistentDrawerLeft() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      
   
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar sx={{backgroundColor:"black"}}>
        <Typography
            sx={{
                zIndex: 1,
                mt: 1,
                mb: 2,
                pl: 2,
                fontFamily: 'Montserrat',
                fontWeight: 900,
                fontSize: '2.5rem',
                background: 'linear-gradient(to right, #2dd4bf, #3b82f6)', 
                WebkitBackgroundClip: 'text', 
                backgroundClip: 'text', 
                color: 'transparent', 
            }}
  variant="h6"
  noWrap
  component="div"
>
  Whisper
</Typography>

        </Toolbar>
      </AppBar>
      

      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          height:"100vh",
         
          zIndex: 10,
          [`& .MuiDrawer-paper`]: { 
            width: drawerWidth, 
            boxSizing: 'border-box', 
            mt: '-64px', 
          },
          
        }}
      >
        <Toolbar /> 
        <Box sx={{ overflow: 'auto' }}>
          <Typography 
            variant="h6" 
            
            sx={{mt: 0, p:2, fontFamily: 'Montserrat', fontWeight: '900',fontSize:"2.1rem" }}
          >
            Chats
          </Typography>
          <Divider />
          <List>
            <AlignItemsList />
          </List>
        </Box>
      </Drawer>
      

        <Chatbox></Chatbox>
    </Box>
  );
}
