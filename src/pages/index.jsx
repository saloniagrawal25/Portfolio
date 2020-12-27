import React from "react";
import { Route, Switch } from "react-router-dom";

import Achievements from "./Achievements";
import Contact from "./Contact";
import Education from "./Education";
import Experience from "./Experience";
import Profile from "./Profile";
import Projects from "./Projects";
import Skills from "./Skills";

export default function Pages({ userData }) {
  return (
    <div>
      <Switch>
        <Route path="/achievements" exact component={Achievements} />
        <Route path="/education" exact component={Education} />
        <Route path="/experience" exact>
          <Experience userData={userData} />
        </Route>
        <Route path="/" exact>
          <Profile />
          <Skills />
          <Projects userData={userData} collapse={true} />
          <Education userData={userData} />
          <Experience userData={userData} />
          <Contact />
        </Route>
        <Route path="/user/projects" exact>
          <Projects userData={userData} collapse={false} />
        </Route>
        <Route path="/skills" exact component={Skills} />
        <Route path="/contact" exact component={Contact} />
      </Switch>
    </div>
  );
}
