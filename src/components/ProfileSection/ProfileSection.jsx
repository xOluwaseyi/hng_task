import React from "react";
import classes from "./ProfileSection.module.css";
import profile__img from "../../assets/images/selfimage.jpg";
import share_default_icon from "../../assets/icons/share_default_icon.svg";
import more_default_icon from "../../assets/icons/more_default_icon.svg";

const ProfileSection = () => {
  return (
    <section className={classes.profile}>

    {/* share icon */}
      <img
        src={share_default_icon}
        alt="share icon"
        className={classes.share_btn}
      /> 

      {/* more icon */}
      <img
        src={more_default_icon}
        alt="menu icon"
        className={classes.more_btn}
      />

      {/* profile image */}
      <img
        src={profile__img}
        alt="profile__img"
        height={100}
        width={100}
        id="profile__img"
        className={classes.profile__img}
      />

      {/* twitter username and slack */}
      <p id="twitter" className={classes.twitter}>@xOluwaseyi</p>
      <p id="slack" className={classes.slack}>
        @seyikodes
      </p>
      
    </section>
  );
};

export default ProfileSection;
