export default function PrivacyPolicy({ theme }) {
  return (
    <>
      <div className={`px-4 pt-2 pb-5 h-auto ${theme}`}>
        <div className="d-inline-block">
          <a href="/" className="bg-teal text-white p-2 rounded-3 text-decoration-none center-div">
            <img
              className="h-20px "
              src="../images/white-back-button.png"
              alt="back to home"
            />
            <p className="d-block me-3">Home</p>
          </a>
        </div>

        <h1 className="fst-italic fw-bold my-5">Privacy Policies </h1>
        <p>
          At Busify, we are committed to protecting the privacy and personal
          information of our users. This Privacy Policy explains how we collect,
          use, share, and safeguard your data when you use our platform to book
          bus tickets online. When you sign up or make a booking through Busify,
          we may collect personal information such as your name, email address,
          phone number, payment details, and travel preferences. This
          information is used strictly for processing your bookings, enhancing
          your user experience, sending confirmation and travel-related
          notifications, and providing customer support.
        </p>
        <br />
        <br />
        <p>
          We may also collect non-personal information such as IP addresses,
          browser type, and usage patterns to improve our website functionality,
          customize content, and enhance security. Cookies may be used to
          remember your preferences and optimize your browsing experience. You
          have the option to manage cookie settings through your browser at any
          time.
        </p>
        <br />
        <br />
        <p>
          By using Busify, you consent to the collection and use of your
          information as outlined in this policy. We reserve the right to update
          or modify this Privacy Policy as needed to comply with legal or
          regulatory changes or to improve our practices. Any significant
          updates will be communicated to users clearly and promptly. If you
          have any questions or concerns about your privacy, you can contact our
          support team at busify@gmail.com. Busify
        </p>
        <br />
        <br />
      </div>
    </>
  );
}
