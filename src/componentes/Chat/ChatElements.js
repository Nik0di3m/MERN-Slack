import styled from 'styled-components'


export const ChatContainer = styled.div`
 background-color: #19051a;
 color: white;
 position: relative;
 width: 100%;
 overflow: hidden;
 max-height: calc(100vh - 38px);
`
export const ChatHeader = styled.div`
    border: 1px solid #532753;
    height: 53px;
    display: flex;
    justify-content: space-between;
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 19px;
    padding-right: 16px;
    align-items: center;
`
export const ChatDescriptions = styled.div`

`
export const ChatDesc = styled.div`

`
export const ChatRoom = styled.div`

`
export const ChatInfo = styled.div`
    display: flex;
    align-items: center;
    padding-right: 16px;
`

export const ChatInfoIcon = styled.div`
    margin-left: 18px;
`

export const MessageSenderContainer = styled.div`
    background-color: #350d36;
    position: absolute;
    bottom: 0px;
    width: 100%;
    height: 55px;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const MessageSender = styled.div`
    padding-left: 19px;
    display: flex;
    height: 80%;
    width: 90%;
    align-items: center;
    justify-content: space-evenly;


    input{
        background-color: #19051a;
        border: none;
        height: 90%;
        color: white;
        border-radius: 999px;
        width: 90%;
        padding-left: 10px;

    }
    input:focus{
        outline: none;
    }

    form{
        display: flex;
        width: 100%;
        height: 90%;
    }
    
`

export const SendMessage = styled.button`
    background-color: white;
    width: 40px;
    height: 40px;
    border-radius: 999px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #350d36;
    border: none;
    :focus{
        border: none;
        outline: none;
    }
`