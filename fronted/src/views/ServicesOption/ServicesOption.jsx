import React from "react";
import InstagramViewsScreen from "../InstgramViewsScreen/InstagramViewsScreen";
import InsatagramLikeScreen from "../InsatagramLikeScreen/InstagramLikeScreen";
import InstagramBotFollowers from "../InsatagramBotFollowers/InstagramBotFollowers";
import InstagramFollowers from "../InstagramFollowers/InstagramFollowers";
function ServicesOption() {
  return (
    <div>
      <InstagramFollowers />
      <InstagramBotFollowers />
      <InsatagramLikeScreen />
      <InstagramViewsScreen />
    </div>
  );
}

export default ServicesOption;
