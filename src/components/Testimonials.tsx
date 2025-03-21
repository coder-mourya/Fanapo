import React from 'react';
// import { Helmet } from 'react-helmet-async';
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
    name: 'Rashmi Cadambi,',
    age: '25yrs',
    designation: 'ICICI employee',
    text: "The best part of Fanapo is that it is ETO sterilized which was the main reason for me to buy this product; Nice individual packing of each pad"
    
  },
  {
    id: 2,
    name: 'Vidhi gupta,',
    age: '30yrs',
    designation: 'B.sc student',
    text: "It was so easy and handy to carry a single pad in my purse without any worry of it being exposed to any germs because each pad is packed in an envelope type of packing.",
   
  },
  {
    id: 3,
    name: 'Sonia kapoor,',
    age: '35yrs',
    designation: 'House wife',
    text: "Fanapo pads are extremely soft and comfortable. They leave no irritation even during heavy flow days",
    
  },
  {
    id: 4,
    name: 'Anu sethi, ',
    age: '40yrs',
    designation: 'Business women',
    text: "Pads have a pleasant smell, having no odour problem; Pads stick well, which makes me carefree while working for long hours."
  }, 
  {
    id: 5,
    name: 'Pooja bhist, ',
    age: '22yrs',
    designation: 'Student',
    text: "Bought Fanapo sanitary napkin and I feel they are good quality and well-priced. I feel the product is softer than other brands and prevents me from rashes."
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
      {/* <Helmet>
        <title>Customer Testimonials - Fanapo</title>
        <meta name="description" content="See what our customers are saying about Fanapo products" />
      </Helmet> */}
      <section className="py-16 bg-[#FFFFFF]">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12 max-w-7xl mx-auto ">
            <div>
              <h1 className=" text-3xl md:text-5xl font-bold text-center md:text-left ">
                1k+ <span className="text-[#E91E63]">Customers Reviews</span>
              </h1>
              <p className='text-[#1F161A] font-normal text-[14px] md:text-xl mt-4 text-center md:text-left'>Join over 1,000 happy customers who trust and love our product!</p>
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
                  <div className="bg-[#FFF7F2] p-6 rounded-xl shadow-md h-56">
                    <div className="flex justify-between items-center gap-4 mb-4">
                      <div className='flex items-center gap-4'>
                        
                        <div>
                          <h3 className="font-semibold text-lg">{testimonial.name} <span className='text-[16px] font-normal text-[#4F5163]'>{testimonial.age}</span> </h3>
                          <p className="text-gray-500 text-sm">{testimonial.designation}</p>
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