import  TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment';
import SendIcon from '@mui/icons-material/Send';
import { useState } from "react";
import { useDispatch } from 'react-redux';
import {sendMessage} from "../features/messageSlice"
import {receiveMessage} from "../features/messageSlice"
export default function InputField(){

    const dispatch = useDispatch()
    const [inputValue,setInputValue]= useState()

    const handleInputChange = (e) =>{
        setInputValue(e.target.value)
        
    }

    const handleSendMessage = () =>{

        if(inputValue.length ==0){
          return
        }
        dispatch(sendMessage(inputValue))
        setInputValue("")

        setTimeout(()=>dispatch(receiveMessage("Piyush here ,This is an automated message")),2000)
    }
    

    const handleEnterButtonClick = (e) =>{
      if(e.key === "Enter"){
        handleSendMessage()
      }
    }
    return(
        <TextField
        onChange = {handleInputChange}
        onKeyUp={handleEnterButtonClick}
        value={inputValue}
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
              <SendIcon sx={{cursor:'pointer'}}onClick={handleSendMessage}/>
            </InputAdornment>
          ),
        }}
      />
    )
}