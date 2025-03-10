import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import coma from "../assets/img/coma.svg";
// import { tr } from 'framer-motion/client';
import '../assets/styles/style.css';

const testimonials = [
  {
    id: 1,
    name: 'Rashmi Cadambi',
    platform: 'Facebook',
    text: "I've tried numerous brands, but none compare to this one! From its exceptional absorbency to its comfortable fit, I finally feel confident during that time of the month. thank you for creating such an amazing product!",
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80'
  },
  {
    id: 2,
    name: 'Gourav Theja',
    platform: 'Facebook',
    text: "I've tried numerous brands, but none compare to this one! From its exceptional absorbency to its comfortable fit, I finally feel confident during that time of the month. thank you for creating such an amazing product!",
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80'
  },
  {
    id: 3,
    name: 'Rashmi sha',
    platform: 'Facebook',
    text: "I've tried numerous brands, but none compare to this one! From its exceptional absorbency to its comfortable fit, I finally feel confident during that time of the month. thank you for creating such an amazing product!",
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80'
  }
];

const Testimonials = () => {
  const slider = React.useRef<Slider | null>(null);
  const [isPaused, setIsPaused] = React.useState(false);




  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  const handlePrev = () => {
    if (slider.current) {
      setIsPaused(true);
      slider.current.slickPrev();
      // Resume autoplay after 5 seconds of inactivity
      setTimeout(() => setIsPaused(false), 5000);
    }
  };

  const handleNext = () => {
    if (slider.current) {
      setIsPaused(true);
      slider.current.slickNext();
      // Resume autoplay after 5 seconds of inactivity
      setTimeout(() => setIsPaused(false), 5000);
    }
  };

  // Effect to handle autoplay pause/resume
  React.useEffect(() => {
    if (slider.current) {
      if (isPaused) {
        slider.current.slickPause();
      } else {
        slider.current.slickPlay();
      }
    }
  }, [isPaused]);



  return (
    <>
      <Helmet>
        <title>Customer Testimonials - Fanapo</title>
        <meta name="description" content="See what our customers are saying about Fanapo products" />
      </Helmet>
      <section className="py-16 bg-[#FFFFFF]">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12 max-w-7xl mx-auto ">
            <div>
              <h1 className=" text-3xl md:text-5xl font-bold text-center md:text-left ">
                1k+ <span className="text-[#E91E63]">Customers Love</span>
              </h1>
              <p className='text-[#1F161A] font-normal text-[14px] md:text-xl mt-4 text-center md:text-left'>Join over 1,000 happy customers who trust and love our products! With top-notch quality, excellent service, <br /> and a commitment to customer satisfaction, we take pride in delivering the best experience</p>
            </div>
            <div className="hidden md:flex md:gap-4  ">
              <button
                onClick={handlePrev}
                className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50"
              >
                <ChevronLeft className="w-6 h-6 text-[#E91E63]" />
              </button>
              <button
                onClick={handleNext}
                className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50"
              >
                <ChevronRight className="w-6 h-6 text-[#E91E63]" />
              </button>
            </div>
          </div>

          <div className="relative overflow-hidden">
            <Slider ref={slider} {...settings}>
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="px-4">
                  <div className="bg-[#FFF7F2] p-6 rounded-xl shadow-md">
                    <div className="flex justify-between items-center gap-4 mb-4">
                      <div className='flex items-center gap-4'>
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div>
                          <h3 className="font-semibold">{testimonial.name}</h3>
                          <p className="text-gray-500 text-sm">{testimonial.platform}</p>
                        </div>
                      </div>
                      <div>
                        <img src={coma} alt="coma" />
                      </div>
                    </div>
                    <p className="text-gray-600">{testimonial.text}</p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;