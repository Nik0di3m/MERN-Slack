import React, { useState } from 'react'
import { Channel, ChannelsList, ChannelsContainer, MainChannelItem, MainChannels, Name, NewChanelContainer, NewMessage, SidebarContainer, WorkspaceContainer } from './SidebarElements';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { sidebarItems } from '../../Data/SidebarData.js'
import AddIcon from '@material-ui/icons/Add';
import db from '../../firebase';


const Sidebar = ({ rooms }) => {

    const addChannel = () => {
        const prompName = prompt("Channel name")
        console.log(prompName)
        if (prompName) {
            db.collection('rooms').add({
                name: prompName
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
                    <MainChannelItem>
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
                    {rooms.map((item) => (
                        <Channel>
                            # {item.name}
                        </Channel>
                    ))}
                </ChannelsList>
            </ChannelsContainer>
        </SidebarContainer>
    )
}

export default Sidebar;
