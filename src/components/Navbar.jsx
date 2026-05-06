import Logo from "./Logo";
import "./Navbar.css";
class FlagList {
  constructor(name, imgName) {
    this.name = name;
    this.imgName = imgName;
  }
}
export default function Navbar() {
  const flags = [
    new FlagList("Hindi", "../images/flag.png"),
    new FlagList("English", "../images/united-kingdom.png"),
    new FlagList("Japanese", "../images/japan.png"),
    new FlagList("French", "../images/france.png"),
    new FlagList("Spanish", "../images/spain.png"),
  ];
  return (
    <>
      <nav className="navbar navbar-expand-lg w-100">
        <div className="container-fluid g-0 px-4 py-2  d-flex justify-content-between align-items-center">
          <div className="w-50">
            <a className="navbar-brand d-flex alig-items-center" href="#">
              <Logo></Logo>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
          <div className="w-50" id="navbarSupportedContent">
            <ul className="navbar-nav justify-content-between d-flex align-items-center">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle d-flex align-items-center justify-content-between"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img className="h-20px" src="../images/download.png" alt="" />
                  <p className="align-items-center d-flex ms-2">Download</p>
                </a>
                <div className="dropdown-menu downloadDropdown rounded-4 p-2">
                  <div className="row g-0 h-100 w-100">
                    <div className="col-6 h-100 d-flex flex-column p-2  justify-content-center">
                      <p className="mb-2">Download App</p>
                      <div className="d-flex flex-column justify-content-between h-60">
                        <img
                          className="h-30px w-100"
                          src="../images/as.png"
                          alt=""
                        />
                        <img
                          className="h-30px w-100"
                          src="../images/ps.png"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="col-6 d-flex flex-column p-2  justify-content-center">
                      <p className="mb-2">Scan Code</p>
                      <img
                        className="h-60"
                        src="../images/dummyQR.png"
                        alt="download"
                      />
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle d-flex align-items-center justify-content-between"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img className="h-20px" src="../images/earth.png" alt="" />
                  <p className="align-items-center d-flex ms-2">Languages</p>
                </a>
                <ul className="dropdown-menu">
                  {flags.map((flag, index) => (
                    <li>
                      <a className="dropdown-item d-flex  align-items-center" href="#">
                        <img
                        className="h-20px me-3"
                        src={flag.imgName}
                        alt=""
                      />
                        <p>{flag.name}</p>
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link btn "
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#registerModal"
                >
                  Register
                </button>
                <div
                  className="modal fade"
                  id="registerModal"
                  tabindex="-1"
                  aria-labelledby="registerModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h1
                          className="modal-title fs-5"
                          id="registerModalLabel"
                        >
                          Modal title
                        </h1>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="modal-body">...</div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-secondary"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                        <button type="button" className="btn btn-primary">
                          Save changes
                        </button>
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
                  Login
                </button>
                <div
                  className="modal fade"
                  id="LoginModal"
                  tabindex="-1"
                  aria-labelledby="LoginModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h1 className="modal-title fs-5" id="LoginModalLabel">
                          Modal title
                        </h1>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="modal-body">...</div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-secondary"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                        <button type="button" className="btn btn-primary">
                          Save changes
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul className="dropdown-menu dropdown-menu-end">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
