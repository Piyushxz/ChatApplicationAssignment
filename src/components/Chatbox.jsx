import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { List, ListItem, Paper, Typography, Box, TextField, InputAdornment, AppBar, Toolbar } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import InputField from "./InputField"
import Messages from './Messages';
import { receiveMessage } from '../features/messageSlice';

const drawerWidth = 280;

function Chatbox() {
  const name = localStorage.getItem("name")
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(receiveMessage(`Hey ${name},How are you?`))
  },[])
  return (
<Box
  component="main"
  sx={{
    flexGrow: 1,
    bgcolor: '#191919',
    p: { xs: 1, sm: 3 }, // Padding adjusts based on screen size
    width: { xs: '100%', md: `calc(100% - ${drawerWidth}px)` }, // Full width on small screens
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
  }}
>
  <Typography paragraph sx={{ color: 'white', fontSize: { xs: '0.875rem', md: '1rem' } }}>
    Welcome to the chat interface. This is where the chat window will be.
  </Typography>
  <Messages />
  <AppBar
    sx={{
      top: 'auto',
      bottom: 0,
      width: { xs: '100%', md: `calc(100% - ${drawerWidth}px)` }, // Full width on mobile, adjusted on desktop
      ml: { md: `${drawerWidth}px` },
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
