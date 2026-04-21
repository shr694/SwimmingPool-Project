import React from "react";
import two from '../assets/water1.jpg'
const Discovermore= () => {
  return (
    <div className="bg-slate-50 py-16 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        
        
        <div className="w-full h-full">
          <img
          src={two}
            alt="Swimming"
            className="w-full h-[400px] md:h-[400px] object-cover rounded-lg shadow-md"
          />
        </div>

       
        <div>
          <p className="text-gray-500 text-sm mb-2">What's New</p>

          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 leading-snug">
            We Care About <br /> Your Safety
          </h2>

          <div className="w-12 h-[2px] bg-gray-300 my-4"></div>

          <p className="text-gray-600 mb-6">
            I'm a paragraph. Click here to add your own text and edit me.
            It’s easy. Just click “Edit Text” or double click me to add your
            own content and make changes to the font.
          </p>

          <button className="bg-blue-900 mt-6 text-white px-6 py-2 rounded hover:bg-blue-800 transition">
            Discover More
          </button>
        </div>

      </div>
    </div>
  );
};

export default Discovermore ;