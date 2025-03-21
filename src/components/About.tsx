// import React from 'react';
// import { Helmet } from 'react-helmet-async';
import aboutPic from "../assets/img/about.jpg"
import "../assets/styles/style.css"


const About = () => {
  return (
    <>
      {/* <Helmet>
        <title>About Fanapo - Our Story and Mission</title>
        <meta name="description" content="Learn about Fanapo's mission to transform feminine hygiene with innovative, health-conscious products" />
      </Helmet> */}
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
              <h2 className="text-4xl font-bold mb-6 mt-12 md:mt-0 logo text-center md:text-start">FANAPO</h2>
              <p className="text-gray-600 mb-8">
                FANAPO (Sanitary Napkins) was born from a mission to transform the way we approach feminine hygiene. <br /> Our founder, a dedicated healthcare professional with more than 40 years of experience in his field, witnessed a gap in this field: lack of availability of menstrual pads in Tier 2 and Tier 3 cities. <br /> The option available there with girls was traditional which often caused discomfort and pose health risks, such as skin irritation and pH imbalance due to bacterial buildup. <br />

                Thus, FANAPO (Sanitary Napkins) was founded with a clear mission: to shape the conversation around feminine hygiene by focusing on health, comfort, and empowerment. <br /> The product is made for easier use amongst women and girls with each pad having a separate packing to be carried easily by user. <br /> The product is manufactured with extra care and is ETO (Ethylene Oxide Gas) sterilized to maintain the extra sensitivity towards moisture and heat. <br /> Our brand name, "FANAPO," reflects our dedication to being a supportive companion for women, providing products that enhance their intimate hygiene and overall well-being.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;