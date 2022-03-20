import React, {useState, useEffect} from "react";
import './index.css';
import "./App.css";
import Header from "./components/Header";
import TinderCards from "./components/TinderCards";
import SwipeButtons from "./components/SwipeButtons";
import Chats from "./components/Chats";
import ChatScreen from "./components/ChatScreen";
import Profile from "./components/Profile";
import Loader from "./components/Loader";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [loading, setLoading] = useState (false);

  useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 8000)
  }, [])

  return (
    <div className="App">
      {
        loading ?
        <Loader/>
        :
      <Router>
        <Switch>
        <Route path="/chat/:person">
            <Header backButton ="/chat"/>
            <ChatScreen />
          </Route>
          <Route path="/chat">
            <Header backButton ="/"/>
            <Chats />
          </Route>
          <Route path="/menu">
            <Header backButton ="/"/>
            <Profile />
          </Route>
          <Route path="/">
          <Header />
            <TinderCards />
            <SwipeButtons />
          </Route>
        </Switch>
      </Router>
      }
    </div>
  );
}

export default App;

{
  /* Loading screen tinder logo Colour fills */
}
{
  /* Header */
}
{
  /* Tinder Cards */
}
{
  /* Buttons below tinder Cards */
}
{
  /* Chats Screen */
}
{
  /* Induvidual Chats Screen */
}
