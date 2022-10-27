import React from "react";
import classes from "./ProfileSection.module.css";
import profile__img from "../../assets/images/selfimage.jpg";

const ProfileSection = () => {
  return (
    <section className={classes.profile}>
      <img
        src={profile__img}
        alt="profile__img"
        height={100}
        width={100}
        id="profile__img"
        className={classes.profile__img}
      />
      <p id="twitter">
        @xOluwaseyi
      </p>
      <p id="slack" className={classes.slack}>@seyikodes</p>
    </section>
  );
};

export default ProfileSection;
