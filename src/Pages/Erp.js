import React from 'react';
import 'animate.css'; // Importing the animate.css library
import { InView } from 'react-intersection-observer'; // Importing Intersection Observer

const SchoolERP = () => {
  const clients = [
    {
      name: "John Doe",
      company: "ABC Logistics",
      testimonial: "13 Maxi Cabs has been a lifesaver for our company! Their reliable and prompt service has made transportation for our team so much easier. Highly recommend!",
      image: "https://static.vecteezy.com/system/resources/previews/003/478/772/original/cute-boy-employee-office-business-man-cartoon-vector.jpg"
    },
    {
      name: "Sarah Smith",
      company: "XYZ Events",
      testimonial: "We use 13 Maxi Cabs for all our event transportation needs. Their professional drivers and clean, spacious vehicles have made all our events run smoothly. Couldn't ask for better service!",
      image: "https://static.vecteezy.com/system/resources/previews/003/478/772/original/cute-boy-employee-office-business-man-cartoon-vector.jpg"
    },
    {
      name: "Michael Brown",
      company: "Tech Corp",
      testimonial: "13 Maxi Cabs has always provided reliable transport for our corporate trips. Their vehicles are always clean, and the drivers are always on time. Excellent service!",
      image: "https://static.vecteezy.com/system/resources/previews/003/478/772/original/cute-boy-employee-office-business-man-cartoon-vector.jpg"
    },
    {
      name: "Emma Williams",
      company: "Weddings by Emma",
      testimonial: "For all our wedding events, we rely on 13 Maxi Cabs to provide transportation for our guests. Their team is always on point, ensuring our clients arrive in style and comfort.",
      image: "https://static.vecteezy.com/system/resources/previews/003/478/772/original/cute-boy-employee-office-business-man-cartoon-vector.jpg"
    },
    {
      name: "James Lee",
      company: "EventPlanners Ltd",
      testimonial: "13 Maxi Cabs is our go-to for any event. Their service is prompt, professional, and always on time. Highly recommended!",
      image: "https://static.vecteezy.com/system/resources/previews/003/478/772/original/cute-boy-employee-office-business-man-cartoon-vector.jpg"
    }
  ];

  return (
    <div className="py-8">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">13 Maxi Cabs Happy Clients</h2>
        <p className="text-base text-gray-600 mb-8">
          Here's what our happy clients have to say about us. We strive to provide the best transportation solutions, tailored to your needs.
        </p>

        {/* Client Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 ml-12 md:grid-cols-3 lg:grid-cols-5 gap-8 justify-center">
          {/* Loop over clients and generate each client card */}
          {clients.map((client, index) => (
            <InView
              key={index}
              triggerOnce={true}
              threshold={0.5}
            >
              {({ inView, ref }) => (
                <div
                  ref={ref}
                  className={`bg-white p-4 rounded-lg shadow-lg transform transition-transform hover:scale-105 ${inView ? 'animate__animated animate__fadeIn' : ''}`}
                  style={{ minHeight: "200px", maxWidth: "250px", transition: "all 0.3s ease", boxShadow: inView ? '0 4px 20px rgba(0, 123, 255, 0.4)' : 'none' }} // Smaller height and blue shadow
                >
                  <div className="flex justify-center mb-4">
                    <img
                      src={client.image}
                      alt={client.name}
                      className="w-20 h-20 object-cover rounded-full border-4 border-gray-300"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">{client.name}</h3>
                  <p className="text-sm text-gray-600">{client.company}</p>
                  <p className="text-sm text-gray-700 mt-4 italic">"{client.testimonial}"</p>
                </div>
              )}
            </InView>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SchoolERP;
