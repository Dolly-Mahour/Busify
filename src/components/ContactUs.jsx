export default function ContactUs({ theme }) {
  return (
    <>
      <div className={`px-4 py-5 h-auto ${theme}`}>
        <div className=" d-inline-block">
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

        <h1 className="fst-italic fw-bold my-5">Contact Us</h1>
        <p>
          At Busify, we value your feedback, questions, and concerns. Whether
          you need help with a booking, have a question about a route, or want
          to share your travel experience, our team is here to assist you. Your
          satisfaction is important to us, and we strive to provide prompt and
          helpful support.
        </p>
        <br />
        <br />
        <p>
          You can reach out to us via email at [your support email] or call our
          customer service helpline at 11142XXX90 between 11 a.m. to 6 p.m.,
          Monday to Saturday. We also encourage you to use the Contact Form on
          our website for inquiries, suggestions, or complaints. Our team
          typically responds within 24 to 48 hours.
        </p>
        <br />
        <br />
        <h5 className="fw-bold fst-italic">
          Thank you for choosing Busify. We’re here to make your travel smooth,
          secure, and hassle-free.
        </h5>
        <br />
        <br />
      </div>
    </>
  );
}
