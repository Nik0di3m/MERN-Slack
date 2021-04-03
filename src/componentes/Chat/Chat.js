import React from 'react'
import InfoIcon from '@material-ui/icons/Info';
import SendIcon from '@material-ui/icons/Send';
import {
    ChatContainer,
    ChatDescriptions,
    ChatHeader,
    ChatRoom,
    ChatDesc,
    ChatInfo,
    ChatInfoIcon,
    MessageSenderContainer,
    MessageSender,
    SendMessage,

} from './ChatElements';
import Message from './Message/Message';




const Chat = ({ channel }) => {
    return (
        <ChatContainer>
            <ChatHeader>
                <ChatDescriptions>
                    <ChatRoom>
                        <h3># Channel 1</h3>
                    </ChatRoom>
                    <ChatDesc>
                        Make a 100k$ in a year!
                    </ChatDesc>
                </ChatDescriptions>
                <ChatInfo>
                    Deatails
                    <ChatInfoIcon>
                        <InfoIcon />
                    </ChatInfoIcon>
                </ChatInfo>
            </ChatHeader>
            <Message />
            <MessageSenderContainer>
                <MessageSender>
                    <SendMessage>
                        <SendIcon />
                    </SendMessage>
                    <input type="text" placeholder="#Channel 1..." />
                </MessageSender>
            </MessageSenderContainer>
        </ChatContainer>
    )
}

export default Chat;
