import { useEffect, useState } from "react";
import SingleTestimonial from "./SingleTestimonial";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import { FreeMode} from 'swiper/modules';
import { Navigation } from 'swiper/modules';
import './Testimonial.css'
const Testimonial = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("testimonial.json")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);
  return <div className="max-w-screen-xl mx-auto pt-16">
    <h2 className="text-[#20262C] font-extrabold text-[2.5rem] pb-12">What our clients say</h2>
    
    <Swiper
          slidesPerView={3}
          spaceBetween={30} 
          navigation={{
            clickable: true,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1
            },
            480: {
              slidesPerView: 3,
            },
          }}
          modules={[FreeMode,Navigation]}
          className='mySwiper'
        >
          {items.map((item) => (
            <SwiperSlide key={item.id}>
              <SingleTestimonial item={item}></SingleTestimonial>
            </SwiperSlide>
          ))}
        </Swiper>
  </div>;
};

export default Testimonial;
