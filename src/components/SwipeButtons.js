import React from "react";
import ReplayIcon from "@mui/icons-material/Replay";
import CloseIcon from "@mui/icons-material/Close";
import StarRateIcon from "@mui/icons-material/StarRate";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import { IconButton } from "@mui/material";
import "../components/SwipeButtons.css";

function SwipeButtons() {
  return (
    <div class="swipeButtons">
      <IconButton className="swipeButtons__repeat">
        <ReplayIcon />
      </IconButton >
      <IconButton className="swipeButtons__left">
        <CloseIcon />
      </IconButton>
      <IconButton className="swipeButtons__star">
        <StarRateIcon />
      </IconButton>
      <IconButton className="swipeButtons__right">
        <FavoriteIcon />
      </IconButton>
      <IconButton className="swipeButtons__lightning">
        <FlashOnIcon />
      </IconButton>
    </div>
  );
}

export default SwipeButtons;
