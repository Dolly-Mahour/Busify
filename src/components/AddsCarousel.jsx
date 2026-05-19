import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import "./AddsCarousel.css";
import { useTranslation } from "react-i18next";

class carouselSlides {
  constructor(heading, description, bgColor, fontBtnColor) {
    this.heading = heading;
    this.description = description;
    this.bgColor = bgColor;
    this.fontBtnColor = fontBtnColor;
  }
}
export default function AddsCarousel({theme,setTheme}) {
   const { t ,i18n } = useTranslation();
  const slides = [
    new carouselSlides(
      "card1Heading",
      "card1Description",
      "#ede8fc",
      "#4f29d2",
    ),
    new carouselSlides(
      "card2Heading",
      "card2Description",
      "#feefef",
      "#fd5351",
    ),
    new carouselSlides(
      "card3Heading",
      "card3Description",
      "#edf9f1",
      "#02a66a",
    ),
    new carouselSlides(
      "card4Heading",
      "card4Description",
      "#f0f6fe",
      "#0966ee",
    ),
    new carouselSlides(
      "card5Heading",
      "card5Description",
      "#fef3e5",
      "#fd9104",
    ),
    new carouselSlides(
      "card6Heading",
      "card6Description",
      "#f2effc",
      "#6240e2",
    ),
  ];
  return (
    <div className={`container-fluid g-0 padding-top pb-5 text-center after-search-card-div ${theme}`} >
      <div className="mpx-5 py-5">
        <h1 className="fw-bold fst-italic">
          {t("carouselHeading1")}
        </h1>
        <h5 className="py-2 fst-italic">
          {t("carouselHeading2")}
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
                    {t(item.heading)}
                  </h5>
                  <p>{t(item.description)}</p>
                  <button
                    className="btn rounded-pill d-flex center-div p-2 px-4"
                    style={{ background: item.fontBtnColor }}
                  >
                    <p className="text-white fw-bold">{t("viewbus")}</p>
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
