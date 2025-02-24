// import React from 'react';
import { motion } from 'framer-motion';
import pic1 from "../assets/img/1.svg";
import pic2 from "../assets/img/2.svg";
import pic3 from "../assets/img/3.svg";
import pic4 from "../assets/img/4.svg";
import pic5 from "../assets/img/5.svg";
import pic6 from "../assets/img/6.svg";
import '../assets/styles/style.css'



const features = [
  { icon: pic1, },
  { icon: pic2, },
  { icon: pic3, },
  { icon: pic4, },
  { icon: pic5, },
  { icon: pic6, }
];

const Features = () => {
  return (
    <section className="py-16 bg-[#F2EFF5]">
      <div className=" mx-auto max-w-7xl px-4 flex flex-col md:flex-row items-center">
        <div className='md:w-1/2'>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-semibold mb-12"
          >
            Every pad is  <br />
            produced according <br />
            to the standard of <br />
            medicine
          </motion.h1>
        </div>

        <div className=" md:w-1/2 grid grid-cols-3  gap-8">
          {features.map((Feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center"
            >
              <img src={Feature.icon} alt={`Feature ${index}`} className="w-20 h-20 mb-4" />

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;