import React from 'react';
import { Helmet } from 'react-helmet-async';
import { toast } from 'react-toastify';
import menses from "../assets/img/menses.png"


const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Form submitted successfully!');
  };

  return (
    <>
      <Helmet>
        <title>Contact Us - Fanapo</title>
        <meta name="description" content="Get in touch with us for any queries or support" />
      </Helmet>
      <section className="py-16 bg-[#EAB5C2] relative" id='contact'>
        <img
          src={menses}
          alt="Decorative"
          className="max-w-[200px] absolute bottom-0 left-0 hidden md:block "
        />

        <div className=" max-w-7xl px-4 mx-auto ">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className='text-center md:text-start'>
              <h1 className="text-3xl md:text-4xl font-medium mb-6">
                We will deliver the product without additional delivery charges in <span className='text-[#D70283]'>Chandigarh, <br />Himachal Pradesh, <br /> Haryana and Delhi NCR.</span>
              </h1>
              <p className="text-lg md:text-2xl font-medium mb-8 text-[#1F161A]">
                Actual freight to pay in other states in India.
              </p>

            </div>
            <div className="bg-[#F2EFF5] p-8 rounded-3xl shadow-lg">
              <h3 className="text-2xl font-semibold mb-6">Fill the form</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#E91E63] focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email address"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#E91E63] focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Mobile number"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#E91E63] focus:border-transparent"
                    required
                  />
                </div>
                <div>
                <input
                    type="tel"
                    placeholder="Quantity"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#E91E63] focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Shipping address"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#E91E63] focus:border-transparent"
                    rows={4}
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#D70283] text-white py-3 rounded-lg hover:bg-[#D81B60] transition-colors font-medium"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;