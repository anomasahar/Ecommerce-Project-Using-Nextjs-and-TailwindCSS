import Image from 'next/image';
import sampleImage from '@/assets/Sample.jpeg';

export default function AboutUs() {
  return (
    <div className="relative bg-white py-16">
      <div className="relative mx-auto flex flex-col md:flex-row items-center px-4 md:px-8 space-y-8 md:space-y-0 w-full">
        
        <div className="md:w-1/2 w-full flex justify-center items-center mt-10">
          <Image
            src={sampleImage}
            alt="Decorative Image"
            width={400}
            height={400}
            className="w-full h-auto max-w-sm object-cover"
          />
        </div>

        <div className="md:w-[45%] w-full bg-[#f8dbba] p-6 md:p-10 shadow-lg relative z-10 -mt-8 md:-translate-x-24 lg:-translate-x-48 lg:translate-y-20 lg:max-w-lg">
          <h1 className="text-2xl md:text-3xl font-bold mb-4">About Us</h1>
          <h2 className="text-sm md:text-lg lg:text-2xl font-bold leading-tight text-gray-900 mb-6">
            We believe that your handbag is more than just an accessory; it&apos;s a statement of your style and a reflection of your unique personality.
          </h2>
          <p className="text-xs md:text-base text-gray-600">
            At MIDNIGHT ESSENCE, we&apos;re not just in the business of creating handbags; we&apos;re in the business of crafting stories. Each of our handbags is designed with the utmost care, combining elegance and functionality to complement your lifestyle. Our journey began with a simple idea – to offer a diverse range of high-quality handbags that cater to the unique tastes and needs of our customers.
          </p>
        </div>
      </div>
    </div>
  );
}
