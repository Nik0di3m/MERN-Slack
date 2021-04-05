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
import firebase from 'firebase'



const Chat = ({ user }) => {

    let { channelId } = useParams();

    const [channel, setChannel] = useState([]);

    const [messages, setMesseges] = useState([]);

    const [input, setInput] = useState('');

    const getMessages = () => {
        db.collection('rooms')
            .doc(channelId)
            .collection('messages')
            .orderBy('timestamp', 'asc')
            .onSnapshot((snap) => {

                let messages = snap.docs.map((doc) => doc.data());

                setMesseges(messages)

            })
    }

    const getChannel = () => {
        db.collection('rooms')
            .doc(channelId)
            .onSnapshot((snap) => {
                setChannel(snap.data())
            })
    }

    const sendMessage = (text) => {
        if (channelId) {
            let payload = {
                text: text,
                timestamp: firebase.firestore.Timestamp.now(),
                user: user.name,
                userImage: user.photo,
            }
            db.collection('rooms').doc(channelId).collection('messages').add(payload)
        }
    }

    const submit = (e) => {
        e.preventDefault();

        if (!input) return;
        sendMessage(input);
        setInput('')



    }

    useEffect(() => {
        getChannel();
        getMessages();

    }, [channelId])

    return (
        <ChatContainer>
            <ChatHeader>
                <ChatDescriptions>
                    <ChatRoom>
                        <h3># {channel.name} </h3>
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
            <Message messages={messages} />
            <MessageSenderContainer>
                <MessageSender>
                    <form>
                        <SendMessage
                            type="submit"
                            onClick={submit}
                        >
                            <SendIcon />
                        </SendMessage>
                        <input type="text" placeholder="Message..." onChange={(e) => setInput(e.target.value)} value={input} />
                    </form>
                </MessageSender>
            </MessageSenderContainer>
        </ChatContainer>
    )
}

export default Chat;
