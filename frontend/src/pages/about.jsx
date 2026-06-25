import Layout from "../components/layout/layout";

const About = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-4">Why to Choose LaliMart</h1>
        <p className="text-gray-600 mb-4">
          LaliMart is your one-stop shop for everything you need.
        </p>
        <p className="text-gray-600 text-xl">
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl hover:scale-105 transition duration-300 hover:bg-blue-100 grig grid-cols-3 gap-6">
            <span>❤</span>
            <h3>Quality Products</h3>
            You get all the premium quality products. If you don't get satisfy with our product there is the facility for the return system
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl hover:scale-105 transition duration-300 hover:bg-blue-100 gap-6">
            <span>🌹</span>
            <h3>Smooth, Easy and friendly UI.</h3>
            <p>You will get the easy and friendly User Interface</p> 
          </div><br></br>
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl hover:scale-105 transition duration-300 hover:bg-blue-100">
            <span>🎉</span>
            <h3>Shop in single place</h3>
            <p>Here you will get all your required products here only in LaliMart</p>
          </div><br></br>
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl hover:scale-105 transition duration-300 hover:bg-blue-100">
            <span>🚗</span>
            <h3> Home delivery</h3>
            <p>LaliMart provides the Home delivery Service with 0 charge inside the Kathmandu, Bhaktapur and Lalitpur </p>
          </div><br></br>
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl hover:scale-105 transition duration-300 hover:bg-blue-100">
            <span>✅</span>
            <h3>❤Certified</h3>
            <p>Our system is certified by ISO</p>
          </div>   
        </p>
      </div>
    </Layout>
  );
};

export default About;
