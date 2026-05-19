import { useEffect, useState } from "react";
import SearchCard from "./SearchCard";
export default function SearchPage({
  theme,
  setOpenLoginModal,
  isUserLoggedIn,
  searchDataList,
  setSearchDataList,
}) {
  const [searchDataListCopy, setSearchDataListCopy] = useState(searchDataList);
  useEffect(() => {
    setSearchDataListCopy(searchDataList);
  }, [searchDataList]);
  function sortAscending() {
    const sortedData = [...searchDataListCopy].sort(
      (a, b) => a.ticketPrice - b.ticketPrice,
    );

    setSearchDataListCopy(sortedData);
  }
  function sortAscendingDeparture() {
    const sortedData = [...searchDataListCopy].sort((a, b) => {
      const timeA = new Date(`1970/01/01 ${a.departureTime}`);
      const timeB = new Date(`1970/01/01 ${b.departureTime}`);

      return timeA - timeB;
    });

    setSearchDataListCopy(sortedData);
  }
  function sortDescendingDeparture() {
    const sortedData = [...searchDataListCopy].sort((a, b) => {
      const timeA = new Date(`1970/01/01 ${a.departureTime}`);
      const timeB = new Date(`1970/01/01 ${b.departureTime}`);

      return timeB - timeA;
    });

    setSearchDataListCopy(sortedData);
  }
  function sortDescendingRemainingSeats() {
    const sortedData = [...searchDataListCopy].sort(
      (a, b) => b.remainingSeats - a.remainingSeats,
    );

    setSearchDataListCopy(sortedData);
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
        <h1 className="fst-italic fw-bold my-5 center-div">Search Trips</h1>
        <div className="position-relative setCardPosition">
          <SearchCard
            searchDataList={searchDataList}
            setSearchDataList={setSearchDataList}
            theme={theme}
            setOpenLoginModal={setOpenLoginModal}
            isUserLoggedIn={isUserLoggedIn}
          ></SearchCard>
          {searchDataList.length > 0 ? (
            <div className="row g-0 justify-content-between px-2 pb-5">
              <div className="col-lg-5 px-3 col-md-4 col-sm-12 ">
                <div className="card d-flex text-black flex-column justify-content-between p-4 mpx-5 bg-search-card rounded-4">
                  <h5 className="fst-italic">Sort by -</h5>
                  <div className="d-flex justify-content-between align-items-center py-3">
                    <p>Price low to high</p>
                    <input
                      className="form-check-input"
                      type="radio"
                      name="exampleRadio"
                      id="exampleRadios1"
                      value="option1"
                      onClick={sortAscending}
                    />
                  </div>
                  <div className="d-flex justify-content-between align-items-center py-3">
                    <p>Early departure</p>
                    <input
                      className="form-check-input"
                      type="radio"
                      name="exampleRadio"
                      id="exampleRadios3"
                      value="option1"
                      onClick={sortAscendingDeparture}
                    />
                  </div>
                  <div className="d-flex justify-content-between align-items-center py-3">
                    <p>Late Departure</p>
                    <input
                      className="form-check-input"
                      type="radio"
                      name="exampleRadio"
                      id="exampleRadios4"
                      value="option1"
                      onClick={sortDescendingDeparture}
                    />
                  </div>
                  <div className="d-flex justify-content-between align-items-center py-3">
                    <p>Remaining seats high to low</p>
                    <input
                      className="form-check-input"
                      type="radio"
                      name="exampleRadio"
                      id="exampleRadios5"
                      value="option1"
                      onClick={sortDescendingRemainingSeats}
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-7 col-md-8 col-sm-12 px-3">
                {searchDataListCopy.map((trip, index) => (
                  <div className="card p-3 mb-5 rounded-4 bg-search-card">
                    <div className="h-100px d-flex justify-content-between align-items-center">
                      <div className="d-flex align-items-center">
                        <div className="profile-icon rounded-circle">
                          <img className="h-100 w-100 rounded-circle" src="../images/profile-bus.png" alt="" />
                        </div>
                        <div className="ms-2">
                          <p className="fw-semibold fst-italic">
                            {trip.operator}
                          </p>
                          <p>type - {trip.type}</p>
                          <p>total seats - {trip.totalSeats}</p>
                        </div>
                      </div>
                      <div className="center div">
                        <button className="bg-warning text-white border rounded-2 center-div">
                          <img
                            className="h-10px"
                            src="../images/white-star.png"
                            alt=""
                          />
                          <p className="ps-2">4</p>
                        </button>
                        <p className="text-secondary fs-vs">120 reviews</p>
                      </div>
                      <div>
                        <p className="text-end fw-bold fst-italic">
                          ₹{trip.ticketPrice}
                        </p>
                        <p className="text-secondary text-end">per seat</p>
                      </div>
                    </div>
                    <div className="h-100px d-flex align-items-center justify-content-between">
                      <img
                        className="h-70px mx-3"
                        src="../images/busifyBus.png"
                        alt=""
                      />
                      <div>
                       <div className="center-div">
                         -----
                        <img
                          className="h-10px"
                          src="../images/smallBus.png"
                          alt=""
                        />
                        -----
                       </div>
                        <p className="fs-vs d-flex">Remaining seats - <p className="fw-bold">{trip.remainingSeats}</p> </p>
                      </div>
                      <button className="bg-teal text-white px-3 p-2 fw-semibold fst-italic border-0 rounded-3">
                        Book now
                      </button>
                    </div>
                    <div className="h-100px d-flex justify-content-between align-items-center">
                      <div>
                        <p>{trip.departureTime}</p>
                        <p>{new Date(trip.fromDate).toLocaleDateString()}</p>
                        <p className="fst-italic fw-semibold">{trip.from}</p>
                      </div>

                      <div>
                        <p className="text-end">{trip.arrivalTime}</p>
                        <p className="text-end">
                          {new Date(trip.toDate).toLocaleDateString()}
                        </p>
                        <p className="text-end fst-italic fw-semibold">
                          {trip.to}
                        </p>
                      </div>
                    </div>
                    <div className="center-div">
                      <a
                        className="fst-italic fw-semibold text-center text-decoration-none text-black text-center"
                        href="/cancellationposlicy"
                      >
                        Cancellation policies
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className={`noTripFound  ${theme}`}>
              <h4 className="text-center fst-italic fs-semibold">
                Oops !! no bus trip found with this match
              </h4>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
