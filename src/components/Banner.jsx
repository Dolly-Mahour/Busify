import { useEffect, useState } from "react";
import "./Banner.css";
export default function Banner({theme,setTheme}) {
  const [placesList,setPlacesList] = useState([]);
  useEffect( () => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:5000/api/places');
      const result = await response.json();
      console.log("this is the data of places",result);
      setPlacesList(result);
    };
    fetchData();
  },[]);
  return (
    <>
      <div className={`g-0 h-75 bannerBgImage pb-5 mb-5 ${theme}`}>
        <div className="h-100 row g-0">
          <div className="col-lg-6 col-md-6 col-sm-12 d-lg-flex d-md-flex d-none h-100 p-4"></div>
          <div className="col-lg-6 col-md-6 col-sm-12 h-100 d-flex flex-column justify-content-center align-items-center px-5">
            <h1 className="py-3 fw-bold text-center bannerText fst-italic">
              Online Bus Ticket Booking
            </h1>
            <h3 className="text-center py-3 bannerText fst-italic">
              Embark on a seamless travel experience with Busify
            </h3>
            <button className="outline-0  border-0 banner-button my-3 rounded-pill p-2 px-4">
              Book now
            </button>
          </div>
        </div>
        <div className={`row g-0 card-overlay border-2 shadow rounded-5 mx-5 p-3 ${theme}`}>
        <div className="col-lg-4 col-md-4 col-sm-12 p-3">
          <div className=" card-border-end d-flex flex-column justify-content-around h-100 px-2">
            <div className="d-flex align-items-center">
              <img className="h-20px" src="../images/google-maps.png" alt="" />
              <h6 className="ms-2 mb-0">From</h6>
            </div>
            <div className="d-flex align-items-center w-100">
              <select
                className="w-100 bg-transparent custom-select border-0 border-bottom py-3"
                name="fromcities"
                id="fromcities"
              >
                <option className="bg-teal text-white" value="none">from</option>
                {placesList.map((place,index)=>(
                  <option className="bg-teal text-white" value={place.placeName}>{place.placeName}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12 p-3">
          <div className="card-border-end d-flex flex-column justify-content-around h-100 px-2">
            <div className="d-flex align-items-center">
              <img className="h-20px" src="../images/google-maps.png" alt="" />
              <h6 className="ms-2 mb-0">To</h6>
            </div>
            <div className="d-flex align-items-center w-100 ">
              <select
                className="w-100 bg-transparent border-0 border-bottom py-3"
                name="tocities"
                id="tocities"
              >
                <option className="bg-teal text-white" value="none">to</option>
                {placesList.map((place,index)=>(
                  <option className="bg-teal text-white" value={place.placeName}>{place.placeName}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12 p-3 d-flex align-items-center">
          <div className="d-flex flex-column justify-content-around h-100 w-60 px-2">
            <div className="d-flex align-items-center">
              <img className="h-20px" src={
                theme=="light"?"../images/calender.png":"../images/calender-white.png"
              } alt="" />
              <h6 className="ms-2 mb-0">Date</h6>
            </div>
            <div className="d-flex align-items-center w-100">
              <input className="w-100 bg-transparent border-0 border-bottom py-3" type="Date" />
            </div>
          </div>
          <button className="bg-teal border-0 text-white fw-semibold fst-italic w-40 h-50px rounded-4">Search</button>
        </div>
      </div>
      </div>
      
    </>
  );
}
