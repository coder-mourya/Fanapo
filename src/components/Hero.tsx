import { Helmet } from 'react-helmet-async';
import { Carousel } from 'antd';
import '../assets/styles/style.css';
import img1 from "../assets/img/Default.jpg";
import img2 from "../assets/img/Variant2.jpg";
import img3 from '../assets/img/Variant3.jpg';

const Hero = () => {
  return (
    <>
      <Helmet>
        <title>Fanapo - Premium Feminine Hygiene Products</title>
        <meta name="description" content="Embrace each cycle with our pads that offer unmatched confidence and comfort" />
      </Helmet>
      <section className="relative hero-section md:min-h-screen flex flex-col">
        <div className="w-full">
          <div className="max-w-7xl mx-auto px-4 md:px-0">
            <header className="flex items-center justify-between md:px-4 pb-4 pt-8">
              <h2 className="text-4xl md:text-6xl logo font-bold text-[#D70283]">FANAPO</h2>
              <button className="bg-[#D70283] text-white px-6 py-2 rounded-full hover:bg-[#D81B60] transition-colors">
                Contact Us
              </button>
            </header>
          </div>
          <div className="container mx-auto flex flex-col items-center flex-grow">
            <div className="w-full  mx-auto">
              <Carousel autoplay className="w-full">
                <div className="md:h-screen flex justify-center">
                  <img src={img1} alt="Variant 1" className="w-full  md:h-full object-cover" />
                </div>
                <div className="md:h-screen flex justify-center">
                  <img src={img2} alt="Variant 2" className="w-full  md:h-full object-cover" />
                </div>
                <div className="md:h-screen flex justify-center">
                  <img src={img3} alt="Variant 3" className="w-full  md:h-full object-cover" />
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
