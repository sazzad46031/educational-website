import { useEffect, useState } from "react";
import SingleTestimonial from "./SingleTestimonial";

const Testimonial = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("testimonial.json")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);
  return <div className="max-w-screen-xl mx-auto pt-16">
    <h2 className="text-[#20262C] font-extrabold text-[2.5rem] pb-12">What our clients say</h2>
    
    <div className="grid grid-cols-3 gap-10 max-w-screen-xl mx-auto">
    {
        items.map(item => <SingleTestimonial key={item.id} item={item}></SingleTestimonial>)
    }
    </div>
  </div>;
};

export default Testimonial;
