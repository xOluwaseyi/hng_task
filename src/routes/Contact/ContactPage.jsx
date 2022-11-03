import React, { useState } from "react";
import classes from "./ContactPage.module.css";
import FooterSection from "../../components/FooterSection/FooterSection";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [emailError, setEmailError] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { firstName, lastName, email, message } = formData;

    if (message === "") {
      setEmailError(true);
    }

    if (firstName !== "" && lastName !== "" && email !== "" && message !== "") {
      setEmailError(false);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
      });
    }
  };

  return (
    <section>
      <div className={classes.contact_container}>
        <h1>Contact Me</h1>
        <p>Hi there, contact me to ask me about anything you have in mind.</p>

        <form
          action=""
          onSubmit={handleSubmit}
          className={classes.contact_form}
        >
          {/* first name and last name */}
          <div className={classes.form_names}>
            {/* first name */}
            <div>
              <label htmlFor="first_name">First Name</label>
              <input
                value={formData.firstName}
                onChange={handleInputChange}
                type="text"
                id="first_name"
                name="firstName"
                placeholder="Enter your first name"
                required
              />
            </div>

            {/* last name */}
            <div>
              <label htmlFor="last_name">Last Name</label>
              <input
                value={formData.lastName}
                onChange={handleInputChange}
                type="text"
                id="last_name"
                name="lastName"
                placeholder="Enter your last name"
                required
              />
            </div>
          </div>

          {/* email */}
          <div className={classes.form_email}>
            <label htmlFor="email">Email</label>
            <input
              value={formData.email}
              onChange={handleInputChange}
              type="email"
              id="email"
              name="email"
              placeholder="yourname@email.com"
              required
            />
          </div>

          {/* message */}
          <div className={classes.form_message}>
            <label htmlFor="message">Message</label>
            <textarea
              style={{
                outline: `${
                  emailError ? "2px solid red" : "2px solid #d0d5dd"
                }`,
              }}
              value={formData.message}
              onChange={handleInputChange}
              id="message"
              name="message"
              placeholder="Send me a message and I'll reply you as soon as possible..."
              maxLength="5"
            ></textarea>
            {emailError && <p>Please enter a message</p>}
          </div>

          {/* confirmation */}
          <div className={classes.form_confirm}>
            <input type="checkbox" id="confirm" />
            <p>
              You agree to providing your data to Oluwaseyi who may contact you.
            </p>
          </div>

          {/* submit */}
          <button type="submit" id="btn__submit">
            Send message
          </button>
        </form>
      </div>

      <FooterSection />
    </section>
  );
};

export default ContactPage;
