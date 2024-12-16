import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen px-4 sm:px-8 lg:px-16 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Image Grid */}
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-2">
            <Image
              src="/p1s4i11.png" // Replace with actual image path
              alt="Tacos"
              className="rounded-lg"
              width={500}
              height={300}
            />
          </div>
          <Image
            src="/p1s4i33.png" // Replace with actual image path
            alt="Burger"
            className="rounded-lg"
            width={250}
            height={200}
          />
          <Image
            src="/p1s4i5.png" // Replace with actual image path
            alt="Meal"
            className="rounded-lg"
            width={250}
            height={200}
          />
          <Image
            src="/images/steak.svg" // Replace with actual image path
            alt="chiken"
            className="rounded-lg"
            width={250}
            height={200}
          />
          <Image
            src="/images/vegplate.svg" // Replace with actual image path
            alt="vegplate"
            className="rounded-lg"
            width={250}
            height={200}
          />
        </div>

        {/* Text Content */}
        <div>
          <h2 className="text-yellow-500 text-xl font-semibold">Vasty Choice in</h2>
          <h1 className="text-4xl sm:text-5xl font-bold mt-2">
            Extra ordinary taste <br /> And Experienced
          </h1>
          <p className="text-gray-300 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras non nunc dui.
          </p>
          <div className="flex gap-4 mt-6">
            <div className="bg-yellow-500 text-black px-4 py-2 rounded-lg text-center">
              <p className="font-semibold">Fast Food</p>
            </div>
            <div className="bg-yellow-500 text-black px-4 py-2 rounded-lg text-center">
              <p className="font-semibold">Lunch</p>
            </div>
            <div className="bg-yellow-500 text-black px-4 py-2 rounded-lg text-center">
              <p className="font-semibold">Dinner</p>
            </div>
          </div>
          <div className="mt-8">
            <p className="text-2xl font-bold text-yellow-500">30+</p>
            <p className="text-gray-300">Years of Experience</p>
          </div>
        </div>
      </div>

     </div>
        );
}
