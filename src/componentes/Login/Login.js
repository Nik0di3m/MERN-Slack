import React from 'react'
import { Container, Content, SignInButton, SlackImg } from './LoginElements'
import { auth, provider } from '../../firebase'
const Login = ({ setUser }) => {

    const signIn = () => {
        auth.signInWithPopup(provider)
            .then((res) => {
                const newUser = {
                    name: res.user.displayName,
                    photo: res.user.photoURL,
                }
                localStorage.setItem('user', JSON.stringify(newUser));
                setUser(newUser);

            })
            .catch((err) => {
                alert(err.massage)
            })
    }

    return (
        <Container>
            <Content>
                <SlackImg src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Slack_Technologies_Logo.svg/800px-Slack_Technologies_Logo.svg.png" />
                <SignInButton onClick={signIn}>Sign In With Google</SignInButton>
            </Content>
        </Container>
    )
}

export default Login
