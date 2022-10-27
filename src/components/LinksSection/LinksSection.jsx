import React from "react";
import { links } from "./LinksData";
import classes from "./LinksSection.module.css";
import slack_logo from "../../assets/slack_logo.png"
import github_logo from "../../assets/github_logo.png";

const LinksSection = () => {
  return (
    <section className={classes.links}>
      {links.map((link) => {
        return (
          <a
            key={link.id}
            id={link.id_text}
            href={link.link}
            className={classes.link__btn}
            target="_blank"
          >
            {link.link_text}
          </a>
        );
      })}

      <div className={classes.logos}>
        <a href="#">
          <img src={slack_logo} alt="slack logo" />
        </a>
        <a href="#">
          <img src={github_logo} alt="github logo" />
        </a>
      </div>
    </section>
  );
};

export default LinksSection;
