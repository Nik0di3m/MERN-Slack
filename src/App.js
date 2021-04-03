import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import Chat from './componentes/Chat/Chat';
import Login from './componentes/Login/Login';
import styled from 'styled-components'
import Header from './componentes/Header/Header';
import Sidebar from './componentes/Sidebar/Sidebar.js';


function App() {
  return (
    //BEM naming convenction
    <div className="app">
      <Router>
        <Container>
          <Header />
          <Main>
            <Sidebar />
            <Switch>
              <Route path='/room'>
                <Chat />
              </Route>
              <Route path="/room/channel1">
                <Chat />
              </Route>
              <Route path="/">
                <Login />
              </Route>
            </Switch>
          </Main>
        </Container>
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
