import React from 'react'
import { WelcomeContainer } from './WeldomeElements';

const Welcome = ({ user }) => {
    return (
        <WelcomeContainer>
            <h1>Welcome! {user.name}</h1>
            <h2>Select or create channel🚀🚀</h2>
        </WelcomeContainer>
    )
}

export default Welcome;
