import React from 'react'
import zuri_logo from "../../assets/zuri_logo.png"
import I4G_logo from "../../assets/I4G_logo.png";
import classes from "./FooterSection.module.css"


const FooterSection = () => {
  return (
    <footer className={classes.footer}>
    {/* zuri logo */}
      <img src={zuri_logo} alt="zuri logo" className={classes.footer_images} />

      {/*  */}
      <p>HNG Internship 9 Frontend Task</p>

       {/* i4g logo */}
      <img src={I4G_logo} alt="I4G logo" className={classes.footer_images} />
    </footer>
  );
}

export default FooterSection