import React from 'react'
import { HeaderContainer, Main, Name, Search, SearchContainer, UserContainer, UserImage } from './HeaderElements'
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import { Avatar } from '@material-ui/core';
const Header = () => {
    return (
        <HeaderContainer>
            <Main>
                <AccessTimeIcon />
                <SearchContainer>
                    <Search>
                        <input type="text" placeholder="Search..." />
                    </Search>
                </SearchContainer>
                <HelpOutlineIcon />
            </Main>
            <UserContainer>
                <Name>
                    Nikodem
                </Name>
                <UserImage>
                    <Avatar src="https://scontent-waw1-1.cdninstagram.com/v/t51.2885-19/s150x150/28764215_2319853541575254_6278675714925395968_n.jpg?tp=1&_nc_ht=scontent-waw1-1.cdninstagram.com&_nc_ohc=eHnNFex5R-IAX_Nec7B&edm=ABfd0MgAAAAA&ccb=7-4&oh=97b3445fa39e0197afd1c4e793b93344&oe=608EE4BD&_nc_sid=7bff83" />
                </UserImage>
            </UserContainer>
        </HeaderContainer>
    )
}

export default Header
