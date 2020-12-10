import React from "react";
import { Route, Switch } from "react-router-dom";

import Achievements from "./Achievements";
import Education from "./Education";
import Experience from "./Experience";
import Profile from "./Profile";
import Projects from "./Projects";
import TechStack from "./TechStack";

export default function Pages() {
  return (
    <div>
      <Switch>
        <Route path="/achievements" exact component={Achievements} />
        <Route path="/education" exact component={Education} />
        <Route path="/experience" exact component={Experience} />
        <Route path="/" exact component={Profile} />
        <Route path="/projects" exact component={Projects} />
        <Route path="/techStack" exact component={TechStack} />
      </Switch>
    </div>
  );
}
