import React, { useState } from 'react';
import { InView } from 'react-intersection-observer'; // Importing Intersection Observer
import Slider from 'react-slick'; // Importing slick carousel
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const AboutUs = () => {
  const [showMore, setShowMore] = useState(false);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false, // Disable left and right arrows

  };

  return (
    <div className="py-8">
      <div className="py-8 px-4 sm:px-6 lg:px-8 bg-black w-full">
        <div className="flex flex-col lg:flex-row items-center w-full">
          {/* Left Section - Content */}
          <InView triggerOnce={true} threshold={0.5}>
            {({ inView, ref }) => (
              <div
                ref={ref} // Attach intersection observer
                className={`lg:w-1/2 text-left lg:text-left mb-4 lg:mb-0 ${inView ? 'animate__animated animate__fadeInLeft' : ''} w-full`}
              >
                <h2 className="text-3xl font-bold text-white mb-4">About Us</h2>
                <p className="text-lg text-white">
                  13 Maxi Cab has been operating in Sydney for many years. Our company has been providing Maxi Cabs service in its luxury fleet. We also provide Sedans, Wheelchair Taxis, Maxi Cabs, and Modified Vehicles for special needs at the best price across Sydney.
                  <br /><br />
                  Our vehicles and drivers are fully licensed, accredited, and comply with point to point commission, NSW.
                  <br /><br />
                  We are considered a reliable transport company for airport and corporate transfers. Over the years, we have offered 100% satisfactory trips for weddings, hens night, day trips, winery tours, school runs, and personal tours. We focus on customers’ requirements and aim to deliver maximum comfort because we believe in a customer-first policy.
                  <br /><br />
                  Flexible payment options are available, accepting Cash, Various Credit Cards, Cabcharge, E-Ticket, AMEX, Diners, etc.
                  <br /><br />
                  “Maxi Cab Sydney” is the registered trademark owned by Cabcharge Australia Limited, and 13 Maxi Cabs is not associated or affiliated with it.
                </p>
                <button
                  onClick={() => setShowMore(!showMore)}
                  className="mt-4 px-6 py-2 text-white font-semibold rounded-full shadow-lg bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-colors duration-300"
                >
                  {showMore ? 'Read Less' : 'Read More'}
                </button>

                {showMore && (
                  <div className="mt-4 text-lg text-white">
                    <h3 className="text-2xl font-bold text-white mb-2">Best Maxi Cab In Sydney</h3>
                    <p>
                      We provide the Best Maxi Cab in Sydney for your hassle-free travel. Whether you are arriving by Cruise Ship, Plane, or Local trips, our customers praise us and use our service repeatedly. Based in Sydney for almost 60 years, we have taxis with baby seats, large luggage, day trips, shuttle services, and hourly hire.
                      <br /><br />
                      If you are looking for the Best Maxi Cab in Sydney, please book with us on our 24-hour phone line or fill out the online form. All our drivers have to go through tough criminal and children checks, months of training, government licensing, and annual health checks. We make sure to have monitoring devices installed in all our vehicles.
                      <br /><br />
                      Our fleet is run by some of Sydney’s most experienced endorsed drivers with more than 20 years of experience. Our goal is to provide you with a pleasant ride, great customer service, and an affordable price. We provide the best maxi cab service in Sydney.
                    </p>
                  </div>
                )}
              </div>
            )}
          </InView>

          {/* Right Section - Image Slider */}
          <InView triggerOnce={true} threshold={0.5}>
            {({ inView, ref }) => (
              <div
                ref={ref} // Attach intersection observer
                className={`lg:w-1/2 flex justify-center ${inView ? 'animate__animated animate__fadeInRight' : ''} w-full`}
              >
                <Slider {...settings} className="w-full max-w-xl">
                  <div>
                    <img
                      src="https://13maxicabs.com/wp-content/uploads/2024/07/Frame-5-1.png"
                      alt="Maxi Cabs Service"
                      className="w-full h-auto object-cover rounded-lg"
                    />
                  </div>
                  <div>
                    <img
                      src="https://13maxicabs.com/wp-content/uploads/2024/07/Frame-5-1.png"
                      alt="Maxi Cabs Service"
                      className="w-full h-auto object-cover rounded-lg"
                    />
                  </div>
                </Slider>
              </div>
            )}
          </InView>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
