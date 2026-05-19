import { useEffect, useState } from "react";
import SearchCard from "./SearchCard";
import { Toast, Button, ToastContainer, Modal } from "react-bootstrap";

export default function Profile({
  theme,
  setOpenLoginModal,
  isUserLoggedIn,
  userProfile,
  setUserProfile,
}) {
  const [showPassword, setShowPassword] = useState(false);
  const [isUserUpdated, setIsUserUpdated] = useState(false);
  const [toastBg, setToastBg] = useState("");
  const [toastMessage, setToastMessage] = useState("");
  const [loginUser, setLoginUser] = useState({});
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setLoginUser(JSON.parse(user));
    }
  }, []);
  async function updateUser() {
    const id = loginUser._id;
    try {
      const response = await fetch(
        `https://busprojectapis.onrender.com/api/users/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(loginUser),
        },
      );
      const data = await response.json();
      localStorage.setItem("user", JSON.stringify(data.user));
      if (response.ok) {
        setIsUserUpdated(true);
        setToastBg("bg-green");
        setToastMessage("User Updated Successfully !!");
      } else {
        setIsUserUpdated(true);
        setToastBg("bg-danger");
        setToastMessage("User Not Updated !!");
      }
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <>
      <div className={`px-4 pt-2 pb-5 h-auto ${theme}`}>
        <div className="d-inline-block">
          <a
            href="/"
            className="bg-teal text-white p-2 rounded-3 text-decoration-none center-div"
          >
            <img
              className="h-20px "
              src="../images/white-back-button.png"
              alt="back to home"
            />
            <p className="d-block me-3">Home</p>
          </a>
        </div>

        <h1 className="fst-italic fw-bold my-5 center-div">Profile</h1>

        <div className="row g-0 px-5">
          <div className="col-lg-6 col-md-6 col-sm-12 px-3">
            <p className="fw-semibold fst-italic">Name{userProfile.name}</p>
            <input
              type="text"
              className="custom-border w-100 h-50px rounded-4 my-2 p-2 px-3"
              value={loginUser?.name || ""}
              onChange={(e) =>
                setLoginUser({ ...loginUser, name: e.target.value })
              }
            />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 px-3">
            <p className="fw-semibold fst-italic">Mobile</p>
            <input
              type="text"
              value={loginUser?.mobile || ""}
              onChange={(e) =>
                setLoginUser({ ...loginUser, mobile: e.target.value })
              }
              className="custom-border w-100 h-50px rounded-4 my-2 p-2 px-3"
            />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 px-3">
            <p className="fw-semibold fst-italic">Email</p>
            <input
              type="tel"
              className="custom-border w-100 h-50px rounded-4 my-2 p-2 px-3"
              value={loginUser?.email || ""}
              onChange={(e) =>
                setLoginUser({ ...loginUser, email: e.target.value })
              }
            />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 px-3">
            <p className="fw-semibold fst-italic">Password</p>
            <div className="custom-border w-100 h-50px rounded-4 my-2 p-2 px-3 d-flex align-items-center">
              <input
                type={showPassword ? "text" : "password"}
                className="flex-grow-1"
                value={loginUser?.password || ""}
                onChange={(e) =>
                  setLoginUser({ ...loginUser, password: e.target.value })
                }
              />
              <p
                className="text-secondary cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "Hide" : "Show"}
              </p>
            </div>
          </div>
          <button
            onClick={updateUser}
            className="bg-teal border-0 text-white d-inline-block p-2 rounded-3 fst-italic fw-semibold"
          >
            Update
          </button>
        </div>
      </div>
      <ToastContainer position="bottom-end" className="p-3 position-fixed">
        <Toast
          show={isUserUpdated}
          onClose={() => setIsUserUpdated(false)}
          delay={3000}
          autohide
          className={toastBg}
        >
          <Toast.Header>
            <strong className="me-auto">Registration Status</strong>
            <small>Just now</small>
          </Toast.Header>
          <Toast.Body className="text-white fw-semibold fst-italic">
            {toastMessage}
          </Toast.Body>
        </Toast>
      </ToastContainer>
    </>
  );
}
