import React from "react";
import { BrowserRouter } from "react-router-dom";

import Navbar from "./components/Header";
import Footer from "./components/Footer";
import "./styles/app.scss";
import Pages from "./pages";

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
