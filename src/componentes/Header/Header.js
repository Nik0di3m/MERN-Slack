import React from 'react'
import { HeaderContainer, Main, Name, Search, SearchContainer, UserContainer, UserImage } from './HeaderElements'
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import { Avatar } from '@material-ui/core';
const Header = ({ user, signOut }) => {
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
                    {user.name}
                </Name>
                <UserImage onClick={signOut}>
                    <Avatar src={user.photo} />
                </UserImage>
            </UserContainer>
        </HeaderContainer>
    )
}

export default Header
