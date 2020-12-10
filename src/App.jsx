import React from "react";
import { BrowserRouter } from "react-router-dom";

import Navbar from "./components/Header";
import Footer from "./components/Footer";
import "./styles/app.scss";
import Pages from "./Pages";
//import Contact from "./pages/Contact"

function App() {
  return (
    // <div className="stars">
    //   <div className="twinkling">
    <div className="site">
      <BrowserRouter>
        <Navbar />
        <div className="content">
          <Pages />
        </div>
        <Footer />
      </BrowserRouter>
    </div>
    //   </div>
    // </div>
  );
}

export default App;
