import { useEffect, useRef, useState } from "react";
import Logo from "./Logo";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import NavbarItems from "./NavbarItems";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { Toast, Button, ToastContainer, Modal } from "react-bootstrap";
// import { Modal } from "bootstrap";
// import * as bootstrap from "bootstrap";
export default function Navbar({
  openLoginModal,
  setOpenLoginModal,
  isUserLoggedIn,
  setIsUserLoggedIn,
  theme,
  setTheme,
}) {
  const navigate = useNavigate();
  const [showPassword, showOrHide] = useState(false);
  const [registerationResponse, setRegisterationResponse] = useState(0);
  const [isMobileNumberValid, mobileNumberValid] = useState(true);
  const [isPasswordValid, passwordValid] = useState(true);
  const [getToken, setToken] = useState("");
  const [isToken, setIsToken] = useState(false);
  const [isUserCreated, setIsUserCreated] = useState(false);
  const [isLogin, setIsLoginCreated] = useState(false);
  const [toastBg, setToastBg] = useState("");
  const [loginMessage, setLoginMessage] = useState("");
  const [registerMessage, setRegisterMessage] = useState("");
  const [registrationMessage, setRegistrationMessage] = useState("");
  useEffect(() => {
    console.log(" registered ? ", registerationResponse);
    if (registerationResponse == 201) {
      console.log("showing toast");
      setIsUserCreated(true);
      setRegisterMessage("User Created SuccessFully !!");
      setToastBg("bg-green");
    } else if (registerationResponse !== 0) {
      console.log("not showing toast");
      setIsUserCreated(true);
      setRegisterMessage("User Registeration Failed !!");
      setToastBg("bg-danger");
    }
  }, [registerationResponse]);
  useEffect(() => {
    verifyUser();
    console.log("saved token ----", localStorage.getItem("token"));
  }, []);

  const verifyUser = async () => {
    const token = localStorage.getItem("token");

    if (!token) return;

    try {
      const response = await fetch("http://localhost:5000/verify-token", {
        method: "GET",

        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();

      if (data.success) {
        setIsLoginCreated(false);
        // setLoginMessage("Token Unautorized Login again !!");
        setIsToken(true);
        setIsUserLoggedIn(true);
      } else {
        localStorage.removeItem("token");
        setIsLoginCreated(true);
        // setToken(data.token);
        setIsToken(false);
        setIsUserLoggedIn(false);
        setLoginMessage("Token Unautorized Login again !!");
        e.preventDefault();
      }
    } catch (error) {
      console.log(error);
    }
  };
  const checkMobileNumberLength = (e) => {
    const digits = e.target.value;
    if (digits.length < 10) {
      mobileNumberValid(false);
    } else if (digits.length == 10) {
      mobileNumberValid(true);
    } else {
      mobileNumberValid(false);
    }
  };
  const checkPasswordLength = (e) => {
    const digits = e.target.value;
    if (digits.length < 8) {
      passwordValid(false);
    } else if (digits.length == 8) {
      passwordValid(true);
    } else {
      passwordValid(false);
    }
  };
  const [registrationFormData, setRegisterationFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
    referralcode: "",
  });
  const [loginFormData, setLoginFormData] = useState({
    mobile: "",
    password: "",
  });
  const loginHandleChange = (e) => {
    setLoginFormData({
      ...loginFormData,
      [e.target.name]: e.target.value,
    });
  };
  const handleChange = (e) => {
    setRegisterationFormData({
      ...registrationFormData,
      [e.target.name]: e.target.value,
    });
  };
  async function registerNewUser(e) {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/users", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(registrationFormData),
      });

      const data = await response.json();

      setRegisterationResponse(response.status);
      setRegistrationMessage(data.message);
      console.log(data);
    } catch (e) {
      console.log(e);
      setRegistrationMessage(e);
    }
  }
  async function logout(e) {
    setIsToken(false);
    setIsUserLoggedIn(false);
    setIsLoginCreated(true);
    setToastBg("bg-success");
    setLoginMessage("User Logout Successfully !!");
    localStorage.removeItem("token");
    navigate("/");
  }
  async function loginUser(e) {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginFormData),
      });
      const data = await response.json();
      setToken(data.token);
      setIsToken(true);
      setIsUserLoggedIn(true);
      setIsLoginCreated(true);
      setToastBg("bg-green");
      setOpenLoginModal(false);
      setLoginMessage(data.message);
      localStorage.setItem("token", data.token);
      console.log("login response", data);
    } catch (e) {
      setIsLoginCreated(true);
      setToastBg("bg-danger");
      setLoginMessage(e);
      console.log("login error", e);
    }
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg w-100">
        <div className="container-fluid g-0 px-2 d-flex justify-content-between align-items-center">
          <div className="d-inline-block w-40">
            <a className="d-flex alig-items-center" href="#">
              <Logo theme={theme} setTheme={setTheme}></Logo>
            </a>
          </div>
          <div className="navItemsWidth pt-2">
            <ul className="w-100 d-flex align-items-center">
              <li className="d-md-flex d-none w-50 justify-content-around align-items-center">
                <NavbarItems theme={theme}></NavbarItems>
              </li>
              <li className="flex-grow-1 d-flex justify-content-around align-items-center">
                <div
                  className="nav-item"
                  style={{ display: isToken ? "none" : "flex" }}
                >
                  <button
                    className="nav-link btn "
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#registerModal"
                  >
                    <p>Register</p>
                  </button>
                  <div
                    className="modal fade"
                    id="registerModal"
                    tabIndex="-1"
                    aria-labelledby="registerModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog modal-dialog-centered">
                      <div className="modal-content rounded-4 border-0 outline-0">
                        <div className="modal-body p-4 pt-5 rounded-4">
                          <div className="center-div">
                            <Logo theme={theme} setTheme={setTheme}></Logo>
                          </div>
                          <h3 className="center-div fst-italic py-2">
                            Register
                          </h3>
                          <DotLottieReact
                            src="https://lottie.host/d1bdc022-e4d8-40fe-9904-fbe0265d41a0/druqOOEkd4.json"
                            loop
                            autoplay
                            className="my-3"
                          />
                          <form className="px-3" onSubmit={registerNewUser}>
                            <input
                              type="text"
                              name="name"
                              value={registrationFormData.name}
                              onChange={handleChange}
                              className="border custom-border w-100 h-50px rounded-4 my-2 p-2 px-3"
                              placeholder="Enter your name"
                            />
                            <input
                              type="text"
                              name="email"
                              value={registrationFormData.email}
                              onChange={handleChange}
                              className="border custom-border w-100 h-50px rounded-4 my-2 p-2 px-3"
                              placeholder="Enter your email"
                            />
                            <input
                              value={registrationFormData.mobile}
                              onChange={(e) => {
                                handleChange(e);
                                checkMobileNumberLength(e);
                              }}
                              type="tel"
                              name="mobile"
                              className="border custom-border w-100 h-50px rounded-4 my-2 p-2 px-3"
                              placeholder="Enter your number"
                            />
                            <p
                              className="text-danger px-3"
                              style={{
                                display: isMobileNumberValid ? "none" : "block",
                              }}
                            >
                              Please enter valid 10 digit number
                            </p>
                            <div className="d-flex align-items-center border custom-border w-100 h-50px rounded-4 my-2 p-2 px-3">
                              <input
                                onChange={(e) => {
                                  handleChange(e);
                                  checkPasswordLength(e);
                                }}
                                maxLength="8"
                                type={showPassword ? "text" : "password"}
                                name="password"
                                className="flex-grow-1"
                                placeholder="Enter your password"
                                value={registrationFormData.password}
                              />
                              <p
                                className="text-secondary"
                                onClick={() => showOrHide(!showPassword)}
                              >
                                {showPassword ? "hide" : "show"}
                              </p>
                            </div>
                            <p
                              className="text-danger px-3"
                              style={{
                                display: isPasswordValid ? "none" : "block",
                              }}
                            >
                              Please enter valid 8 digit password
                            </p>
                            <input
                              type="text"
                              name="refferalcode"
                              className="border custom-border w-100 h-50px rounded-4 my-2 p-2 px-3"
                              placeholder="Enter your refferal code (Optional)"
                              value={registrationFormData.referralcode}
                            />
                            <div className="center-div">
                              <button
                                type="submit"
                                data-bs-dismiss="modal"
                                className=" outline-0 border-0 bg-teal text-white rounded-4 px-3 p-2 my-3"
                              >
                                Register now
                              </button>
                            </div>
                          </form>
                          <div className="d-flex justify-content-center my-3">
                            already have an account?{" "}
                            <p
                              className="color-teal ms-2"
                              
                              typeof="button"
                            >
                              Login
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <ToastContainer
                  position="bottom-end"
                  className="p-3 position-fixed"
                >
                  <Toast
                    show={isUserCreated}
                    onClose={() => setIsUserCreated(false)}
                    delay={3000}
                    autohide
                    className={toastBg}
                  >
                    <Toast.Header>
                      <strong className="me-auto">Registration Status</strong>
                      <small>Just now</small>
                    </Toast.Header>
                    <Toast.Body className="text-white fw-semibold fst-italic">
                      {registerMessage}
                    </Toast.Body>
                  </Toast>
                </ToastContainer>
                <ToastContainer
                  position="bottom-end"
                  className="p-3 position-fixed"
                >
                  <Toast
                    show={isLogin}
                    onClose={() => setIsLoginCreated(false)}
                    delay={3000}
                    autohide
                    className={toastBg}
                  >
                    <Toast.Header>
                      <strong className="me-auto">Login Status</strong>
                      <small>Just now</small>
                    </Toast.Header>
                    <Toast.Body className="text-white fw-semibold fst-italic">
                      {loginMessage}
                    </Toast.Body>
                  </Toast>
                </ToastContainer>
                <div
                  className="nav-item"
                  style={{ display: isToken ? "none" : "flex" }}
                >
                  <button
                    className="nav-link btn p-1 px-3 rounded-pill text-white login-button"
                    type="button"
                    onClick={() => setOpenLoginModal(true)}
                  >
                    <p>Login</p>
                  </button>
                  <Modal
                    show={openLoginModal}
                    onHide={() => setOpenLoginModal(false)}
                    centered
                    
                  >
                    <Modal.Body className={`p-4 rounded-3 pt-5 ${theme}`}>
                      <div className="center-div">
                        <Logo theme={theme} setTheme={setTheme}></Logo>
                      </div>

                      <h3 className="center-div fst-italic py-2">Login</h3>

                      <DotLottieReact
                        src="https://lottie.host/14273cfb-afce-4097-97ba-e66ec31c8b2b/jkgwm3q4Hl.json"
                        loop
                        autoplay
                        className="my-3"
                      />

                      <form className="px-3" onSubmit={loginUser}>
                        <input
                          type="tel"
                          name="mobile"
                          maxLength="10"
                          onChange={(e) => {
                            loginHandleChange(e);
                            checkMobileNumberLength(e);
                          }}
                          className="border custom-border w-100 h-50px rounded-4 my-2 p-2 px-3"
                          placeholder="Enter your phone number"
                        />

                        <p
                          className="text-danger px-3"
                          style={{
                            display: isMobileNumberValid ? "none" : "block",
                          }}
                        >
                          Please enter valid 10 digit number
                        </p>

                        <div className="d-flex align-items-center border custom-border w-100 h-50px rounded-4 my-2 p-2 px-3">
                          <input
                            onChange={(e) => {
                              checkPasswordLength(e);
                              loginHandleChange(e);
                            }}
                            maxLength="8"
                            type={showPassword ? "text" : "password"}
                            name="password"
                            className="flex-grow-1"
                            placeholder="Enter your password"
                          />

                          <p
                            className="text-secondary"
                            onClick={() => showOrHide(!showPassword)}
                          >
                            {showPassword ? "hide" : "show"}
                          </p>
                        </div>

                        <p
                          className="text-danger px-3"
                          style={{
                            display: isPasswordValid ? "none" : "block",
                          }}
                        >
                          Please enter valid 8 digit password
                        </p>

                        <div className="center-div">
                          <button
                            type="submit"
                            className="border-0 text-white bg-teal rounded-4 px-3 p-2 my-3"
                          >
                            Login now
                          </button>
                        </div>
                      </form>

                      <div className="d-flex justify-content-center my-3">
                        Do not have an account ?
                        <p
                          className="ms-2 color-teal"
                          onClick={() => {
                            setOpenLoginModal(false);
                          }}
                        >
                          Register
                        </p>
                      </div>
                    </Modal.Body>
                  </Modal>
                </div>
                <div
                  className="nav-item"
                  style={{ display: isToken ? "flex" : "none" }}
                >
                  <a
                    href="/profile"
                    className="ms-5 profile-icon rounded-circle bg-teal center-div"
                  >
                    <img className="h-50" src="../images/profile.png" alt="" />
                  </a>
                </div>
                <div className="nav-item dropdown center-div">
                  <button
                    className="nav-link dropdown-toggle p-0 center-div"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img
                      className="h-60px"
                      src={
                        theme == "light"
                          ? "../images/hamburger.png"
                          : "../images/hamburger-white.png"
                      }
                      alt="menu"
                    />
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end rounded-4">
                    <li>
                      <button className="dropdown-item d-flex  align-items-center justify-content-between">
                        <div className="d-flex">
                          <img
                            className="h-20px me-3"
                            src={
                              theme == "light"
                                ? "../images/moon.png"
                                : "../images/moon-white.png"
                            }
                            alt=""
                          />
                          <p>Dark Theme</p>
                        </div>
                        <div>
                          <div className="form-check form-switch">
                            <input
                              className="form-check-input"
                              value="light"
                              name="theme"
                              type="checkbox"
                              role="switch"
                              checked={theme === "dark"}
                              onChange={() =>
                                setTheme(theme === "light" ? "dark" : "light")
                              }
                              id="switchCheckDefault"
                            />
                          </div>
                        </div>
                      </button>
                    </li>
                    <li className="d-lg-none d-md-none d-sm-block">
                      <NavbarItems
                        theme={theme}
                        setTheme={setTheme}
                      ></NavbarItems>
                    </li>
                    <li>
                      <a
                        className="dropdown-item d-flex  align-items-center"
                        href="/privacypolicy"
                      >
                        <img
                          className="h-20px me-3"
                          src={
                            theme == "light"
                              ? "../images/documents.png"
                              : "../images/documents-white.png"
                          }
                          alt=""
                        />
                        <p>Privacy Policy</p>
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item d-flex  align-items-center"
                        href="/termandconditions"
                      >
                        <img
                          className="h-20px me-3"
                          src={
                            theme == "light"
                              ? "../images/documents.png"
                              : "../images/documents-white.png"
                          }
                          alt=""
                        />
                        <p>Terms & Conditions</p>
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item d-flex  align-items-center"
                        href="/contactus"
                      >
                        <img
                          className="h-20px me-3"
                          src={
                            theme == "light"
                              ? "../images/documents.png"
                              : "../images/documents-white.png"
                          }
                          alt=""
                        />
                        <p>Contact Us</p>
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item d-flex  align-items-center"
                        href="/cancellationpolicy"
                      >
                        <img
                          className="h-20px me-3"
                          src={
                            theme == "light"
                              ? "../images/documents.png"
                              : "../images/documents-white.png"
                          }
                          alt=""
                        />
                        <p>Cancellation Policy</p>
                      </a>
                    </li>
                    <li>
                      <button
                        type="button"
                        className="dropdown-item align-items-center"
                        data-bs-toggle="modal"
                        data-bs-target="#logoutModal"
                        style={{ display: isToken ? "flex" : "none" }}
                      >
                        <img
                          className="h-20px me-3"
                          src="../images/logout-red.png"
                          alt=""
                        />
                        <p className="text-danger">Logout</p>
                      </button>
                    </li>
                  </ul>
                </div>
                <div
                  className="modal"
                  id="logoutModal"
                  aria-labelledby="logoutModalLabel"
                  aria-hidden="true"
                  tabIndex="-1"
                >
                  <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content rounded-4">
                      <div className="modal-body rounded-4 p-4">
                        <h5>Do you want to log out ?</h5>
                        <div className="d-flex justify-content-between align-items-center mt-4">
                          <button
                            className="btn btn-danger px-3"
                            onClick={logout}
                            data-bs-dismiss="modal"
                          >
                            Yes
                          </button>
                          <button className="bg-teal text-white border-0 p-2 px-3 rounded-3">
                            No
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
