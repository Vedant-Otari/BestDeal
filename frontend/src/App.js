import Footer from "./code/Footer";
import Header from "./code/Header";
import Search from "./code/Search";  
// import First from "./code/First";
// import Second from "./code/Second";
// import React, { useState } from "react";
import HomeDisplay from "./code/HomeDisplay";
import About from "./code/About";

function App() {
  // const [displayFirst, setDisplayFirst] = useState(true);
  return (
    <>
      <div className="from-sky-300 to-blue-600 bg-gradient-to-b min-h-screen pb-28">
        <Header />
        {/* <Header toggleDisplay={() => setDisplayFirst(!displayFirst)} /> */}
        <Search />
        {/* {displayFirst ? <First /> : <Second />} */}
        {/* <About/> */}
        <HomeDisplay/>
        <Footer />
      </div>
    </>
  );
}

export default App;