export default function TermAndConditions({ theme }) {
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
            <p className="d-blockme-3">Home</p>
          </a>
        </div>

        <h1 className="fst-italic fw-bold my-5">Term & Conditions</h1>
        <p>
          Welcome to Busify, your trusted platform for booking bus tickets
          online. By accessing or using our website and services, you agree to
          be bound by these Terms and Conditions. Please read them carefully
          before making a booking. These terms constitute a legally binding
          agreement between you (the user) and Busify regarding your use of our
          services.
        </p>
        <br />
        <br />
        <p>
          Busify acts as an intermediary between passengers and bus operators,
          facilitating the booking of tickets based on information provided by
          third-party transport providers. While we strive to ensure accuracy,
          we do not guarantee the availability, punctuality, or quality of
          services provided by the bus operators. Users are responsible for
          verifying the travel details before confirming their booking.
        </p>
        <br />
        <br />
        <p>
          All bookings made through Busify are subject to availability and the
          terms and cancellation policies of the respective bus operators.
          Refunds, changes, or cancellations will be processed in accordance
          with the policies of the service provider and Busify’s own refund
          terms, which may include applicable service charges.
        </p>
        <br />
        <br />
        <p>
          You agree to provide accurate, complete, and up-to-date information
          when registering or booking tickets on our platform. Any misuse,
          fraudulent activity, or violation of these terms may result in the
          suspension or termination of your access to our services.
        </p>
        <br />
        <br />
        <p>
          All content on Busify, including logos, text, images, and software, is
          the intellectual property of Busify or its licensors and may not be
          reproduced, distributed, or used without prior written permission.
          Busify reserves the right to modify these Terms and Conditions at any
          time. Changes will be effective upon posting on the website, and your
          continued use of the platform constitutes acceptance of those changes.
          We encourage users to review the terms periodically If you have any
          questions regarding these terms or your rights as a user, please
          contact our support team at busify@gmail.com
        </p>
        <br /><br />
      </div>
    </>
  );
}
