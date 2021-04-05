import styled from 'styled-components'



export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    background-color: #3f0e40;
`

export const Content = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #5e0a60;
    height: 50vh;
    max-width: 90vw;
    border-radius: 20px;
    flex-direction: column;

`

export const SlackImg = styled.img`
    width: 80%;
    
`

export const SignInButton = styled.button`

    background-color: #0a8d48;
    color: white;
    border: none;
    height: 50px;
    width: 250px;
    border-radius: 20px;
    cursor: pointer;
    
`