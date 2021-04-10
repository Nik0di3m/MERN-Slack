import React, { useState, useEffect } from 'react'
import { Channel, ChannelsList, ChannelsContainer, MainChannelItem, MainChannels, Name, NewChanelContainer, NewMessage, SidebarContainer, WorkspaceContainer } from './SidebarElements';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { sidebarItems } from '../../Data/SidebarData.js'
import AddIcon from '@material-ui/icons/Add';
import db from '../../firebase';
import { useHistory } from 'react-router-dom'
import axios from "../../axios"

const Sidebar = () => {

    const [channel, setChannel] = useState([])

    const getChannel = () => {
        axios.get('/get/channelList').then((response) => {
            setChannel(response.data)
        }).catch((err) => console.log(err))
    }


    useEffect(() => {
        getChannel()
        console.log(channel)
    }, [])

    const history = useHistory()



    const goToChannel = (id) => {
        if (id) {
            history.push(`/room/${id}`)
        }
    }

    const addChannel = () => {
        const prompName = prompt("Channel name")
        console.log(prompName)

        if (prompName) {
            axios.post(`/new/channel`, {
                channelName: prompName,
            })
        }
    }


    return (
        <SidebarContainer>
            <WorkspaceContainer>
                <Name>
                    <h2>WorkSpace</h2>
                </Name>
                <NewMessage>
                    <AddCircleOutlineIcon />
                </NewMessage>
            </WorkspaceContainer>
            <MainChannels>
                {sidebarItems.map((items) => (
                    <MainChannelItem key={items.text}>
                        {items.icon}
                        {items.text}
                    </MainChannelItem>
                ))}

            </MainChannels>
            <ChannelsContainer>
                <NewChanelContainer>
                    <div>
                        Chanels
                    </div>
                    <AddIcon onClick={addChannel} />
                </NewChanelContainer>
                <ChannelsList>
                    {channel.map((item) => (
                        <Channel onClick={() => goToChannel(item.id)} key={item.channelName}>
                            # {item.name}
                        </Channel>
                    ))}
                </ChannelsList>
            </ChannelsContainer>
        </SidebarContainer>
    )
}

export default Sidebar;
