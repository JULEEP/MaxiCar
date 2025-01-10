import React from 'react';
import { InView } from 'react-intersection-observer'; // Importing Intersection Observer

const AboutUs = () => {
  return (
    <div className='py-8'>
      <div className="py-8 px-4 sm:px-6 lg:px-8"> {/* Added padding for smaller screens */}
        <div className="container mx-auto flex flex-col lg:flex-row items-center">
          {/* Left Section - Content */}
          <InView
            triggerOnce={true}  // Trigger animation once when element comes into view
            threshold={0.5}      // Trigger when 50% of the element is visible
          >
            {({ inView, ref }) => (
              <div
                ref={ref} // Attach intersection observer
                className={`lg:w-1/2 text-left lg:text-left mb-4 lg:mb-0 ${inView ? 'animate__animated animate__fadeInLeft' : ''}`}
              >
                <h2 className="text-3xl font-bold text-gray-800 mb-4">About Macbell EduCare</h2>
                <p className="text-lg text-gray-600">
                  At Macbell EduCare, we are committed to enhancing the educational experience by providing innovative management solutions tailored to the needs of schools, coaching centers, libraries, and more.
                  <br /><br />
                  Our platform integrates cutting-edge technology with user-friendly features, ensuring seamless operations and improved communication across all stakeholders. With years of experience and a passion for empowering education, Macbell EduCare has become a trusted partner for institutions aiming to streamline their processes and deliver excellence.
                </p>
              </div>
            )}
          </InView>

          {/* Right Section - Image */}
          <InView
            triggerOnce={true}  // Trigger animation once when element comes into view
            threshold={0.5}      // Trigger when 50% of the element is visible
          >
            {({ inView, ref }) => (
              <div
                ref={ref} // Attach intersection observer
                className={`lg:w-1/2 flex justify-center ${inView ? 'animate__animated animate__fadeInRight' : ''}`}
              >
                <img
                  src="https://static.vecteezy.com/system/resources/thumbnails/012/939/271/original/animated-presentation-isolated-scene-strategy-meeting-business-plan-looped-flat-2d-characters-4k-footage-with-alpha-channel-colorful-illustration-for-mobile-website-animation-video.jpg"
                  alt="About Macbell EduCare"
                  className="w-full h-auto sm:h-[250px] md:h-[300px] lg:h-[350px] object-cover rounded-lg"
                />
              </div>
            )}
          </InView>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
