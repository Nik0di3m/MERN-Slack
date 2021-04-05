import React from 'react'
import { Avatar } from '@material-ui/core';
import { ChatMessage, ChatMessageContainer, ChatText, MessageContainer, MessageInfo, MessageInfoContainer, TimeStamps, UserName } from './MessageElements';

const Message = ({ messages }) => {
    return (
        <ChatMessageContainer >
            {messages.map((item, index) => (
                <ChatMessage>
                    <MessageInfoContainer>
                        <Avatar className="avatar" src={item.userImage} style={{ height: "50px", width: "50px" }} />
                        <MessageInfo>
                            <UserName>
                                <h3>{item.user}</h3>
                            </UserName>
                            <TimeStamps>
                                <p>{new Date(item.timestamp.toDate()).toUTCString()}</p>
                            </TimeStamps>
                        </MessageInfo>
                    </MessageInfoContainer>
                    <MessageContainer>
                        <ChatText>
                            {item.text}
                        </ChatText>
                    </MessageContainer>


                </ChatMessage>
            ))}

        </ChatMessageContainer >
    )
}

export default Message;
