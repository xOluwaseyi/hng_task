import React from "react";
import classes from "./App.module.css"
import LinksSection from "./components/LinksSection/LinksSection";
import ProfileSection from "./components/ProfileSection/ProfileSection";

const App = () => {
  return (
    <main className={classes.app_container}>
      <ProfileSection />
      <LinksSection />
    </main>
  );
};

export default App;
