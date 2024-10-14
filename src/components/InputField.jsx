import  TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment';
import SendIcon from '@mui/icons-material/Send';
import { useState } from "react";
export default function InputField(){

    const [inputValue,setInputValue]= useState()

    const handleInputChange = (e) =>{
        setInputValue(e.target.value)
    }

    const handleSendMessage = () =>{
        console.log(inputValue)
    }
    return(
        <TextField
        onChange = {handleInputChange}
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
              <SendIcon onClick={handleSendMessage}/>
            </InputAdornment>
          ),
        }}
      />
    )
}