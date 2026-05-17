import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import "./AddsCarousel.css";
class carouselSlides {
  constructor(heading, description, bgColor, fontBtnColor) {
    this.heading = heading;
    this.description = description;
    this.bgColor = bgColor;
    this.fontBtnColor = fontBtnColor;
  }
}
export default function AddsCarousel({theme,setTheme}) {
  const slides = [
    new carouselSlides(
      "Travel Made Easy",
      "Book buses quickly with a smooth and hassle-free experience across multiple destinations.",
      "#ede8fc",
      "#4f29d2",
    ),
    new carouselSlides(
      "Fastest Booking",
      "Reserve your seats instantly in just a few clicks with our lightning-fast booking system.",
      "#feefef",
      "#fd5351",
    ),
    new carouselSlides(
      "Best Deals & Discounts",
      "Unlock exclusive offers, cashback rewards, and exciting discounts on every journey.",
      "#edf9f1",
      "#02a66a",
    ),
    new carouselSlides(
      "Secure Payments",
      "Enjoy 100% safe and encrypted transactions with trusted payment gateways.",
      "#f0f6fe",
      "#0966ee",
    ),
    new carouselSlides(
      "Wide Network",
      "Travel across cities seamlessly with our extensive network of premium bus operators.",
      "#fef3e5",
      "#fd9104",
    ),
    new carouselSlides(
      "24/7 Customer Support",
      "Our dedicated support team is always available to assist you anytime, anywhere.",
      "#f2effc",
      "#6240e2",
    ),
  ];
  return (
    <div className={`container-fluid g-0 pb-5 text-center after-search-card-div ${theme}`} >
      <div className="px-5 py-5">
        <h1 className="fw-bold fst-italic">
          Enjoy your travel experience with us
        </h1>
        <h5 className="py-2 fst-italic">
          Book your adventure, pack your bags and let the exploration begin
        </h5>
      </div>
      <div className="px-4 text-black">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={3}
          autoplay={{ delay: 4000 }}
          loop={true}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            576: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            992: {
              slidesPerView: 3,
            },
            1200: {
              slidesPerView: 3,
            },
          }}
        >
          {slides.map((item, index) => (
            <SwiperSlide className="p-3">
              <div
                className="carouselCard p-3 row g-0"
                style={{ background: item.bgColor }}
              >
                <div className="col-7 d-flex flex-column justify-content-around align-items-center">
                  <h5 className="fw-bold fst-italic text-center">
                    {item.heading}
                  </h5>
                  <p>{item.description}</p>
                  <button
                    className="btn rounded-pill d-flex center-div p-2 px-4"
                    style={{ background: item.fontBtnColor }}
                  >
                    <p className="text-white fw-bold">View Bus</p>
                    <img
                      className="h-20px mx-3"
                      src="../images/arrow-right.png"
                      alt=""
                    />
                  </button>
                </div>
                <div className="col-5 h-100 center-div">
                  <img
                    className="h-50 w-100"
                    src="../images/busifyBus.png"
                    alt=""
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
