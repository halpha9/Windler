import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import ForumIcon from "@mui/icons-material/Forum";
import MenuIcon from '@mui/icons-material/Menu';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import "../components/Header.css";
import logo from "../img/tinder-logo.png";
import { IconButton } from "@mui/material";
import { Link, useHistory } from "react-router-dom";


function Header({backButton}) {
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
      <Link to ="/chat">
      <IconButton>
        <ForumIcon className="header__icon"/>
      </IconButton>
      </Link>
    </div>
  );
}

export default Header;
