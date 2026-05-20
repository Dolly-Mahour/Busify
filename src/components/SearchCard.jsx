import { useState, useEffect } from "react";
import { Toast, ToastHeader, ToastBody, ToastContainer } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function SearchCard({
  theme,
  isUserLoggedIn,
  setOpenLoginModal,
  searchDataList,
  setSearchDataList,
}) {
   const { t ,i18n } = useTranslation();
  const navigate = useNavigate();
  const [placesList, setPlacesList] = useState([]);
  const [isFormEmpty, setIsFormEmpty] = useState(false);
  const [searchFormData, setSearchFormData] = useState({
    from: "",
    to: "",
    date: "",
  });
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://busprojectapis.onrender.com/api/places");
      const result = await response.json();
      setPlacesList(result);
    };
    fetchData();
  }, []);
  const searchOnChange = (e) => {
    setSearchFormData({
      ...searchFormData,
      [e.target.name]: e.target.value,
    });
  };
  async function searchBusTrip(e) {
     e.preventDefault();

    const token  = localStorage.getItem("token");
    if (token) {
      if (
        searchFormData.date == "" ||
        searchFormData.to == "" ||
        searchFormData.to == "none" ||
        searchFormData.from == "" ||
        searchFormData.from == "none"
      ) {
        setIsFormEmpty(true);
      } else {
        try {
          const response = await fetch(
            "https://busprojectapis.onrender.com/api/bustrips/searchtrips",
            {
              method: "POST",

              headers: {
                "Content-Type": "application/json",
              },

              body: JSON.stringify(searchFormData),
            },
          );
          const data = await response.json();
          setSearchDataList(data);
          navigate("/search");

        } catch (e) {
          console.log(e);
        }
      }
    } else {
      // e.stopPropagation()
      setOpenLoginModal(true);
    }
  }
  return (
    <>
      <form
        onSubmit={searchBusTrip}
        className={`row g-0 card-overlay border-2 shadow rounded-5 mmx-5 p-3 ${theme}`}
      >
        <div className="col-lg-4 col-md-4 col-sm-12 p-3">
          <div className=" card-border-end d-flex flex-column justify-content-around h-100 px-2">
            <div className="d-flex align-items-center">
              <img className="h-20px" src="../images/google-maps.png" alt="" />
              <h6 className="ms-2 mb-0">{t("from")}</h6>
            </div>
            <div className="d-flex align-items-center w-100">
              <select
                className="w-100 bg-transparent custom-select border-0 border-bottom py-3"
                name="from"
                id="fromcities"
                value={searchFormData.from}
                onChange={searchOnChange}
              >
                <option className="bg-teal text-white" value="none">
                  from
                </option>
                {placesList.map((place, index) => (
                  <option
                  key={place._id}
                    className="bg-teal text-white"
                    value={place.placeName}
                  >
                    {place.placeName}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12 p-3">
          <div className="card-border-end d-flex flex-column justify-content-around h-100 px-2">
            <div className="d-flex align-items-center">
              <img className="h-20px" src="../images/google-maps.png" alt="" />
              <h6 className="ms-2 mb-0">{t("to")}</h6>
            </div>
            <div className="d-flex align-items-center w-100 ">
              <select
                className="w-100 bg-transparent border-0 border-bottom py-3"
                name="to"
                id="tocities"
                value={searchFormData.to}
                onChange={searchOnChange}
              >
                <option className="bg-teal text-white" value="none">
                  to
                </option>
                {placesList.map((place, index) => (
                  <option  key={place._id}
                    className="bg-teal text-white"
                    value={place.placeName}
                  >
                    {place.placeName}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12 p-3 d-flex align-items-center">
          <div className="d-flex flex-column justify-content-around h-100 w-60 px-2">
            <div className="d-flex align-items-center">
              <img
                className="h-20px"
                src={
                  theme == "light"
                    ? "../images/calender.png"
                    : "../images/calender-white.png"
                }
                alt=""
              />
              <h6 className="ms-2 mb-0">{t("date")}</h6>
            </div>
            <div className="d-flex align-items-center w-100">
              <input
                className="w-100 bg-transparent border-0 border-bottom py-3"
                type="Date"
                name="date"
                value={searchFormData.date}
                onChange={searchOnChange}
              />
            </div>
          </div>
          <button
            type="submit"
            className="bg-teal border-0 text-white fw-semibold fst-italic w-40 h-50px rounded-4"
          >
            {t("search")}
          </button>
        </div>
      </form>
      <ToastContainer position="bottom-end" className="p-3 position-fixed">
        <Toast
          show={isFormEmpty}
          onClose={() => setIsFormEmpty(false)}
          delay={3000}
          autohide
          className="bg-danger"
        >
          <Toast.Header>
            <strong className="me-auto">Error</strong>
            <small>Just now</small>
          </Toast.Header>
          <Toast.Body className="text-white fw-semibold fst-italic">
            Search Item Can Not be Empty !!
          </Toast.Body>
        </Toast>
      </ToastContainer>
    </>
  );
}
