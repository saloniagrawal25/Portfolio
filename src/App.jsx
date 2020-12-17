import React from "react";
import { BrowserRouter } from "react-router-dom";

import Navbar from "./components/Header";
import Footer from "./components/Footer";
import Pages from "./pages";
import "./styles/app.scss";


function App() {
  return (
    <div className="site">
      <BrowserRouter>
        <Navbar />
        <div className="content">
          <Pages />
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
