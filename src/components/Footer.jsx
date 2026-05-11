import Logo from "./Logo";

export default function Footer() {
  return (
    <>
      <div className="w-100">
        <div className="d-flex justify-content-center">
          <Logo></Logo>
        </div>
        <div className="d-flex row g-0 justify-content-around align-items-center px-5 py-3">
          <div className="center-div my-2 col-lg-4 col-ms-4 col-sm-12">
            <img className="h-20px" src="../images/email.png" alt="email" />
            <p>hello@probusify.com</p>
          </div>
          <div className="center-div my-2 col-lg-4 col-ms-4 col-sm-12">
            <img className="h-20px" src="../images/phone.png" alt="call" />
            <p>+91 98475984558</p>
          </div>
          <div className="center-div my-2 col-lg-4 col-ms-4 col-sm-12">
            <img className="h-20px" src="../images/location.png" alt="map" />
            <p>India</p>
          </div>
        </div>
        <hr />
        <div className="center-div mb-4">
          <div className="Social-Icon">
            <a className="SocialMedia-Link" href="https://x.com/">
              <img
                className="img-fluid h-50 w-50"
                src="../images/twitter.png"
                alt="lgo_end"
              />
            </a>
          </div>
          <div className="Social-Icon">
            <a className="SocialMedia-Link" href=" https://www.instagram.com/ ">
              <img
                className="img-fluid  h-50 w-50"
                src="../images/instagram.png"
                alt="lgo_end"
              />
            </a>
          </div>
          <div className="Social-Icon">
            <a className="SocialMedia-Link" href="https://www.facebook.com/ ">
              <img
                className="img-fluid  h-50 w-50"
                src="../images/facebook.png"
                alt="lgo_end"
              />
            </a>
          </div>
          <div className="Social-Icon">
            <a className="SocialMedia-Link" href="https://www.pinterest.com/ ">
              <img
                className="img-fluid h-50 w-50"
                src="../images/pinterest.png"
                alt="lgo_end"
              />
            </a>
          </div>
          <div className="Social-Icon">
            <a className="SocialMedia-Link" href="https://www.tiktok.com/ ">
              <img
                className="img-fluid h-50 w-50"
                src="../images/tik-tok.png"
                alt="lgo_end"
              />
            </a>
          </div>
          <div className="Social-Icon">
            <a className="SocialMedia-Link" href="https://www.google.com/">
              <img
                className="img-fluid h-50 w-50"
                src="../images/search.png"
                alt="lgo_end"
              />
            </a>
          </div>
          <div className="Social-Icon">
            <a className="SocialMedia-Link" href="https://www.whatsapp.com/">
              <img
                className="img-fluid h-50 w-50"
                src="../images/whatsapp.png"
                alt="lgo_end"
              />
            </a>
          </div>
        </div>
        <div className="center-div">
          <div className="w-lg-25 w-md-50 w-sm-100   fs-6 mb-3">
            <div id="copyright_footer" className="p-0 fw-bold mb-0 text-center text-body-tertiary">
              Copyright © Make it Busify | Designed by make it services-Powered
              by busify
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
