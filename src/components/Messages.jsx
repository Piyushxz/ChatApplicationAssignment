import { List, ListItem, Paper } from '@mui/material';
import { useSelector } from 'react-redux';
import Box from '@mui/material/Box';


export default function Messages(){

    const messages = useSelector((state) => state.message.messages);
    return(
        <Box
        sx={{
          flexGrow: 1,
          overflowY: 'auto',
          mb: 2,
          padding: '10px',
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
                  backgroundColor: msg.sentBy === 'User' ? '#2196F3' : '#E0E0E0',
                  color: msg.sentBy === 'User' ? '#fff' : '#000',
                  maxWidth: '70%',
                  textAlign: msg.sentBy === 'User' ? 'right' : 'left',
                }}
              >
                <Typography>{msg.message}</Typography>
                <Typography variant="caption" sx={{ color: 'gray' }}>
                  {new Date(msg.timestamp).toLocaleTimeString()}
                </Typography>
              </Paper>
            </ListItem>
          ))}
        </List>
      </Box>
    )
}