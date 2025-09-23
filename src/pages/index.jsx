import React from "react";
import { Route, Routes } from "react-router-dom";

import Achievements from "./Achievements";
import Contact from "./Contact";
import Education from "./Education";
import Experience from "./Experience";
import Profile from "./Profile";
import Projects from "./Projects";
import Skills from "./Skills";

export default function Pages({ userData }) {
  return (
    <Routes>
      <Route path="/achievements" element={<Achievements />} />
      <Route path="/education" element={<Education />} />
      <Route path="/experience" element={<Experience userData={userData} />} />
      <Route
        path="/"
        element={
          <>
            <Profile />
            <Skills />
            <Projects userData={userData} collapse={true} />
            <Education userData={userData} />
            <Experience userData={userData} />
            <Contact />
          </>
        }
      />
      <Route
        path="/user/projects"
        element={<Projects userData={userData} collapse={false} />}
      />
      <Route path="/skills" element={<Skills />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}
