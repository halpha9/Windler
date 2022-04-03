import React from "react";
import Avatar from "@mui/material/Avatar";
import { Button, IconButton } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import EditIcon from "@mui/icons-material/Edit";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import BoltIcon from "@mui/icons-material/Bolt";

import "./Profile.css";
import { selectUser } from "../features/userSlice";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";



function Profiles() {
  const user = useSelector(selectUser);
  return (
    <div class="profiles__page">
      <svg class = "profile__svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#efefef" fill-opacity="1" d="M0,64L120,80C240,96,480,128,720,133.3C960,139,1200,117,1320,106.7L1440,96L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg>
      <div class = "box"></div>
      <div class="profile">
        <Avatar
          sx={{ height: "90px", width: "90px" }}
          className="profile__image"
          src={user.photoUrl}
        >
          {user.displayName[0]}
        </Avatar>
        
        <div class="profile__info">
          <h2>
            {user.displayName}, 23
          </h2>
          <p>Front-end Developer Tinder</p>
        </div>
      </div>
      <div className="profile__buttons">
        <div className="profile__buttonsTop">
          <div class="profile__button">
            <IconButton className="profile__settings">
              <SettingsIcon fontSize="large" />
            </IconButton>
            <label>Settings</label>
          </div>

          <div class="profile__button">
            <Link to = "edit">
            <IconButton className="profile__edit">
              <EditIcon fontSize="large" />
            </IconButton>
            </Link>
            <label>Edit Profile</label>
          </div>
        </div>

        <div className="profile__buttonsBottom">
          <div class="profile__button">
            <IconButton sx = {{fill: "linear-gradient(40deg, #FD297B, #FF5864, #FF655B)"}} className="profile__camera">
              <PhotoCameraIcon fontSize="large" />
            </IconButton>
            <label>Add Media</label>
          </div>
        </div>
      </div>

      <div className="profile__aspects">
        <div className="profile__upgrades">
          <BoltIcon fontSize="large" className="profile__bolt" />
          <h2>Get Matches Faster</h2>
        </div>
        <p>Boost your profile once per month!</p>
        <Button>GET TINDER PLUS</Button>
      </div>
    </div>
  );
}

export default Profiles;
