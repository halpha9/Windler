import React, {useEffect} from "react";
import './index.css';
import "./App.css";
import Header from "./components/Header";
import TinderCards from "./components/TinderCards";
import SwipeButtons from "./components/SwipeButtons";
import Chats from "./components/Chats";
import ChatScreen from "./components/ChatScreen";
import Profile from "./components/Profile";
import Login from "./components/Login";
import { auth } from "./firebase";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { login, logout, selectUser } from "./features/userSlice";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      //user auth comes through as a callback
      // Then dispatch log action
      if(userAuth){
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
        })
        );
      } else {
        dispatch(logout());
      }
    })
  }, []);

  return (
    <div className="App">
      {
        (!user) ?
        <Login/>
        :(
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
        )}
    </div>
  );
}

export default App;
