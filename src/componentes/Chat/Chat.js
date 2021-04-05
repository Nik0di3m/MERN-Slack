import React, { useEffect, useState } from 'react'
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
import db from '../../firebase';
import { useParams } from 'react-router';




const Chat = () => {

    let { channelId } = useParams();

    const [channel, setChannel] = useState();

    const getChannel = () => {
        db.collection('rooms')
            .doc(channelId)
            .onSnapshot((snap) => {
                setChannel(snap.data())
            })
    }

    useEffect(() => {
        getChannel();
    }, [channelId])

    return (
        <ChatContainer>
            <ChatHeader>
                <ChatDescriptions>
                    <ChatRoom>
                        <h3># {channel.name}</h3>
                    </ChatRoom>
                    <ChatDesc>
                        {channel.desc}
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
