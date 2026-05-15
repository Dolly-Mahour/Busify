export default function Profile({ theme }) {
  return (
    <>
      <div className={`px-4 py-5 h-auto ${theme}`}>
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
      </div>
    </>
  );
}
