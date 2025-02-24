import { Helmet } from 'react-helmet-async';
import woman from "../assets/img/woman.png";
import Flowerpic from '../assets/img/flower.png';
import '../assets/styles/style.css';

const Hero = () => {
  return (
    <>
      <Helmet>
        <title>Fanapo - Premium Feminine Hygiene Products</title>
        <meta name="description" content="Embrace each cycle with our pads that offer unmatched confidence and comfort" />
      </Helmet>
      <section className="relative hero-section min-h-screen  flex flex-col">
        <div className="max-w-7xl mx-auto px-4 md:px-0">
          <header className="flex items-center justify-between md:px-4  pt-8">
            <h2 className="text-4xl md:text-6xl logo font-bold text-[#D70283]">FANAPO</h2>
            <button className="bg-[#D70283] text-white px-6 py-2 rounded-full hover:bg-[#D81B60] transition-colors">
              Contact Us
            </button>
          </header>
          <div className="container mx-auto  py-16 flex flex-col md:flex-row items-center justify-between flex-grow">
            <div className=" relative md:w-1/2 mb-8 md:mb-0">
              <img src={Flowerpic} className='absolute right-5 md:top-[-40%] md:right-[35%] w-20 md:w-40 h-auto' alt="flower" />
              <h1 className="text-4xl md:text-7xl font-bold mb-6 ">
                Enfold <br /> the cycle with confidence
              </h1>

              <p className="text-lg mb-8">
                Embrace each cycle with our pads that offer <br />
                unmatched confidence and comfort.
              </p>

            </div>
            <div className="md:w-1/2  flex justify-end ">
              <img
                src={woman}
                alt="Woman pointing"
                className=" w-[600px]"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
