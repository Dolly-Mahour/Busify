export default function CancellationPolicy({ theme }) {
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

        <h1 className="fst-italic fw-bold my-5">Cancellations Policies</h1>
        <p>
          At Busify, we understand that travel plans can change. Our
          Cancellation Policy is designed to be transparent and fair to all our
          users. You can cancel your bus ticket bookings through our website or
          app, provided the cancellation is made before the cut-off time set by
          the respective bus operator. Each operator may have different rules
          regarding cancellation windows and refund eligibility, which will be
          displayed at the time of booking.
        </p>
        <br />
        <br />
        <p>
          Cancellation charges may apply as per the operator’s policy, and
          Busify may charge a small processing fee in some cases. Refunds for
          eligible cancellations will be processed back to your original payment
          method within 5–7 business days, depending on your bank or payment
          provider.
        </p>
        <br />
        <br />
        <p>
          Please note that last-minute cancellations, no-shows, or missed buses
          due to personal delays may not be eligible for any refund. Busify will
          not be responsible for cancellations caused by unforeseen events such
          as natural disasters, strikes, or operator-specific issues, though we
          will do our best to assist you.
        </p>
        <br />
        <br />
        <p>
          By booking bus from busify you acknowledge and agree to this
          Cancellation Policy. for any question or support with cancellation ,
          please contact our customer service at busify@gmail.com
        </p><br /><br />
      </div>
    </>
  );
}
