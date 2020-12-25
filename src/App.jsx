import React,{ useState, useEffect}  from "react";
import { BrowserRouter } from "react-router-dom";
import { EatLoading  } from 'react-loadingg';
import Navbar from "./components/Header";
import Footer from "./components/Footer";
import Pages from "./pages";
import "./styles/app.scss";


function App() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    fetch("https://gitconnected.com/v1/portfolio/saloniagrawal25")
      .then((res) => res.json())
      .then((userData) => setUserData(userData));
  }, []);

  if (userData===null) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <EatLoading speed={2} size={"large"}/>
      </div>
    );
  }

  return (
    <div className="site">
      <BrowserRouter>
        <Navbar />
        <div className="content">
          <Pages userData={userData}/>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
