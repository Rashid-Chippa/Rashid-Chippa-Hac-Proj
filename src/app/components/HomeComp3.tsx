import Image from 'next/image';

export default function FoodItems() {
  return (
    <div className="bg-black text-white py-12 px-6">
      <div className="max-w-7xl mx-auto text-center">
        {/* Header Section */}
        <h2 className="text-yellow-400 font-bold text-lg">Food Category</h2>
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight my-4">
          Choose Food Item
        </h1>
      </div>

      {/* Food Items Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-7xl mx-auto mt-8">
        {/* Food Item 1 */}
        <div className="relative group">
          <Image
            src="/p1s4i5.png" // Replace with your actual image path
            alt="Food item 1"
            width={300}
            height={300}
            className="rounded-lg shadow-lg"
          />
          <div className="absolute top-4 left-4 bg-yellow-400 text-black px-4 py-2 text-sm font-bold rounded-md opacity-0 group-hover:opacity-100 transition">
            Save 30% <br /> Fast Food Dish
          </div>
        </div>

        {/* Food Item 2 */}
        <div>
          <Image
            src="/p1s4i2.png" // Replace with your actual image path
            alt="Food item 2"
            width={300}
            height={300}
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Food Item 3 */}
        <div>
          <Image
            src="/p1s4i3.png" // Replace with your actual image path
            alt="Food item 3"
            width={300}
            height={300}
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Food Item 4 */}
        <div>
          <Image
            src="/p1s4i4.png" // Replace with your actual image path
            alt="Food item 4"
            width={300}
            height={300}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}
