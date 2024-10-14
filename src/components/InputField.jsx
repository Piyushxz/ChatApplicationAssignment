import { TextField } from "@mui/material/TextField"
import InputAdornment from '@mui/material/InputAdornment';
import SendIcon from '@mui/icons-material/Send';

export default function InputField(){
    return(
        <TextField
        
        fullWidth
        variant="outlined"
        placeholder="Type your message..."
        sx={{
          bgcolor: 'white',
          borderRadius: '20px',
          input: { padding: '10px' }
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SendIcon />
            </InputAdornment>
          ),
        }}
      />
    )
}