import React from "react";
import classes from "./ContactPage.module.css";
import FooterSection from "../../components/FooterSection/FooterSection";

const ContactPage = () => {
  return (
    <section className={classes.contact_container}>
      <h1>Contact Me</h1>
      <p>Hi there, contact me to ask me about anything you have in mind.</p>

      <FooterSection />
    </section>
  );
};

export default ContactPage;
