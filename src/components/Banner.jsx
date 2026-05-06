import "./Banner.css" ;
export default function Banner() {
  return (
    <>
      <div className="container-fluid g-0 h-70 bannerBgImage" >
        <div className="row g-0 h-100">
          <div className="col-5 h-100 p-4">
          </div>
          <div className="col-7 h-100 d-flex flex-column justify-content-center align-items-center px-5">
            <h1 className="py-3 fw-bold">Online Bus Ticket Booking</h1>
            <h2 className="text-center py-3">
              Embark on a seamless travel experience with Busify
            </h2>
            <button className="btn btn-primary my-3 rounded-pill p-2 px-4">
              Book now
            </button>
          </div>
        </div>
      </div>
      <div className="Card card-overlay h-20 bg-warning rounded-5 border mx-5"></div>
    </>
  );
}
