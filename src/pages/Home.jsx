import React, { useState } from 'react';
import { Box, TextField, Typography } from '@mui/material';
import {Paper} from '@mui/material';
export default function Home() {
    const [setName,setUsername] = useState('')


    const handleNameChange=(e)=>{
        setUsername(e.target.value)
    }
  return (
    <Box
      sx={{
        height: '100vh', 
        width: '100%',
        backgroundColor: '#191919', 
        display: 'flex', 
        flexDirection:'column',
        alignItems: 'center', 
        justifyContent: 'center', 
      }}
    >
        <Typography
            sx={{
              fontFamily: 'Montserrat',
              fontWeight: 900,
              fontSize: '5rem',
              background: 'linear-gradient(to right, #2dd4bf, #3b82f6)', 
              WebkitBackgroundClip: 'text', 
              backgroundClip: 'text', 
              color: 'transparent', 
            }}
            variant="h6"
            noWrap
            component="div"
          >
            Whisper.com
          </Typography>
                <Box>
                    <TextField
                            onChange={handleNameChange}
                            placeholder="Enter"
                            sx={{
                            bgcolor: 'white',
                            borderRadius: '20px',
                            input: { padding: '10px' },
                            width:'350px'
                            }}
                    >

                    </TextField>
                </Box>
            <Paper
            sx={{
              padding: '10px',
              borderRadius: '15px',
              backgroundColor: '#888888',
              maxWidth: '70%',
              display: 'flex',
              alignItems: 'center',
              '&:hover': {
                backgroundColor: 'lightgrey', 
              },
              cursor: 'pointer', 
              fontFamily:"Montserrat",
              fontWeight:"700",
              marginTop:"20px"
            }}
          
          >
            Go to Chat
            </Paper>
          <Typography sx={{fontFamily: 'Montserrat',
              fontWeight: 900,
              fontSize: '1rem',
              color:'white',
              marginTop:"30px"
              }}>
                Chat Application created by Piyush
          </Typography>

    </Box>
  );
}
