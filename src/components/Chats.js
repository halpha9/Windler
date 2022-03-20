import React, { useState } from "react";
import "./Chats.css";
import Chat from "./Chat"

function Chats() {
  
  return (
    <div className="chats">
      <Chat
        name="Mark"
        message="Yo, whats Up!"
        timestamp="40 seconds ago"
        profilePic="http://www.venmond.com/demo/vendroid/img/avatar/big.jpg"
      />
      <Chat
        name="Telissa"
        message="How are you? "
        timestamp="2 mins ago"
        profilePic="https://expertphotography.b-cdn.net/wp-content/uploads/2020/08/social-media-profile-photos-9.jpg"
      />
      <Chat
        name="Steven"
        message="Bonjour monsieur?"
        timestamp="6 minutes ago"
        profilePic="https://learnenglish.britishcouncil.org/sites/podcasts/files/styles/max_1300x1300/public/2021-10/RS8003_GettyImages-994576028-hig.jpg?itok=Ll1aydU5"
      />
      <Chat
        name="Ife"
        message="Hi, how you doing?"
        timestamp="12 hours ago"
        profilePic="https://www.elitesingles.co.uk/wp-content/uploads/sites/59/2019/11/2b_en_articleslide_sm2-350x264.jpg"
      />
      <Chat
        name="Lauren"
        message="Hey?"
        timestamp="2 days ago"
        profilePic="https://wallpapercave.com/dwp2x/wp5135903.jpg"
      />
    </div>
  );
}

export default Chats;
