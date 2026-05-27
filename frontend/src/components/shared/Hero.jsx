const Hero = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-yellow-500 text-gray-900 max-w-2xl mx-auto rounded-lg p-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">
          ☀️ Summer Sale 30% Off ☀️
        </h2>
        <p className="mb-4">Shop the latest trends with exclusive discounts</p>
        <button className="bg-gray-900 text-white px-6 py-2 rounded-lg font-semibold hover:bg-gray-800 transition">
          Shop Now →
        </button>
      </div>
    </div>
  );
};
export default Hero;
