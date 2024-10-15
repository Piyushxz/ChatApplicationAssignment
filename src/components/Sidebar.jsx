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
import { Paper, SvgIcon } from '@mui/material';

const drawerWidth = 280; 

export default function PersistentDrawerLeft() {
  const handleLogout = () => {
 
    console.log("Logout clicked");
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar sx={{ backgroundColor: "black", display: 'flex', justifyContent: 'space-between' }}>
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

          <Paper
            sx={{
              padding: '10px',
              borderRadius: '15px',
              backgroundColor: '#888888',
              maxWidth: '70%',
              display: 'flex',
              alignItems: 'center',
              '&:hover': {
                backgroundColor: 'lightgrey', // Change background color on hover
              },
              cursor: 'pointer', // Change cursor to pointer
            }}
            onClick={handleLogout}
          >
            <SvgIcon>
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#0A1128">
                <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h280v80H200Zm440-160-55-58 102-102H360v-80h327L585-622l55-58 200 200-200 200Z"/>
              </svg>
            </SvgIcon>
            <Typography sx={{ ml: 1 }}>
              Logout
            </Typography>
          </Paper>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          height: "100vh",
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
            sx={{ mt: 0, p: 2, fontFamily: 'Montserrat', fontWeight: '900', fontSize: "2.1rem" }}
          >
            Chats
          </Typography>
          <Divider />
          <List>
            <AlignItemsList />
          </List>
        </Box>
      </Drawer>

      <Chatbox />
    </Box>
  );
}
