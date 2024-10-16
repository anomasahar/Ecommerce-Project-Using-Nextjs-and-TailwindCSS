import Image from "next/image";
import sampleImage from "@/assets/white.jpeg"; 

export default function Services() {
  return (
    <div className="bg-white py-16 px-4 md:px-20">
      <h2 className="text-4xl font-bold text-center mb-10">Our Services</h2>
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
          <h1 className="text-xl sm:text-2xl md:text-2xl font-bold leading-tight mb-6">
            Discover the Perfect Blend of Style and Functionality in Our Handcrafted Handbags
          </h1>
          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-semibold mb-2">Timeless Design</h2>
              <p className="text-gray-600">
                Our handbags are meticulously crafted with a focus on timeless designs that never go out of style, ensuring that your investment lasts for years.
              </p>
              <hr className="mt-4 border-gray-300" />
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-2">Premium Materials</h2>
              <p className="text-gray-600">
                We use only the finest materials, from luxurious leathers to durable fabrics, ensuring that each bag is as resilient as it is beautiful.
              </p>
              <hr className="mt-4 border-gray-300" />
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-2">Handcrafted Quality</h2>
              <p className="text-gray-600">
                Each handbag is handcrafted by skilled artisans, making every piece unique and ensuring the highest level of craftsmanship.
              </p>
              <hr className="mt-4 border-gray-300" />
            </div>
          </div>
        </div>

        <div className="flex justify-center md:ml-20">
          <Image
            src={sampleImage}
            alt="Elegant Handbag"
            width={350}
            height={400}
            className="rounded-lg w-full sm:max-w-[400px] md:max-w-none" // Use responsive classes to limit the max width
          />
        </div>
      </div>
    </div>
  );
}                         