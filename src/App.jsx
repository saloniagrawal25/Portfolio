import React from "react";
import { BrowserRouter } from "react-router-dom";

import Navbar from "./Components/Header";
import Footer from "./Components/Footer";
import "./styles/app.scss";
import Pages from "./Pages";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <div>
          <Pages />
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
