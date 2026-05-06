import { useState } from "react";
import "./App.css";
import Car from "./components/Component1.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Banner from "./components/Banner.jsx";
import AddsCarousel from "./components/AddsCarousel.jsx"
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="h-100">
        <Navbar></Navbar>
        <Banner></Banner>
        <AddsCarousel></AddsCarousel>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
