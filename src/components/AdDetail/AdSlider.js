// import Swiper core and required modules
import { Navigation } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import Container from "../../ui/Container";

const AdSlider = ({ data }) => {
  return (
    <Container className="margin-top-large-medium small-padding">
      <div className="slider">
        <Swiper
          // install Swiper modules
          modules={[Navigation]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        >
          {data.images.map((image) => {
            return (
              <SwiperSlide key={image} className="img__container">
                <img className="img" src={image} alt="Car"></img>
              </SwiperSlide>
            );
          })}
          {data.images.length === 0 && (
            <SwiperSlide className="img__container">
              <img
                className="img"
                src={
                  "https://firebasestorage.googleapis.com/v0/b/car-finder-e01fa.appspot.com/o/images%2Fno-image.jpg?alt=media&token=3c92ce45-a8ea-4cea-8fba-305618d72505"
                }
                alt="Car"
              ></img>
            </SwiperSlide>
          )}
        </Swiper>
        <p className="slider__description">
          {`${data.manu} ${data.model} ${data.mark}`}
        </p>
        <p className="slider__price">{data.price} €</p>
      </div>
    </Container>
  );
};

export default AdSlider;
