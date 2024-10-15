import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    messages: [
    ],
    name:null
};

export const messageSlice = createSlice({
    name: "message",
    initialState,
    reducers: {
        sendMessage: (state, action) => {
            const message = {
                id: Date.now(),
                message: action.payload,
                sentBy: "User",
                timestamp: new Date().toLocaleString() 
            };

            state.messages.push(message); 
        },
        receiveMessage: (state, action) => {
            const message = {
                id: Date.now(),
                message: action.payload, 
                sentBy: "Bot",
                timestamp: new Date().toLocaleString() 
            };
            state.messages.push(message); 
        },
        setUsername :(state,action) =>{
            state.name = action.payload
        },
        clearMessages:(state,action)=>{
            state.messages = []
        }
    }
});

export const { sendMessage, receiveMessage ,setUsername,clearMessages} = messageSlice.actions;


export default messageSlice.reducer;
