import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import "./AddsCarousel.css";
class carouselSlides {
  constructor(heading, description) {
    this.heading = heading;
    this.description = description;
  }
}
export default function AddsCarousel() {
  // const slides = [1, 2, 3, 4, 5, 6];
  const slides = [
    new carouselSlides("Volvo", 1200),
    new carouselSlides("Sleeper", 900),
    new carouselSlides("AC Deluxe", 1500),
    new carouselSlides("Volvo", 1200),
    new carouselSlides("Sleeper", 900),
    new carouselSlides("AC Deluxe", 1500),
  ];
  return (
    <div className="container-fluid g-0 py-5 text-center">
      <h1 className="fw-bold">Enjoy your travel experience with us</h1>
      <h4 className="py-2 text-body-tertiary">
        Book your adventure, pack your bags and let the exploration begin
      </h4>
      <div className="px-4">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={3}
          autoplay={{ delay: 4000 }}
          loop={true}
        >
          {slides.map((item, index) => (
            <SwiperSlide className="p-3">
              <div className="carouselCard bg-warning">{item.heading}</div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
