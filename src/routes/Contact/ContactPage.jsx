import React from "react";
import classes from "./ContactPage.module.css";
import FooterSection from "../../components/FooterSection/FooterSection";

const ContactPage = () => {
  return (
    <section className={classes.contact_container}>
      <h1>Contact Me</h1>
      <p>Hi there, contact me to ask me about anything you have in mind.</p>

      <form action="">
        {/* first name and last name */}
        <div>
          {/* first name */}
          <div>
            <label htmlFor="first_name">First Name</label>
            <input
              type="text"
              id="first_name"
              placeholder="Enter your first name"
            />
          </div>

          {/* last name */}
          <div>
            <label htmlFor="last_name">Last Name</label>
            <input
              type="text"
              id="last_name"
              placeholder="Enter your last name"
            />
          </div>
        </div>

        {/* email */}
        <label htmlFor="email">Email</label>
        <input type="email" id="email" placeholder="yourname@email.com" />

        {/* message */}
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          cols="30"
          rows="10"
          placeholder="Send me a message and I'll reply you as soon as possible..."
        ></textarea>

        {/* confirmation */}
        <div>
          <input type="checkbox" id="confirm" />
          <span>
            You agree to providing your data to {name} who may contact you.
          </span>
        </div>

        {/* submit */}
        <button type="submit" id="btn__submit">
          Submit
        </button>
      </form>

      <FooterSection />
    </section>
  );
};

export default ContactPage;
