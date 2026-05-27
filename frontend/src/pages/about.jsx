import Layout from "../components/layout/layout";

const About = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-4">About Us</h1>
        <p className="text-gray-600 mb-4">
          LaliMart is your one-stop shop for everything you need.
        </p>
        <p className="text-gray-600">
          We provide quality products at affordable prices with fast delivery.
        </p>
      </div>
    </Layout>
  );
};

export default About;
