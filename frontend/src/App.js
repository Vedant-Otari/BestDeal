import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./code/Footer.js";
import Header from "./code/Header.js";
import Search from "./code/Search.js";
import HomeDisplay from "./code/HomeDisplay.js";
import About from "./code/About.js";
import Privacy from "./code/Privacy.js";
import Developers from "./code/Developers.js";

function App() {
  return (
    <Router>
      <>
        <div className="from-sky-300 to-blue-600 bg-gradient-to-b min-h-screen pb-28">
          <Header />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Search />
                  <HomeDisplay />
                </>
              }
            />
            <Route path="/about" element={<About />} />
            <Route path="/privacy" element={<Privacy/>} />
            <Route path="/developers" element={<Developers />} />
          </Routes>
          <Footer />
        </div>
      </>
    </Router>
  );
}

export default App;