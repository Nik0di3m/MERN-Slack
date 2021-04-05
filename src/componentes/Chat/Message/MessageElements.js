import styled from 'styled-components'

export const ChatMessageContainer = styled.div`
    padding-left: 19px;
    overflow-y: scroll;
    max-height: 80%;
    scrollbar-width: none;
    .example::-webkit-scrollbar {
  display: none;

`



export const ChatMessage = styled.div`
    border: 1px solid #532753;
    border-radius: 20px 20px 20px 20px;
    padding: 8px;
    display: flex;
    max-width: 35%;
    margin-top: 15px;
    display: flex;
    flex-direction: column;
    background-color: #350d36;
    box-shadow: 0px 0px 9px 0px rgba(255,255,255,0.05);

    @media (max-width: 968px){
        max-width: 80%;
    }
`
export const MessageInfoContainer = styled.div`
    display: flex;
    align-items: flex-start;

    .avatar{
        border: 2px solid white;
    }
    
`
export const MessageInfo = styled.div`
    padding-left: 16px;
    display: flex;
    align-items: center;
`
export const UserName = styled.div`

`
export const TimeStamps = styled.div`


    p{
        font-size: 0.8em;
        margin-left: 10px;
    }
`
export const MessageContainer = styled.div`
    padding-left: 66px;
`

export const ChatText = styled.div`
`