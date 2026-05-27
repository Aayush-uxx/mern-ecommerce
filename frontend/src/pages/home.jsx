import Hero from "../components/shared/Hero";
import Layout from "../components/layout/layout";
const Home = () => {
  return (
    <Layout>
      <main className="flex-grow">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Welcome to LaliMart
            </h1>
            <p className="text-lg md:text-xl text-blue-100">
              Your one-stop shop for everything
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <Hero />
        </div>
      </main>
    </Layout>
  );
};

export default Home;
