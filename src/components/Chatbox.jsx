import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { List, ListItem, Paper, Typography, Box, TextField, InputAdornment, AppBar, Toolbar } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import InputField from "./InputField"
import Messages from './Messages';
const drawerWidth = 280;

function Chatbox() {
  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        bgcolor: '#191919',
        p: 3,
        width: `calc(100% - ${drawerWidth}px)`,
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Typography paragraph sx={{ color: 'white' }}>
        Welcome to the chat interface. This is where the chat window will be.
      </Typography>
      <Messages />
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
          <InputField />
        </Toolbar>
      </AppBar>
    </Box>
  );
}





export default Chatbox;
