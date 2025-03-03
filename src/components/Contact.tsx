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
      <section className="py-16 bg-[#EAB5C2] relative">
        <img
          src={menses}
          alt="Decorative"
          className="max-w-[200px] absolute bottom-0 left-0 hidden md:block "
        />

        <div className=" max-w-7xl px-4 mx-auto ">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className='text-center md:text-start'>
              <h1 className="text-3xl md:text-5xl font-semibold mb-6">Please fill the form<br />for purchasing.</h1>
              <p className="text-lg md:text-3xl font-normal mb-8">
                We will delivered the product<br />in Chandigarh, himachal and<br />Haryana.
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
                  <select
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#E91E63] focus:border-transparent"
                    required
                  >
                    <option value="">Select Quantity</option>
                    <option value="1">1 Pack</option>
                    <option value="2">2 Packs</option>
                    <option value="3">3 Packs</option>
                  </select>
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