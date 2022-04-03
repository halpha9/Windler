import React from "react";
import ForumIcon from "@mui/icons-material/Forum";
import MenuIcon from '@mui/icons-material/Menu';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import "../components/Header.css";
import logo from "../img/tinder-logo.png";
import { IconButton } from "@mui/material";
import { Link, useHistory } from "react-router-dom";
import LogoutIcon from '@mui/icons-material/Logout';
import { useDispatch } from "react-redux";
import { auth } from "../firebase";
import { logout } from "../features/userSlice";


function Header({backButton}) {

    const dispatch = useDispatch();
    const logoutOfApp = () => {
      dispatch(logout());
      auth.signOut();
    };

  const history = useHistory();
  
  return (
    <div className="header">
      {backButton ? (
      <IconButton onClick={() => history.replace(backButton)}>
        <ArrowBackIosIcon className="header__icon"/>
      </IconButton>
        ):(
        <Link to="menu">
        <IconButton>
          <MenuIcon className="header__icon"/>
        </IconButton>
        </Link>
        )}
      <Link to="/">
        <img className="header__logo" src={logo} alt="tinder-logo" />
      </Link>
      <div>
      <Link to ="/chat">
      <IconButton>
        <ForumIcon className="header__icon"/>
      </IconButton>
      </Link>
      <IconButton>
        <LogoutIcon onClick={logoutOfApp} className="header__icon"/>
      </IconButton>
      </div>
    </div>
  );
}

export default Header;
