import Image from 'next/image';
import React from 'react';
export default function HomeComp1() {
  return (
    <div className="bg-black text-white min-h-screen flex items-center justify-center px-6 ">
      <div className="max-w-5xl grid md:grid-cols-2 gap-8 items-center">
        {/* Text Section */}
        <div className="space-y-4">
          <h2 className="text-yellow-400 font-bold text-lg">So Quick & Creamy!</h2>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            The Art of speed food Quality
          </h1>
          <p className="text-gray-300">
          Food writing shines when it's specific to the food's particular flavor, texture, or smell, making it more evocative and precise. Rather than describing a soup as “tasty” or “scrumptious,” try more specific words like “buttery,” “chunky,” or “minty.”
          </p>
          <button className="bg-yellow-400 text-black px-6 py-3 rounded-lg shadow-md hover:bg-yellow-500 transition">
            See Menu
          </button>
        </div>

        {/* Image Section */}
        <div className="relative">
          <Image
            src="/foodplate.jpg" 
            alt="Delicious food"
            width={500}
            height={500}
            className="rounded-lg shadow-lg"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-green-500/50 w-40 h-40 rounded-full blur-lg"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
