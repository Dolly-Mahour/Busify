import Logo from "./Logo";
import "./Navbar.css";
import NavbarItems from "./NavbarItems";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg w-100">
        <div className="container-fluid g-0 px-4 d-flex justify-content-between align-items-center">
          <div className="d-inline-block">
            <a className="d-flex alig-items-center" href="#">
              <Logo></Logo>
            </a>
          </div>
          <div className="w-50">
            <ul className="w-100 d-flex align-items-center">
              <div className="d-md-flex d-none w-50 justify-content-around align-items-center">
                <NavbarItems></NavbarItems>
              </div>
              <div className="flex-grow-1 d-flex justify-content-around align-items-center">
                <li className="nav-item">
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
                      <div className="modal-content p-3 rounded-4">
                        <div className="modal-body">
                          <div className="center-div">
                            <Logo></Logo>
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
                          <div className="d-flex justify-content-around align-items-center">
                            <p>User</p>
                            <p>Agent</p>
                          </div>
                          <div className="px-3">
                            <input
                              type="text"
                              className="border border-secondary w-100 h-50px rounded-4 my-2 p-2 px-3"
                              placeholder="Enter your name"
                            />
                            <input
                              type="text"
                              className="border border-secondary w-100 h-50px rounded-4 my-2 p-2 px-3"
                              placeholder="Enter your email"
                            />
                            <input
                              type="text"
                              className="border border-secondary w-100 h-50px rounded-4 my-2 p-2 px-3"
                              placeholder="Enter your number"
                            />
                            <input
                              type="text"
                              className="border border-secondary w-100 h-50px rounded-4 my-2 p-2 px-3"
                              placeholder="Enter your password"
                            />
                            <input
                              type="text"
                              className="border border-secondary w-100 h-50px rounded-4 my-2 p-2 px-3"
                              placeholder="Enter your refferal code (Optional)"
                            />
                          </div>
                          <div className="center-div">
                            <button className="btn btn-primary rounded-4 px-3 p-2 my-3">
                              Register now
                            </button>
                          </div>
                          <div className="d-flex justify-content-center my-3">
                            already have an account?{" "}
                            <p className="text-primary">Login</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="nav-item">
                  <button
                    className="nav-link btn "
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#LoginModal"
                  >
                    <p>Login</p>
                  </button>
                  <div
                    className="modal fade"
                    id="LoginModal"
                    tabIndex="-1"
                    aria-labelledby="LoginModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog modal-dialog-centered">
                      <div className="modal-content p-3 rounded-4">
                        <div className="modal-body">
                          <div className="center-div">
                            <Logo></Logo>
                          </div>
                          <h3 className="center-div fst-italic py-2">Lgoin</h3>
                          <DotLottieReact
                            src="https://lottie.host/14273cfb-afce-4097-97ba-e66ec31c8b2b/jkgwm3q4Hl.json"
                            loop
                            autoplay
                            className="my-3"
                          />
                          <div className="px-3">
                            <input
                              type="text"
                              className="border border-secondary w-100 h-50px rounded-4 my-2 p-2 px-3"
                              placeholder="Enter your phone number"
                            />
                            <input
                              type="password"
                              className="border border-secondary w-100 h-50px rounded-4 my-2 p-2 px-3"
                              placeholder="Enter your password"
                            />
                          </div>
                          <div className="center-div">
                            <button className="btn btn-primary rounded-4 px-3 p-2 my-3">
                              Lgoin now
                            </button>
                          </div>
                          <div className="d-flex justify-content-center my-3">
                            Do not have an account ?
                            <p className="text-primary ms-2">Register</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                <li className="nav-item dropdown center-div">
                  <a
                    className="nav-link dropdown-toggle p-0 center-div"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img
                      className="h-60px"
                      src="../images/hamburger.png"
                      alt="menu"
                    />
                  </a>
                  <ul className="dropdown-menu dropdown-menu-end">
                    <li>
                      <a
                        className="dropdown-item d-flex  align-items-center justify-content-between"
                        href="#"
                      >
                        <div className="d-flex">
                          <img
                            className="h-20px me-3"
                            src="../images/moon.png"
                            alt=""
                          />
                          <p>Dark Theme</p>
                        </div>
                        <div>
                          <div className="form-check form-switch">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              role="switch"
                              id="switchCheckDefault"
                            />
                          </div>
                        </div>
                      </a>
                    </li>
                    <div className="d-lg-none d-md-none d-sm-block">
                      <NavbarItems></NavbarItems>
                    </div>
                    <li>
                      <a
                        className="dropdown-item d-flex  align-items-center"
                        href="#"
                      >
                        <img
                          className="h-20px me-3"
                          src="../images/documents.png"
                          alt=""
                        />
                        <p>Privacy Policy</p>
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item d-flex  align-items-center"
                        href="#"
                      >
                        <img
                          className="h-20px me-3"
                          src="../images/documents.png"
                          alt=""
                        />
                        <p>Terms & Conditions</p>
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item d-flex  align-items-center"
                        href="#"
                      >
                        <img
                          className="h-20px me-3"
                          src="../images/documents.png"
                          alt=""
                        />
                        <p>Contact Us</p>
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item d-flex  align-items-center"
                        href="#"
                      >
                        <img
                          className="h-20px me-3"
                          src="../images/documents.png"
                          alt=""
                        />
                        <p>Cancellation Policy</p>
                      </a>
                    </li>
                  </ul>
                </li>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
