import { Swiper, SwiperProps, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./Carrousel.scss";
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
    <Swiper className="swiper" {...swiperProps}>
      {items.map((item, index) => (
        <SwiperSlide className="slide" key={index}>
          {renderItem(item)}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carrousel;
