import React from "react";
import classes from "./App.module.css";
import FooterSection from "../components/FooterSection/FooterSection";
import LinksSection from "../components/LinksSection/LinksSection";
import ProfileSection from "../components/ProfileSection/ProfileSection";

const App = () => {
  return (
    <main>
      <section className={classes.app_container}>
        <ProfileSection />
        <LinksSection />
      </section>
      <FooterSection />
    </main>
  );
};

export default App;
