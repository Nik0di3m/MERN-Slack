import styled from 'styled-components'

export const SidebarContainer = styled.div`
    background: #3f0e40;
    border-right: 1px solid #532753;
`

export const WorkspaceContainer = styled.div`
    display: flex;
    color: white;
    height: 64px;
    align-items: center;
    padding-left: 19px;
    justify-content: space-around;
    border-bottom: 1px solid #532753;
`

export const Name = styled.div`

`

export const NewMessage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    width: 36px;
    height: 36px;
    border-radius: 999px;
    color: black;
    cursor: pointer;
`

export const MainChannels = styled.div`
    padding-top: 20px;

`

export const MainChannelItem = styled.div`
    color: rgb(188, 171, 188);
    display: grid;
    grid-template-columns: 15% auto;
    height: 28px;
    align-items: center;
    padding-left: 19px;
    cursor: pointer;
    transition: all 100ms ease-in;


    &:hover{
        background-color: #5e0a60;
    }
`

export const ChannelsContainer = styled.div`
    color:  rgb(188, 171, 188);
    margin-top: 10px;

`

export const NewChanelContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 20px;
    padding-left: 19px;
    padding-right: 12px;
    border-bottom: 1px solid #532753;
    padding-bottom: 6px;
    

    .MuiSvgIcon-root{
        transition: all 100ms ease-in;
    }
    .MuiSvgIcon-root:hover{
        background-color: white;
        border-radius: 999px;
        color: black;
        cursor: pointer;
    }

`

export const ChannelsList = styled.div`
    display: flex;
    flex-direction: column;

    justify-content: center;;
`

export const Channel = styled.div`
    height: 28px;
    display: flex;
    align-items: center;
    padding-left: 19px;
    transition: all 100ms ease-in;
    cursor: pointer;

    :hover{
        background-color: #350d36;
    }
`