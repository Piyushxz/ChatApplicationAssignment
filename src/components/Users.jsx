import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

export default function AlignItemsList() {
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="center">
        <ListItemAvatar>
          <Avatar alt="Piyush" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText

          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                sx={{ color: 'text.primary', display: 'inline' }}
              >
                Piyush
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider />

      
    </List>
  );
}
