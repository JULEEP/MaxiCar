import React from 'react';

const LatestNews = () => {
  const articles = [
    {
      title: "Beat the Christmas Rush: Plan Your Sydney Airport Transfers with Ease",
      image: "https://13maxicabs.com/wp-content/uploads/2023/11/WhatsApp-Image-2024-07-24-at-2.33.09-PM-300x171.jpeg",
      link: "#"
    },
    {
      title: "Sydney New Year’s Eve Celebrations: A Guide for Taxi Riders",
      image: "https://13maxicabs.com/wp-content/uploads/2023/11/WhatsApp-Image-2024-07-26-at-12.50.21-PM-300x171.jpeg",
      link: "#"
    },
    {
      title: "The Ultimate Guide to Store Beach in Manly: Discover Australia’s Hidden Gem",
      image: "https://13maxicabs.com/wp-content/uploads/2023/09/WhatsApp-Image-2024-07-19-at-4.51.32-PM-300x170.jpeg",
      link: "#"
    }
  ];

  return (
    <div className="py-8 bg-gray-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Latest News & Articles</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Loop through the articles */}
          {articles.map((article, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-lg">
              <div className="relative mb-4">
                {/* Image */}
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-40 object-cover rounded-t-lg"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{article.title}</h3>
              <a 
                href={article.link} 
                className="inline-block bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 transition"
              >
                Read More
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
