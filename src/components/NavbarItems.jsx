import Logo from "./Logo";
import "./Navbar.css";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
class FlagList {
  constructor(name, imgName) {
    this.name = name;
    this.imgName = imgName;
  }
}

export default function NavbarItems() {
  const flags = [
    new FlagList("Hindi", "../images/flag.png"),
    new FlagList("English", "../images/united-kingdom.png"),
    new FlagList("Japanese", "../images/japan.png"),
    new FlagList("French", "../images/france.png"),
    new FlagList("Spanish", "../images/spain.png"),
  ];
  return (
    <>
      {/* <div className="d-flex justify-content-between w-100 align-items-center"> */}
        <li className="nav-item dropdown ms-2 my-1">
          <a
            className="nav-link dropdown-toggle d-flex align-items-center ms-2"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img className="h-20px" src="../images/download.png" alt="" />
            <p className="align-items-center d-flex ms-3">Download</p>
          </a>
          <div className="dropdown-menu downloadDropdown rounded-4 p-2">
            <div className="row g-0 h-100 w-100">
              <div className="col-6 h-100 d-flex flex-column p-2  justify-content-center">
                <p className="mb-2 center-div">Download App</p>
                <div className="d-flex flex-column justify-content-between h-60">
                  <img className="h-30px w-100" src="../images/as.png" alt="" />
                  <img className="h-30px w-100" src="../images/ps.png" alt="" />
                </div>
              </div>
              <div className="col-6 d-flex flex-column p-2  justify-content-center">
                <p className="mb-2 center-div">Scan Code</p>
                <img
                  className="h-60"
                  src="../images/dummyQR.png"
                  alt="download"
                />
              </div>
            </div>
          </div>
        </li>
        <li className="nav-item dropdown ms-2 my-1">
          <a
            className="nav-link dropdown-toggle d-flex align-items-center ms-2"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img className="h-20px" src="../images/earth.png" alt="" />
            <p className="align-items-center d-flex ms-3">Languages</p>
          </a>
          <ul className="dropdown-menu rounded-4">
            {flags.map((flag, index) => (
              <li>
                <a
                  className="dropdown-item d-flex  align-items-center"
                  href="#"
                >
                  <img className="h-20px me-3" src={flag.imgName} alt="" />
                  <p>{flag.name}</p>
                </a>
              </li>
            ))}
          </ul>
        </li>
        
      {/* </div> */}
    </>
  );
}
