import Layout from "../components/layout/layout";

const Contact = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="text-gray-600 mb-2">📍 Kathmandu, Nepal</p>
            <p className="text-gray-600 mb-2">📞 +977 9812345678</p>
            <p className="text-gray-600 mb-2">✉️ support@lalimart.com</p>
          </div>
          <div>
            <form>
              <input
                type="text"
                placeholder="Name"
                className="border p-2 w-full mb-2 rounded"
              />
              <input
                type="email"
                placeholder="Email"
                className="border p-2 w-full mb-2 rounded"
              />
              <textarea
                placeholder="Message"
                className="border p-2 w-full mb-2 rounded"
                rows="4"
              ></textarea>
              <button className="bg-blue-600 text-white px-4 py-2 rounded">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
