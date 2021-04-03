import styled from "styled-components";

export const HeaderContainer = styled.div`
    background-color: #350d36;
    color: white;
    display: flex;
    align-items: center;
    padding-left: 16px;
    padding-right: 16px;
    z-index: 10;
    box-shadow: 0 1px 0 0 rgb(255 255 225 / 10%);

`
export const Main = styled.div`
    display: flex;
    justify-content: center;
    align-content: center;
    flex: 1;
`
export const UserContainer = styled.div`
    display: flex;
    align-items: center;
    padding-right: 16px;
`

export const SearchContainer = styled.div`
    min-width: 400px;
    margin-left: 16px;
    margin-right: 16px;
`
export const Search = styled.div`
    box-shadow: 0 0 0 1px rgb(104 74 104);
    border-radius: 10px;
    width: 100%;
    display: flex;
    align-items: center;

    input{
        background-color: transparent;
        border: none;
        color: white;
        padding-left: 10px;
        padding-right: 10px;
        width: 100%;
        padding-top: 5px;
        padding-bottom: 5px;
    }
    input:focus{
        outline: none;
    }
    
`

export const Name = styled.div`

    padding-right: 16px;
`

export const UserImage = styled.div`

    width: 28px;
    height: 28px;
    border: 2px solid white;
    border-radius: 999px;

    .MuiAvatar-root{
        width: 100%;
        height: 100%;
    }
`