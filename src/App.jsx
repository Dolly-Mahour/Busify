import { useEffect, useState } from "react";
import "./App.css";
import Car from "./components/Component1.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Banner from "./components/Banner.jsx";
import Home from "./components/Home.jsx";
import Profile from "./components/Profile.jsx";
import { Routes,Route,Router, BrowserRouter } from "react-router-dom";
import AddsCarousel from "./components/AddsCarousel.jsx";
import PrivacyPolicy from "./components/PrivacyPolicy.jsx";
import TermAndConditions from "./components/TermsAndConditions.jsx";
import ContactUs from "./components/ContactUs.jsx";
import CancellationPolicy from "./components/CancellationPolicy.jsx";
function App() {
  const currentTheme = localStorage.getItem("currentTheme");
  const [theme, setTheme] = useState(currentTheme); 
  const [isUserLoggedIn,setIsUserLoggedIn] = useState(false);
  const [openLoginModal,setOpenLoginModal] = useState(false);
  useEffect(() => {
    localStorage.setItem("currentTheme", theme);
  }, [theme]);
  return (
    <>
      <BrowserRouter>
      <div className={`${theme}`}>
        <Navbar openLoginModal={openLoginModal} setOpenLoginModal={setOpenLoginModal}  isUserLoggedIn = {isUserLoggedIn} setIsUserLoggedIn={setIsUserLoggedIn} theme={theme} setTheme={setTheme}></Navbar>
        <Routes>
          <Route path="/" element={<Home setOpenLoginModal={setOpenLoginModal} isUserLoggedIn = {isUserLoggedIn} theme={theme} setTheme={setTheme}></Home>}></Route>
          <Route path="/privacypolicy" element={<PrivacyPolicy theme={theme} ></PrivacyPolicy>}></Route>
          <Route path="/termandconditions" element={<TermAndConditions theme={theme} ></TermAndConditions>}></Route>
          <Route path="/contactus" element={<ContactUs theme={theme} ></ContactUs>}></Route>
          <Route path="/profile" element={<Profile theme={theme} ></Profile>}></Route>
          <Route path="/cancellationpolicy" element={<CancellationPolicy theme={theme} ></CancellationPolicy>}></Route>
        </Routes>
        <Footer theme={theme} setTheme={setTheme}></Footer>
      </div>
      </BrowserRouter>
    </>
  );
}

export default App;
