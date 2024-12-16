import Image from 'next/image';

export default function HomeComp2() {
  return (
    <div className="bg-black text-white min-h-0 flex items-center justify-center px-6">
      <div className="max-w-6xl grid md:grid-cols-2 gap-12 items-center">
        {/* Text Section */}
        <div className="space-y-6">
          <h2 className="text-yellow-400 font-bold text-lg">About us</h2>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            We Create the best foody product
          </h1>
          <p className="text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam 
            adipisci voluptatem nobis molestias mollitia voluptatibus 
            blanditiis, fugiat laborum sit nulla, neque vitae. Libero nulla
            deleniti modi minus molestiae eius distinctio.
          </p>
          <ul className="space-y-3">
            <li className="flex items-start space-x-3">
              <div className="bg-yellow-400 w-3 h-3 rounded-full mt-1"></div>
              <p>Lorem nisi, id ex adipisicing elit. Qui et in consequat.</p>
            </li>
            <li className="flex items-start space-x-3">
              <div className="bg-yellow-400 w-3 h-3 rounded-full mt-1"></div>
              <p>Quibusdam deleniti perspiciatis blanditiis non ducimus fugiat fringilla.</p>
            </li>
            <li className="flex items-start space-x-3">
              <div className="bg-yellow-400 w-3 h-3 rounded-full mt-1"></div>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </li>
          </ul>
          <button className="bg-yellow-400 text-black px-6 py-3 rounded-lg shadow-md hover:bg-yellow-500 transition">
            Read More
          </button>
        </div>

        {/* Image Section */}
        <div className="grid grid-cols-2 gap-4">
          <div className="relative">
            <Image
              src="/Framele.jpg" // Replace with your actual image path
              alt="Food item 1"
              width={300}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="relative">
            <Image
              src="/Frameri.jpg" // Replace with your actual image path
              alt="Food item 2"
              width={300}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="relative">
            <Image
              src="/heroimg.jpg" // Replace with your actual image path
              alt="Food item 3"
              width={300}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
