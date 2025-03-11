import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import menses from "../assets/img/menses.png";
import { useForm, ValidationError } from '@formspree/react';



const Contact = () => {
  const [quantity, setQuantity] = useState("");
  const [state, handleSubmit] = useForm("xoveqqbk");

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = parseInt(e.target.value, 10);
    if (isNaN(value) || value < 0) value = 0;
    if (value > 1000) value = 1000;
    setQuantity(value.toString());
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await handleSubmit(e);

    if (state.succeeded) {
        (e.target as HTMLFormElement).reset(); // Type assertion here
        setQuantity("");  // Clear quantity state as well
    }
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
              <form onSubmit={handleFormSubmit} key={state.succeeded ? "reset" : "active"} className="space-y-6">
                <div>
                  <input
                    type="text"
                    id='name'
                    name='name'
                    placeholder="Name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#E91E63] focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    id='email'
                    name='email'
                    placeholder="Email address"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#E91E63] focus:border-transparent"
                    required
                  />
                  <ValidationError field="email" prefix="Email" errors={state.errors} />
                </div>
                <div>
                  <input
                    type="tel"
                    id='phone'
                    name='phone'
                    placeholder="Mobile number"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#E91E63] focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <input
                    type="number"
                    id='quantity'
                    name='quantity'
                    placeholder="Quantity"
                    value={quantity}
                    onChange={handleQuantityChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#E91E63] focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <textarea
                    id='address'
                    name='address'
                    placeholder="Shipping address"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#E91E63] focus:border-transparent"
                    rows={4}
                    required
                  ></textarea>
                </div>

                {state.succeeded && (
                  <p className="text-green-500 font-medium text-center">
                    Thank you! Your submission has been received.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={state.submitting}
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