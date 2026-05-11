import "./Banner.css";
export default function Banner() {
  return (
    <>
      <div className="g-0 h-75 bannerBgImage">
        <div className="row g-0 h-100">
          <div className="col-lg-6 col-md-6 col-sm-12 d-lg-flex d-md-flex d-none h-100 p-4"></div>
          <div className="col-lg-6 col-md-6 col-sm-12 h-100 d-flex flex-column justify-content-center align-items-center px-5">
            <h1 className="py-3 fw-bold text-center bannerText fst-italic">
              Online Bus Ticket Booking
            </h1>
            <h3 className="text-center py-3 bannerText fst-italic">
              Embark on a seamless travel experience with Busify
            </h3>
            <button className="btn btn-primary my-3 rounded-pill p-2 px-4">
              Book now
            </button>
          </div>
        </div>
      </div>
      <div className="Card row g-0 card-overlay h-auto bg-white border-2 shadow rounded-5 border mx-5 p-3">
        <div className="col-lg-4 col-md-4 col-sm-12 p-3">
          <div className="border-end d-flex flex-column justify-content-around h-100 px-2">
            <div className="d-flex align-items-center">
              <img className="h-20px" src="../images/google-maps.png" alt="" />
              <h6 className="ms-2 mb-0">From</h6>
            </div>
            <div className="d-flex align-items-center w-100">
              <select
                className="w-100 bg-transparent border-0 border-bottom py-3"
                name="cars"
                id="cars"
              >
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
              </select>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12 p-3">
          <div className="border-end d-flex flex-column justify-content-around h-100 px-2">
            <div className="d-flex align-items-center">
              <img className="h-20px" src="../images/google-maps.png" alt="" />
              <h6 className="ms-2 mb-0">From</h6>
            </div>
            <div className="d-flex align-items-center w-100">
              <select
                className="w-100 bg-transparent border-0 border-bottom py-3"
                name="cars"
                id="cars"
              >
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
              </select>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12 p-3 d-flex align-items-center">
          <div className="d-flex flex-column justify-content-around h-100 w-60 px-2">
            <div className="d-flex align-items-center">
              <img className="h-20px" src="../images/calender.png" alt="" />
              <h6 className="ms-2 mb-0">Date</h6>
            </div>
            <div className="d-flex align-items-center w-100">
              <input className="w-100 bg-transparent border-0 border-bottom py-3" type="Date" />
            </div>
          </div>
          <button className="btn btn-primary w-40 h-50px rounded-4">Search</button>
        </div>
      </div>
    </>
  );
}
