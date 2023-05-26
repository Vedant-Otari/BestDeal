import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./code/Footer.js";
import Header from "./code/Header.js";
import Search from "./code/Search.js";
import HomeDisplay from "./code/HomeDisplay.js";
import About from "./code/About.js";
import Developers from "./code/Developers.js";
import Login from "./code/Login.js";
import Signup from "./code/Signup.js";
import Result from "./code/Result.js";
import Profile from "./code/Profile.js";
import ProductDetails from "./code/ProductDetails.js";

function App() {

  return (
    <Router>
      <>
        <div className="h-full min-h-screen pb-12 scroll-smooth"> 
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Header />
                  <Search />
                  <HomeDisplay />
                </>
              }
            />
            <Route path="/about" element={<About />} />
            <Route path="/developers" element={<Developers />} />
            <Route path="/login" element={<Login/>} />
            <Route path="/signup" element={<Signup/>} />
            <Route path="/result" element={<Result/>} />
            <Route path="/profile" element={<Profile/>} />
            <Route path="/productDetails" element={<ProductDetails/>} />
          </Routes>
          <Footer />
        </div>
      </>
    </Router>
  );
}

export default App;