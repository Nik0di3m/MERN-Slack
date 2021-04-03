import React, { useState } from 'react'
import { Channel, ChannelsList, ChannelsContainer, MainChannelItem, MainChannels, Name, NewChanelContainer, NewMessage, SidebarContainer, WorkspaceContainer } from './SidebarElements';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { sidebarItems } from '../../Data/SidebarData.js'
import AddIcon from '@material-ui/icons/Add';


const Sidebar = () => {



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
                    <AddIcon />
                </NewChanelContainer>
                <ChannelsList>
                    <Channel>
                        # Chanels 1
                    </Channel>
                    <Channel>
                        # Chanels 2
                    </Channel>
                </ChannelsList>
            </ChannelsContainer>
        </SidebarContainer>
    )
}

export default Sidebar;
