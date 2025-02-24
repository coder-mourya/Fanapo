// import React from 'react';
import { Helmet } from 'react-helmet-async';
import aboutPic from "../assets/img/about.png"
import "../assets/styles/style.css"


const About = () => {
  return (
    <>
      <Helmet>
        <title>About Fanapo - Our Story and Mission</title>
        <meta name="description" content="Learn about Fanapo's mission to transform feminine hygiene with innovative, health-conscious products" />
      </Helmet>
      <section className="py-16 bg-white about-section">

        <div className="container mx-auto px-4 ">

          <div className="grid md:grid-cols-2  ">
            <div className="relative items-center">
              <img
                src={aboutPic}
                alt="Fanapo Pad"
                className="rounded-3xl w-full"
              />

            </div>
            <div className="max-w-xl">
              <h2 className="text-4xl font-bold mb-6 mt-12 md:mt-0 logo">FANAPO</h2>
              <p className="text-gray-600 mb-8">
                was born from a personal mission to transform the way we approach feminine hygiene. Our founder, a dedicated healthcare professional with experience in Delhi, encountered a recurring issue: traditional menstrual pads often cause discomfort and pose health risks, such as skin irritation and pH imbalance due to bacterial buildup.
              </p>
              <p className="text-gray-600 mb-8">
                Despite advancements in feminine hygiene products, the founder experienced rashes, infections, and discomfort from the non-breathable materials and plastic components in conventional pads. Driven by these firsthand experiences and a commitment to providing innovative solutions, the journey to create a superior alternative began.
              </p>
              <p className="text-gray-600">
                Thus, Mia was founded with a clear mission: to shape the conversation around feminine hygiene by focusing on health, comfort, and empowerment. Our brand name, "My Inner Ally," reflects our dedication to being a supportive companion for women, providing products that enhance their intimate hygiene and overall well-being.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;