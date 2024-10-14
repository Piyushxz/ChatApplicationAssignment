import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SendIcon from '@mui/icons-material/Send';
import InputField from './InputField';

const drawerWidth = 280;

export default function Chatbox() {
  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        bgcolor: '#191919',
        p: 3,
        width: `calc(100% - ${drawerWidth}px)`,
        height: '100vh',
        position: 'relative'
      }}
    >
      <Toolbar />

      <Typography paragraph sx={{ color: 'white' }}>
        Welcome to the chat interface. This is where the chat window will be.
      </Typography>

      {/* AppBar positioned at the bottom */}
      <AppBar
        sx={{
          top: 'auto',
          bottom: 0,
          width: `calc(100% - ${drawerWidth}px)`,
          ml: `${drawerWidth}px`,
          bgcolor: 'black',
        }}
        position="fixed"
      >
        <Toolbar>
         
        <InputField/>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
