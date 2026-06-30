import Layout from "../components/layout/layout";
const About = () => {
  return (
    <Layout>
      <section className="bg-blue-500 text-white text-center py-8 px-4">
        <h1 className="text-3xl font-bold mb-4 text-left">About Us</h1>
        <p className="text-xl opacity-90 text-left">
          Your trusted online shopping destination in the Kathmandu Valley
        </p>
      </section>
      <section className="bg-gray-50 py-12 px-4">
        <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="bg-white rounded-xl shadow-md p-6">
            <p className="text-3xl font-bold text-blue-600">500+</p>
            <p className="text-gray-600 mt-1">Products</p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6">
            <p className="text-3xl font-bold text-blue-600">10,000+</p>
            <p className="text-gray-600 mt-1">Happy Customers</p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <p className="text-3xl font-bold text-blue-600">3</p>
            <p className="text-gray-600 mt-1">Cities Served</p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <p className="text-3xl font-bold text-blue-600">Free</p>
            <p className="text-gray-600 mt-1">Home Delivery</p>
          </div>
        </div>
      </section>
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold mb-4">Our Story</h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 leading-relaxed">
            LaliMart was founded with a simple mission — to make quality
            shopping accessible to everyone in Kathmandu, Bhaktapur, and
            Lalitpur. We started small, but our passion for serving our
            community has helped us grow into a platform thousands of people
            trust every day.
          </p>
        </div>
      </section>
      <section className="bg-gray-50 py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">
            Why Choose LaliMart
          </h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto mb-10"></div>
          <div className="flex flex-col gap-6 max-w-2xl mx-auto">
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl hover:scale-105 hover:bg-blue-50 transition duration-300">
              <span className="text-3xl mb-2 block">❤️</span>
              <h3 className="text-xl font-semibold mb-2">Quality Products</h3>
              <p className="text-gray-600">
                You get all the premium quality products. Not satisfied? We have
                a hassle-free return system.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl hover:scale-105 hover:bg-blue-50 transition duration-300">
              <span className="text-3xl mb-2 block">🌹</span>
              <h3 className="text-xl font-semibold mb-2">
                Smooth & Friendly UI
              </h3>
              <p className="text-gray-600">
                You will get an easy and friendly User Interface designed for
                everyone.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl hover:scale-105 hover:bg-blue-50 transition duration-300">
              <span className="text-3xl mb-2 block">🎉</span>
              <h3 className="text-xl font-semibold mb-2">Shop in One Place</h3>
              <p className="text-gray-600">
                Find everything you need — all in one place, only at LaliMart.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl hover:scale-105 hover:bg-blue-50 transition duration-300">
              <span className="text-3xl mb-2 block">🚗</span>
              <h3 className="text-xl font-semibold mb-2">Free Home Delivery</h3>
              <p className="text-gray-600">
                LaliMart provides free home delivery inside Kathmandu,
                Bhaktapur, and Lalitpur.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl hover:scale-105 hover:bg-blue-50 transition duration-300">
              <span className="text-3xl mb-2 block">✅</span>
              <h3 className="text-xl font-semibold mb-2">ISO Certified</h3>
              <p className="text-gray-600">
                Our system is certified by ISO — your trust and safety is our
                priority.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-blue-600 text-white text-center py-16 px-4">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <div className="w-16 h-1 bg-white mx-auto mb-6"></div>
          <p className="text-xl leading-relaxed opacity-90">
            To provide every household in the Kathmandu Valley with affordable,
            quality products — delivered right to their doorstep.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default About;
