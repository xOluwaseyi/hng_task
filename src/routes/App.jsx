import React from "react";
import classes from "./App.module.css"
import { Outlet } from "react-router-dom";
import FooterSection from "../components/FooterSection/FooterSection";
import LinksSection from "../components/LinksSection/LinksSection";
import ProfileSection from "../components/ProfileSection/ProfileSection";

const App = () => {
  return (
    <main className={classes.app_container}>
      <ProfileSection />
      <LinksSection />
      <FooterSection />

      <Outlet />
    </main>
  );
};

export default App;
