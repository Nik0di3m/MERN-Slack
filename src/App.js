import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import Chat from './componentes/Chat/Chat';
import Login from './componentes/Login/Login';
import styled from 'styled-components'
import Header from './componentes/Header/Header';
import Sidebar from './componentes/Sidebar/Sidebar.js';
import { auth } from './firebase';
import Welcome from './componentes/Welcome/Welcome';



function App() {


  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')))

  const signOut = () => {
    auth.signOut().then(() => {
      setUser(null)
      localStorage.removeItem('user')
    })
  }



  return (
    <div className="app">
      <Router>
        {!user ?
          <Login setUser={setUser} />
          :
          <Container>
            <Header user={user} signOut={signOut} />
            <Main>
              <Sidebar />
              <Switch>
                <Route path='/room/:channelId'>
                  <Chat user={user} />
                </Route>
                <Route path="/">
                  <Welcome user={user} />
                </Route>
              </Switch>
            </Main>
          </Container>
        }

      </Router>
    </div>
  )
}

export default App;

const Container = styled.div`

width: 100%;
height: 100vh;
background-color: orange;
display: grid;
grid-template-rows: 38px auto;
`

const Main = styled.div`
  background-color: white;
  display: grid;
  grid-template-columns: 260px auto;
`
