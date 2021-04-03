import React from 'react'
import { Avatar } from '@material-ui/core';
import { Channel1 } from '../../../Data/ChatData';
import { ChatMessage, ChatMessageContainer, ChatText, MessageContainer, MessageInfo, MessageInfoContainer, TimeStamps, UserName } from './MessageElements';

const Message = () => {
    return (
        <ChatMessageContainer>
            {
                Channel1.map((item) => (
                    <ChatMessage>
                        <MessageInfoContainer>
                            <Avatar className="avatar" src={item.avatar} style={{ height: "50px", width: "50px" }} />
                            <MessageInfo>
                                <UserName>
                                    <h3>{item.user}</h3>
                                </UserName>
                                <TimeStamps>
                                    <p>{item.timestamp}</p>
                                </TimeStamps>
                            </MessageInfo>
                        </MessageInfoContainer>
                        <MessageContainer>
                            <ChatText>
                                {item.message}
                            </ChatText>
                        </MessageContainer>


                    </ChatMessage>
                ))
            }
        </ChatMessageContainer>
    )
}

export default Message;
