import { Swiper, SwiperProps, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar } from "swiper/modules";

import "swiper/css";
import "./Carrousel.scss";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
type CarrouselProps<T> = {
  items: T[];
  renderItem: (item: T) => JSX.Element;
  className?: string;
  swiperProps: SwiperProps;
};
const Carrousel = <T,>({
  items,
  renderItem,
  swiperProps,
}: CarrouselProps<T>) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar]}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      className="swiper"
      {...swiperProps}
    >
      {items.map((item, index) => (
        <SwiperSlide className="slide" key={index}>
          {renderItem(item)}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carrousel;
