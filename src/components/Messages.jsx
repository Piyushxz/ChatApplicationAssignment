import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { List, ListItem, Paper, Typography, Box } from '@mui/material';

export default function Messages() {
    const messages = useSelector((state) => state.message.messages);
    const endOfMessagesRef = useRef(null); 

    useEffect(() => {
    
        endOfMessagesRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]); 
    return (
<Box
  sx={{
    flexGrow: 1,
    overflowY: 'auto',
    mb: 2,
    padding: '10px',
    maxHeight: { xs: '65vh', md: '80vh' }, // Adjust height on smaller screens
  }}
>
  <List>
    {messages.map((msg) => (
      <ListItem
        key={msg.id}
        sx={{
          justifyContent: msg.sentBy === 'User' ? 'flex-end' : 'flex-start',
        }}
      >
        <Paper
          sx={{
            padding: '10px',
            borderRadius: '15px',
            backgroundColor: msg.sentBy === 'User' ? '#888888' : '#E0E0E0',
            color: msg.sentBy === 'User' ? '#fff' : '#000',
            maxWidth: { xs: '90%', md: '70%' }, // Adjust width for smaller screens
            textAlign: msg.sentBy === 'User' ? 'right' : 'left',
            fontSize: { xs: '0.75rem', md: '1rem' }, // Responsive font size
          }}
        >
          <Typography sx={{ fontFamily: "Montserrat" }}>{msg.message}</Typography>
          <Typography variant="caption" sx={{ color: msg.sentBy === 'User' ? 'black' : 'gray' }}>
            {new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </Typography>
        </Paper>
      </ListItem>
    ))}
    <div ref={endOfMessagesRef} />
  </List>
</Box>

    );
}
