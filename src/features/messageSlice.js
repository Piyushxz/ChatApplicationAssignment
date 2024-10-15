import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    messages: [
        { id: 1, message: "Hey", sentBy: "User", timestamp: new Date().toLocaleString() },
        { id: 2, message: "Hey Bot here", sentBy: "Bot", timestamp: new Date().toLocaleString() }
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
        }
    }
});

export const { sendMessage, receiveMessage } = messageSlice.actions;


export default messageSlice.reducer;
