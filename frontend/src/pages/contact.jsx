import Layout from "../components/layout/layout";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <Layout>
      <div className="bg-gray-50 min-h-screen">
        <div className="bg-blue-600 text-white text-center py-16 px-4">
          <h1 className="text-4xl font-bold mb-3">Get in Touch</h1>
          <p className="text-lg opacity-90">
            We'd love to hear from you. Reach out anytime.
          </p>
        </div>
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
            <div className="flex flex-col gap-6">

              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Contact Information</h2>
                <p className="text-gray-500">
                  Fill the form or reach out through any of these channels.
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-md p-5 flex items-center gap-4 hover:shadow-lg transition duration-300">
                <div className="bg-blue-100 text-blue-600 w-12 h-12 rounded-full flex items-center justify-center text-xl">
                  📍
                </div>
                <div>
                  <p className="text-sm text-gray-400">Location</p>
                  <p className="text-gray-800 font-medium">Kathmandu, Nepal</p>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-md p-5 flex items-center gap-4 hover:shadow-lg transition duration-300">
                <div className="bg-blue-100 text-blue-600 w-12 h-12 rounded-full flex items-center justify-center text-xl">
                  📞
                </div>
                <div>
                  <p className="text-sm text-gray-400">Phone</p>
                  <p className="text-gray-800 font-medium">+977 981-2345678</p>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-md p-5 flex items-center gap-4 hover:shadow-lg transition duration-300">
                <div className="bg-blue-100 text-blue-600 w-12 h-12 rounded-full flex items-center justify-center text-xl">
                  ✉️
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <p className="text-gray-800 font-medium">support@lalimart.com</p>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-md p-5 flex items-center gap-4 hover:shadow-lg transition duration-300">
                <div className="bg-blue-100 text-blue-600 w-12 h-12 rounded-full flex items-center justify-center text-xl">
                  🕐
                </div>
                <div>
                  <p className="text-sm text-gray-400">Working Hours</p>
                  <p className="text-gray-800 font-medium">Mon - Sat, 9am - 6pm</p>
                </div>
              </div>

            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-1">Send a Message</h2>
              <p className="text-gray-500 mb-6 text-sm">
                Fill out the form and we'll get back to you within 24 hours.
              </p>

              <form className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <label className="text-sm font-medium text-gray-700">Name</label>
                  <input
                    type="text"
                    placeholder="Your full name"
                    className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-sm font-medium text-gray-700">Message</label>
                  <textarea
                    placeholder="Write your message here..."
                    rows="5"
                    className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm resize-none"
                  ></textarea>
                </div>

                <Button className="bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition duration-300 w-full mt-2">
                  Send Message
                </Button>

              </form>
            </div>

          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;