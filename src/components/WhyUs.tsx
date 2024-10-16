export default function WhyChooseUs() {
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-center">Why choose us</h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto text-center">
          Experience exceptional convenience and quality with our services. We prioritize your satisfaction with fast, reliable delivery and secure payment options
          </p>
          <section className="py-16 px-6 bg-[#f8dbba] rounded-lg">
            <div className="container mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="flex items-start border-l-4 border-[#613502] pl-6">
                  <div className="flex flex-col text-left">
                    <h3 className="text-lg font-semibold mb-2">Free Shipping</h3>
                    <p className="text-gray-600">When you spend $30 or above</p>
                  </div>
                </div>
                <div className="flex items-start border-l-4 border-[#613502] pl-6">
                  <div className="flex flex-col text-left">
                    <h3 className="text-lg font-semibold mb-2">24/7 Available</h3>
                    <p className="text-gray-600">Need help? Contact us anytime</p>
                  </div>
                </div>
                <div className="flex items-start border-l-4 border-[#613502] pl-6">
                  <div className="flex flex-col text-left">
                    <h3 className="text-lg font-semibold mb-2">Satisfied or Return</h3>
                    <p className="text-gray-600">Easy 30-day policy</p>
                  </div>
                </div>
                <div className="flex items-start border-l-4 border-[#613502] pl-6">
                  <div className="flex flex-col text-left">
                    <h3 className="text-lg font-semibold mb-2">100% Secure Payment</h3>
                    <p className="text-gray-600">Cash on delivery</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    );
  }